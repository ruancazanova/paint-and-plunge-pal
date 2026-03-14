import { motion } from "framer-motion";
import { Paintbrush, Home, Layers, LayoutGrid, Box } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Pintura Interna",
    description: "Acabamento impecável em paredes, tetos e detalhes internos com tintas de alta qualidade e durabilidade.",
  },
  {
    icon: Home,
    title: "Pintura Externa",
    description: "Proteção e beleza para fachadas e áreas externas, resistente às intempéries e com cores vibrantes.",
  },
  {
    icon: Layers,
    title: "Rebaixamento de Teto com Drywall",
    description: "Instalação de forro de drywall com iluminação embutida, design moderno e acabamento perfeito para qualquer ambiente.",
  },
  {
    icon: LayoutGrid,
    title: "Divisórias de Drywall",
    description: "Criação de ambientes com divisórias de drywall, solução rápida, limpa e versátil para residências e escritórios.",
  },
  {
    icon: Box,
    title: "Colocação de Placa 3D",
    description: "Instalação de placas 3D decorativas que transformam paredes em verdadeiras obras de arte com textura e elegância.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Nossos Serviços</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Oferecemos soluções completas para transformar seu ambiente com qualidade profissional.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-6">
              <s.icon size={28} />
            </div>
            <h3 className="font-display font-bold text-xl text-primary mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
