import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Interior moderno com pintura profissional" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/60" />
    </div>
    <div className="relative container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
      >
        Transformando Espaços <br className="hidden md:block" /> com Precisão
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8"
      >
        Serviços profissionais de pintura residencial, comercial e rebaixamento de teto com acabamento impecável.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Button variant="hero" asChild>
          <a href="#contato">Solicite um Orçamento Grátis</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
