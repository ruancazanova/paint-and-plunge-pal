import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const portfolioCategories = {
  rebaixamento: [
    { img: ceiling1, title: "Rebaixamento de Teto 1", category: "Rebaixamento teto" },
    { img: ceiling2, title: "Rebaixamento de Teto 2", category: "Rebaixamento teto" },
    { img: ceiling3, title: "Rebaixamento de Teto 3", category: "Rebaixamento teto" },
    { img: ceiling4, title: "Rebaixamento de Teto 4", category: "Rebaixamento teto" },
    { img: ceiling5, title: "Rebaixamento de Teto 5", category: "Rebaixamento teto" },
    { img: ceiling6, title: "Rebaixamento de Teto 6", category: "Rebaixamento teto" },
    { img: ceiling7, title: "Rebaixamento de Teto 7", category: "Rebaixamento teto" },
    { img: ceiling8, title: "Rebaixamento de Teto 8", category: "Rebaixamento teto" },
    { img: ceiling9, title: "Rebaixamento de Teto 9", category: "Rebaixamento teto" },
    { img: ceiling10, title: "Rebaixamento de Teto 10", category: "Rebaixamento teto" },
  ],
  externa: [{ img: portfolio2, title: "Pintura de Fachada", category: "Pintura externa" }],
  interna: [{ img: portfolio3, title: "Pintura de Quarto", category: "Pintura interna" }],
  placa3d: [{ img: portfolio4, title: "Parede com Placa 3D", category: "Placa 3D" }],
  divisoria: [{ img: portfolio5, title: "Divisória de Drywall", category: "Divisória" }],
} as const;

const categoryLabels = [
  { value: "rebaixamento", label: "Rebaixamento teto" },
  { value: "externa", label: "Pintura externa" },
  { value: "interna", label: "Pintura interna" },
  { value: "placa3d", label: "Placa 3D" },
  { value: "divisoria", label: "Divisória" },
] as const;

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Nosso Portfólio</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Clique nas categorias e veja nossos trabalhos recentes.</p>
        </div>

        <Tabs defaultValue="rebaixamento" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="h-auto flex-wrap gap-2 rounded-full bg-muted/70 p-2">
              {categoryLabels.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="rounded-full px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categoryLabels.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {portfolioCategories[category.value].map((project, i) => (
                  <motion.button
                    key={project.title}
                    type="button"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.45 }}
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-2xl text-left aspect-[4/5] w-full"
                    onClick={() => setSelectedImage(project.img)}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-90 flex items-end">
                      <div className="p-4 md:p-6">
                        <span className="text-xs font-medium text-primary-foreground/80">{project.category}</span>
                        <h3 className="font-display font-bold text-primary-foreground text-base md:text-lg">{project.title}</h3>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Imagem ampliada do portfólio"
            className="max-h-[90vh] max-w-full rounded-xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
