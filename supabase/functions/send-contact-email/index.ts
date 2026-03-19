const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const { nome, telefone, tipoTelefone, servicos, mensagem } = await req.json();

    if (!mensagem || !mensagem.trim()) {
      return new Response(
        JSON.stringify({ error: 'Mensagem é obrigatória' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const servicosText = servicos && servicos.length > 0
      ? servicos.join(', ')
      : 'Nenhum selecionado';

    const tipoTelefoneLabel: Record<string, string> = {
      whatsapp: 'WhatsApp',
      residencial: 'Telefone Residencial',
      comercial: 'Telefone Comercial',
    };

    const htmlContent = `
      <h2>Nova Solicitação de Orçamento</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nome</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${nome || 'Não informado'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Telefone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${telefone || 'Não informado'} (${tipoTelefoneLabel[tipoTelefone] || tipoTelefone})</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Serviços</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${servicosText}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mensagem</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${mensagem}</td>
        </tr>
      </table>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'RC Pinturas <onboarding@resend.dev>',
        to: ['rcpinturaserebaixamentos@gmail.com'],
        subject: `Novo Orçamento - ${nome || 'Cliente'}`,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend API error:', data);
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
