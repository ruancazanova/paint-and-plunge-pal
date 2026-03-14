import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Trabalho excelente! Fizeram a pintura de todo o apartamento e o rebaixamento da sala. Ficou lindo e entregaram no prazo.",
  },
  {
    name: "Carlos Oliveira",
    text: "Profissionais muito competentes. A pintura externa da minha casa ficou impecável. Recomendo a todos!",
  },
  {
    name: "Ana Costa",
    text: "O rebaixamento do teto com iluminação LED transformou completamente a minha cozinha. Superou todas as expectativas.",
  },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">O Que Dizem Nossos Clientes</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-background rounded-lg p-8 shadow-sm"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <p className="font-display font-semibold text-primary text-sm">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
