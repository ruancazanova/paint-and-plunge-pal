import { useState } from "react";
import { motion } from "framer-motion";
import { Paintbrush, Home, Layers, LayoutGrid, Box, Images } from "lucide-react";
import ServiceGalleryDialog from "./ServiceGalleryDialog";

import ceiling1 from "@/assets/ceiling-1.jpg";
import ceiling2 from "@/assets/ceiling-2.jpg";
import ceiling3 from "@/assets/ceiling-3.jpg";
import ceiling4 from "@/assets/ceiling-4.jpg";
import ceiling5 from "@/assets/ceiling-5.jpg";
import ceiling6 from "@/assets/ceiling-6.jpg";
import ceiling7 from "@/assets/ceiling-7.jpg";
import ceiling8 from "@/assets/ceiling-8.jpg";
import ceiling9 from "@/assets/ceiling-9.jpg";
import ceiling10 from "@/assets/ceiling-10.jpg";

const ceilingImages = [ceiling1, ceiling2, ceiling3, ceiling4, ceiling5, ceiling6, ceiling7, ceiling8, ceiling9, ceiling10];

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
    gallery: ceilingImages,
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

const ServicesSection = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<{ title: string; images: string[] } | null>(null);

  const handleOpenGallery = (title: string, images: string[]) => {
    setActiveGallery({ title, images });
    setGalleryOpen(true);
  };

  return (
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
              className={`bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center ${s.gallery ? "cursor-pointer" : ""}`}
              onClick={s.gallery ? () => handleOpenGallery(s.title, s.gallery!) : undefined}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-6">
                <s.icon size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              {s.gallery && (
                <div className="mt-4 inline-flex items-center gap-2 text-secondary text-sm font-medium">
                  <Images size={16} />
                  Ver galeria de fotos
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {activeGallery && (
        <ServiceGalleryDialog
          open={galleryOpen}
          onOpenChange={setGalleryOpen}
          title={activeGallery.title}
          images={activeGallery.images}
        />
      )}
    </section>
  );
};

export default ServicesSection;
