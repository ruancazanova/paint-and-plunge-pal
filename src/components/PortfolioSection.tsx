import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

import salaEstarImg from "@/assets/sala-estar.jpg";
import cozinhaImg from "@/assets/cozinha.jpg";
import quartoImg from "@/assets/quarto.jpg";
import banheiroImg from "@/assets/banheiro.jpg";
import salaJantarImg from "@/assets/sala-jantar.jpg";
import closetImg from "@/assets/closet.jpg";

// Ceiling gallery
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
import ceiling11 from "@/assets/ceiling-11.jpg";
import ceiling12 from "@/assets/ceiling-12.jpg";

// Pintura externa gallery
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
import pinturaExt11 from "@/assets/pintura-ext-11.jpg";
import pinturaExt12 from "@/assets/pintura-ext-12.jpg";

// Sala de Estar gallery
import salaEstar1 from "@/assets/sala-estar-1.jpg";
import salaEstar2 from "@/assets/sala-estar-2.jpg";
import salaEstar3 from "@/assets/sala-estar-3.jpg";
import salaEstar4 from "@/assets/sala-estar-4.jpg";
import salaEstar5 from "@/assets/sala-estar-5.jpg";
import salaEstar6 from "@/assets/sala-estar-6.jpg";
import salaEstar7 from "@/assets/sala-estar-7.jpg";
import salaEstar8 from "@/assets/sala-estar-8.jpg";
import salaEstar9 from "@/assets/sala-estar-9.jpg";
import salaEstar10 from "@/assets/sala-estar-10.jpg";
import salaEstar11 from "@/assets/sala-estar-11.jpg";
import salaEstar12 from "@/assets/sala-estar-12.jpg";

// Cozinha gallery
import cozinha1 from "@/assets/cozinha-1.jpg";
import cozinha2 from "@/assets/cozinha-2.jpg";
import cozinha3 from "@/assets/cozinha-3.jpg";
import cozinha4 from "@/assets/cozinha-4.jpg";
import cozinha5 from "@/assets/cozinha-5.jpg";
import cozinha6 from "@/assets/cozinha-6.jpg";
import cozinha7 from "@/assets/cozinha-7.jpg";
import cozinha8 from "@/assets/cozinha-8.jpg";
import cozinha9 from "@/assets/cozinha-9.jpg";
import cozinha10 from "@/assets/cozinha-10.jpg";
import cozinha11 from "@/assets/cozinha-11.jpg";
import cozinha12 from "@/assets/cozinha-12.jpg";

// Quarto gallery
import quarto1 from "@/assets/quarto-1.jpg";
import quarto2 from "@/assets/quarto-2.jpg";
import quarto3 from "@/assets/quarto-3.jpg";
import quarto4 from "@/assets/quarto-4.jpg";
import quarto5 from "@/assets/quarto-5.jpg";
import quarto6 from "@/assets/quarto-6.jpg";
import quarto7 from "@/assets/quarto-7.jpg";
import quarto8 from "@/assets/quarto-8.jpg";
import quarto9 from "@/assets/quarto-9.jpg";
import quarto10 from "@/assets/quarto-10.jpg";
import quarto11 from "@/assets/quarto-11.jpg";
import quarto12 from "@/assets/quarto-12.jpg";

// Banheiro gallery
import banheiro1 from "@/assets/banheiro-1.jpg";
import banheiro2 from "@/assets/banheiro-2.jpg";
import banheiro3 from "@/assets/banheiro-3.jpg";
import banheiro4 from "@/assets/banheiro-4.jpg";
import banheiro5 from "@/assets/banheiro-5.jpg";
import banheiro6 from "@/assets/banheiro-6.jpg";
import banheiro7 from "@/assets/banheiro-7.jpg";
import banheiro8 from "@/assets/banheiro-8.jpg";
import banheiro9 from "@/assets/banheiro-9.jpg";
import banheiro10 from "@/assets/banheiro-10.jpg";
import banheiro11 from "@/assets/banheiro-11.jpg";
import banheiro12 from "@/assets/banheiro-12.jpg";

// Sala de Jantar gallery
import salaJantar1 from "@/assets/sala-jantar-1.jpg";
import salaJantar2 from "@/assets/sala-jantar-2.jpg";
import salaJantar3 from "@/assets/sala-jantar-3.jpg";
import salaJantar4 from "@/assets/sala-jantar-4.jpg";
import salaJantar5 from "@/assets/sala-jantar-5.jpg";
import salaJantar6 from "@/assets/sala-jantar-6.jpg";
import salaJantar7 from "@/assets/sala-jantar-7.jpg";
import salaJantar8 from "@/assets/sala-jantar-8.jpg";
import salaJantar9 from "@/assets/sala-jantar-9.jpg";
import salaJantar10 from "@/assets/sala-jantar-10.jpg";
import salaJantar11 from "@/assets/sala-jantar-11.jpg";
import salaJantar12 from "@/assets/sala-jantar-12.jpg";

// Closet gallery
import closet1 from "@/assets/closet-1.jpg";
import closet2 from "@/assets/closet-2.jpg";
import closet3 from "@/assets/closet-3.jpg";
import closet4 from "@/assets/closet-4.jpg";
import closet5 from "@/assets/closet-5.jpg";
import closet6 from "@/assets/closet-6.jpg";
import closet7 from "@/assets/closet-7.jpg";
import closet8 from "@/assets/closet-8.jpg";
import closet9 from "@/assets/closet-9.jpg";
import closet10 from "@/assets/closet-10.jpg";
import closet11 from "@/assets/closet-11.jpg";
import closet12 from "@/assets/closet-12.jpg";

// Placa 3D gallery
import placa3d1 from "@/assets/placa3d-1.jpg";
import placa3d2 from "@/assets/placa3d-2.jpg";
import placa3d3 from "@/assets/placa3d-3.jpg";
import placa3d4 from "@/assets/placa3d-4.jpg";
import placa3d5 from "@/assets/placa3d-5.jpg";
import placa3d6 from "@/assets/placa3d-6.jpg";
import placa3d7 from "@/assets/placa3d-7.jpg";
import placa3d8 from "@/assets/placa3d-8.jpg";
import placa3d9 from "@/assets/placa3d-9.jpg";
import placa3d10 from "@/assets/placa3d-10.jpg";
import placa3d11 from "@/assets/placa3d-11.jpg";
import placa3d12 from "@/assets/placa3d-12.jpg";

// Divisória gallery
import divisoria1 from "@/assets/divisoria-1.jpg";
import divisoria2 from "@/assets/divisoria-2.jpg";
import divisoria3 from "@/assets/divisoria-3.jpg";
import divisoria4 from "@/assets/divisoria-4.jpg";
import divisoria5 from "@/assets/divisoria-5.jpg";
import divisoria6 from "@/assets/divisoria-6.jpg";
import divisoria7 from "@/assets/divisoria-7.jpg";
import divisoria8 from "@/assets/divisoria-8.jpg";
import divisoria9 from "@/assets/divisoria-9.jpg";
import divisoria10 from "@/assets/divisoria-10.jpg";
import divisoria11 from "@/assets/divisoria-11.jpg";
import divisoria12 from "@/assets/divisoria-12.jpg";

const ceilingImages = [ceiling1, ceiling2, ceiling3, ceiling4, ceiling5, ceiling6, ceiling7, ceiling8, ceiling9, ceiling10, ceiling11, ceiling12];
const pinturaExtImages = [pinturaExt1, pinturaExt2, pinturaExt3, pinturaExt4, pinturaExt5, pinturaExt6, pinturaExt7, pinturaExt8, pinturaExt9, pinturaExt10, pinturaExt11, pinturaExt12];
const salaEstarImages = [salaEstar1, salaEstar2, salaEstar3, salaEstar4, salaEstar5, salaEstar6, salaEstar7, salaEstar8, salaEstar9, salaEstar10, salaEstar11, salaEstar12];
const cozinhaImages = [cozinha1, cozinha2, cozinha3, cozinha4, cozinha5, cozinha6, cozinha7, cozinha8, cozinha9, cozinha10, cozinha11, cozinha12];
const quartoImages = [quarto1, quarto2, quarto3, quarto4, quarto5, quarto6, quarto7, quarto8, quarto9, quarto10, quarto11, quarto12];
const banheiroImages = [banheiro1, banheiro2, banheiro3, banheiro4, banheiro5, banheiro6, banheiro7, banheiro8, banheiro9, banheiro10, banheiro11, banheiro12];
const salaJantarImages = [salaJantar1, salaJantar2, salaJantar3, salaJantar4, salaJantar5, salaJantar6, salaJantar7, salaJantar8, salaJantar9, salaJantar10, salaJantar11, salaJantar12];
const closetImages = [closet1, closet2, closet3, closet4, closet5, closet6, closet7, closet8, closet9, closet10, closet11, closet12];
const placa3dImages = [placa3d1, placa3d2, placa3d3, placa3d4, placa3d5, placa3d6, placa3d7, placa3d8, placa3d9, placa3d10, placa3d11, placa3d12];
const divisoriaImages = [divisoria1, divisoria2, divisoria3, divisoria4, divisoria5, divisoria6, divisoria7, divisoria8, divisoria9, divisoria10, divisoria11, divisoria12];

const projects = [
  { img: portfolio1, title: "Rebaixamento de Teto", category: "Rebaixamento", gallery: ceilingImages },
  { img: portfolio2, title: "Pintura Externa", category: "Pintura", gallery: pinturaExtImages },
  { img: salaEstarImg, title: "Sala de Estar", category: "Pintura Interna", gallery: salaEstarImages },
  { img: cozinhaImg, title: "Cozinha", category: "Pintura Interna", gallery: cozinhaImages },
  { img: quartoImg, title: "Quarto", category: "Pintura Interna", gallery: quartoImages },
  
  { img: banheiroImg, title: "Banheiro", category: "Pintura Interna", gallery: banheiroImages },
  { img: salaJantarImg, title: "Sala de Jantar", category: "Pintura Interna", gallery: salaJantarImages },
  { img: portfolio4, title: "Parede com Placa 3D", category: "Placa 3D", gallery: placa3dImages },
  { img: portfolio5, title: "Divisória de Drywall", category: "Divisória", gallery: divisoriaImages },
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
