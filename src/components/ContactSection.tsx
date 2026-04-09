import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const servicos = [
  "Rebaixamento",
  "Pintura Interna",
  "Pintura Externa",
  "Divisórias",
  "3D",
];

const tiposTelefone = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "residencial", label: "Telefone Residencial" },
  { value: "comercial", label: "Telefone Comercial" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });
  const [tipoTelefone, setTipoTelefone] = useState("whatsapp");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showMsgError, setShowMsgError] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.mensagem.trim()) {
      setShowMsgError(true);
      return;
    }
    setShowMsgError(false);
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          nome: form.nome,
          telefone: form.telefone,
          tipoTelefone,
          servicos: selectedServices,
          mensagem: form.mensagem,
        },
      });

      if (error) throw error;

      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setForm({ nome: "", telefone: "", mensagem: "" });
      setSelectedServices([]);
      setTipoTelefone("whatsapp");
    } catch (err) {
      console.error('Erro ao enviar:', err);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Solicite um Orçamento</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Preencha o formulário e retornaremos rapidamente.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />
            <Input
              placeholder="Telefone"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              required
            />

            <div>
              <p className="text-sm font-medium mb-2 text-foreground">Tipo de Telefone</p>
              <RadioGroup value={tipoTelefone} onValueChange={setTipoTelefone} className="flex flex-wrap gap-4">
                {tiposTelefone.map((t) => (
                  <label key={t.value} className="flex items-center gap-2 cursor-pointer">
                    <RadioGroupItem value={t.value} />
                    <span className="text-sm text-foreground">{t.label}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <p className="text-sm font-medium mb-2 text-foreground">Tipo de Serviço</p>
              <div className="flex flex-wrap gap-3">
                {servicos.map((s) => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={selectedServices.includes(s)}
                      onCheckedChange={() => toggleService(s)}
                    />
                    <span className="text-sm text-foreground">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Textarea
                placeholder="Sua mensagem"
                value={form.mensagem}
                onChange={(e) => {
                  setForm({ ...form, mensagem: e.target.value });
                  if (e.target.value.trim()) setShowMsgError(false);
                }}
                rows={4}
                required
              />
              <p className="text-xs text-destructive mt-1">
                * Obrigatório — Descreva brevemente o serviço desejado.
              </p>
              {showMsgError && (
                <p className="text-xs text-destructive font-semibold mt-1">
                  Por favor, preencha a mensagem.
                </p>
              )}
            </div>

            <Button variant="cta" type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="font-display font-bold text-xl text-primary">Informações de Contato</h3>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone size={20} className="text-secondary shrink-0" />
              <span>(21) 96903-6086</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={20} className="text-secondary shrink-0" />
              <span>rcpinturaserebaixamentos@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-secondary shrink-0" />
              <span>Rio de Janeiro, RJ</span>
            </div>
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <p className="font-display font-semibold text-primary mb-2">Horário de Atendimento</p>
              <p className="text-sm text-muted-foreground">Seg a Sex: 8h às 18h</p>
              <p className="text-sm text-muted-foreground">Sáb: 8h às 12h</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
