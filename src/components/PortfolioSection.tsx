import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const projects = [
  { img: portfolio1, title: "Quarto com Rebaixamento", category: "Rebaixamento" },
  { img: portfolio2, title: "Fachada Comercial", category: "Pintura Externa" },
  { img: portfolio3, title: "Cozinha Moderna", category: "Rebaixamento" },
  { img: portfolio4, title: "Sala com Placa 3D", category: "Placa 3D" },
  { img: portfolio5, title: "Escritório com Divisórias", category: "Divisória de Drywall" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Nosso Portfólio</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Confira alguns dos nossos trabalhos recentes.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative rounded-lg overflow-hidden aspect-[4/3]"
          >
            <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-end">
              <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-accent">{p.category}</span>
                <h3 className="font-display font-bold text-primary-foreground text-lg">{p.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
