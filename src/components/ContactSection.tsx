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
              <span>(21) 98167-9342</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={20} className="text-secondary shrink-0" />
              <span>rcpinturaserebaixamentos@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-secondary shrink-0" />
              <span>Rio de Janeiro, RJ</span>
            </div>
            <div className="mt-6">
              <h3 className="font-display font-bold text-xl text-primary mb-4">Redes Sociais</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=5521981679342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/rcpintura_rebaixamento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[hsl(330,70%,50%)] to-[hsl(270,70%,50%)] hover:from-[hsl(330,70%,43%)] hover:to-[hsl(270,70%,43%)] text-white rounded-lg transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>
            <div className="mt-6 p-6 bg-muted rounded-lg">
              <p className="font-display font-semibold text-primary mb-2">Horário de Atendimento</p>
              <p className="text-sm text-muted-foreground">Seg a Sex: 8h às 17h</p>
              <p className="text-sm text-muted-foreground">Sáb: 8h às 12h</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
