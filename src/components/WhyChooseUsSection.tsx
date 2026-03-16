import whyQualidade from "@/assets/why-qualidade.jpg";
import whyPersonalizacao from "@/assets/why-personalizacao.jpg";
import whyPreco from "@/assets/why-preco.jpg";
import whyAgilidade from "@/assets/why-agilidade.jpg";
import whyAtendimento from "@/assets/why-atendimento.jpg";

const items = [
  {
    image: whyQualidade,
    title: "Qualidade",
    description:
      "Utilizamos materiais de primeira linha e contamos com uma equipe altamente capacitada para garantir um acabamento impecável.",
  },
  {
    image: whyPersonalizacao,
    title: "Personalização",
    description:
      "Adaptamos nossos serviços às suas necessidades e preferências, oferecendo soluções sob medida para cada projeto.",
  },
  {
    image: whyPreco,
    title: "Preço Justo",
    description:
      "Oferecemos um excelente custo-benefício, sem abrir mão da qualidade.",
  },
  {
    image: whyAgilidade,
    title: "Agilidade",
    description:
      "Cumprimos prazos e entregamos os serviços no prazo combinado.",
  },
  {
    image: whyAtendimento,
    title: "Atendimento Personalizado",
    description:
      "Nossa equipe está sempre à disposição para tirar suas dúvidas e oferecer um atendimento de excelência.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          Por que escolher a RC Pinturas & Rebaixamentos?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-start">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-md group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-active:-translate-y-2 group-active:scale-105"
                />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
