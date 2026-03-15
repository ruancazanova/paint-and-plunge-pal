import teamRodrigo from "@/assets/team-rodrigo.jpg";
import teamRuan from "@/assets/team-ruan.jpg";

const leaders = [
  {
    image: teamRodrigo,
    name: "Rodrigo Cazanova",
    role: "Proprietário",
    bio: [
      "Fundador da empresa, Rodrigo Cazanova é o responsável por planejar e acompanhar os serviços, sempre com dedicação e compromisso com a qualidade. Seu objetivo é transformar e valorizar cada espaço através de um trabalho bem executado.",
      "Com atenção aos detalhes e experiência na área, busca sempre oferecer resultados que atendam às expectativas dos clientes, prezando pela qualidade, responsabilidade e excelência em cada projeto.",
    ],
  },
  {
    image: teamRuan,
    name: "Ruan Cazanova",
    role: "Co-fundador",
    bio: [
      "Co-fundador da empresa, Ruan Cazanova atua no planejamento e na execução dos serviços, contribuindo com dedicação e comprometimento para garantir a qualidade em cada trabalho realizado. Seu foco é ajudar a transformar e valorizar ambientes através de um serviço bem-feito e profissional.",
      "Com responsabilidade e atenção aos detalhes, trabalha sempre buscando entregar resultados que atendam às expectativas dos clientes, mantendo o padrão de qualidade e excelência da empresa.",
    ],
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          Conheça Nossa Liderança
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-background rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-8"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-accent/30">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                {leader.name}
              </h3>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">
                {leader.role}
              </p>
              <div className="space-y-3">
                {leader.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
