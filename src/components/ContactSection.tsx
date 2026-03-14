import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", telefone: "", servico: "", mensagem: "" });
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
              placeholder="Telefone / WhatsApp"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              required
            />
            <Input
              placeholder="Tipo de serviço (Pintura, Rebaixamento...)"
              value={form.servico}
              onChange={(e) => setForm({ ...form, servico: e.target.value })}
            />
            <Textarea
              placeholder="Sua mensagem"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              rows={4}
            />
            <Button variant="cta" type="submit" className="w-full">
              Enviar Mensagem
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
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={20} className="text-secondary shrink-0" />
              <span>contato@pinturaspro.com.br</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-secondary shrink-0" />
              <span>São Paulo, SP</span>
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
