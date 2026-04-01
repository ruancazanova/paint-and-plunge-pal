import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

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

import pinturaExt1 from "@/assets/pintura-ext-1.jpg";
import pinturaExt2 from "@/assets/pintura-ext-2.jpg";
import pinturaExt3 from "@/assets/pintura-ext-3.jpg";
import pinturaExt4 from "@/assets/pintura-ext-4.jpg";
import pinturaExt5 from "@/assets/pintura-ext-5.jpg";
import pinturaExt6 from "@/assets/pintura-ext-6.jpg";
import pinturaExt7 from "@/assets/pintura-ext-7.jpg";
import pinturaExt8 from "@/assets/pintura-ext-8.jpg";
import pinturaExt9 from "@/assets/pintura-ext-9.jpg";
import pinturaExt10 from "@/assets/pintura-ext-10.jpg";

const ceilingImages = [ceiling1, ceiling2, ceiling3, ceiling4, ceiling5, ceiling6, ceiling7, ceiling8, ceiling9, ceiling10];
const pinturaExtImages = [pinturaExt1, pinturaExt2, pinturaExt3, pinturaExt4, pinturaExt5, pinturaExt6, pinturaExt7, pinturaExt8, pinturaExt9, pinturaExt10];

const projects = [
  { img: portfolio1, title: "Rebaixamento de Teto", category: "Rebaixamento", gallery: ceilingImages },
  { img: portfolio2, title: "Pintura de Fachada", category: "Pintura Externa", gallery: pinturaExtImages },
  { img: portfolio3, title: "Pintura de Quarto", category: "Pintura Interna" },
  { img: portfolio4, title: "Parede com Placa 3D", category: "Placa 3D" },
  { img: portfolio5, title: "Divisória de Drywall", category: "Divisória" },
];

const PortfolioSection = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<{ title: string; images: string[] } | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (project: typeof projects[0]) => {
    if (project.gallery) {
      setActiveGallery({ title: project.title, images: project.gallery });
      setGalleryOpen(true);
    }
  };

  return (
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
              whileHover={{ y: -10 }}
              className={`group relative rounded-lg overflow-hidden aspect-[4/3] ${p.gallery ? "cursor-pointer" : ""}`}
              onClick={() => handleCardClick(p)}
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-accent">{p.category}</span>
                  <h3 className="font-display font-bold text-primary-foreground text-lg">{p.title}</h3>
                  {p.gallery && (
                    <span className="inline-flex items-center gap-1 text-primary-foreground/80 text-xs mt-1">
                      <Images size={14} /> Ver galeria
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {activeGallery && (
        <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-primary">{activeGallery.title}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {activeGallery.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`${activeGallery.title} - Foto ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-[101]"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt={activeGallery?.title ?? "Imagem do portfólio"}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
