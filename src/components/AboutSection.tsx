import { Shield, Eye, Star } from "lucide-react";
import aboutWorker from "@/assets/about-worker.jpg";

const AboutSection = () => {
  return (
    <section id="quemsomos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quem Somos
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                A RC Pinturas & Rebaixamentos é uma empresa dedicada a renovar e valorizar
                ambientes por meio de serviços de pintura e acabamento de qualidade.
              </p>
              <p>
                Com experiência no mercado, oferecemos soluções adaptadas às necessidades de
                cada cliente, realizando pintura interna e externa, rebaixamento de teto e
                restauração de fachadas. Nosso objetivo é entregar um trabalho bem-feito, com
                atenção aos detalhes, materiais de qualidade e total compromisso com o cliente.
              </p>
              <p>
                Na RC Pinturas & Rebaixamentos, trabalhamos com seriedade, responsabilidade e
                dedicação para garantir resultados que transformam e valorizam cada espaço.
              </p>
              <p>
                Nossa equipe altamente qualificada utiliza materiais de alta qualidade e as
                técnicas mais modernas para garantir um resultado impecável.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="space-y-8">
              {/* Missão */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">Missão</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Realizar serviços de pintura e restauração predial com excelência, oferecendo
                    qualidade, confiança e acabamento de alto padrão, contribuindo para a
                    valorização e renovação dos ambientes dos nossos clientes.
                  </p>
                </div>
              </div>

              {/* Visão */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">Visão</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Crescer e se consolidar no mercado como uma empresa reconhecida pela qualidade
                    dos serviços, profissionalismo e compromisso com a satisfação de cada cliente.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Star className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">Valores</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-1">
                    <li>• Qualidade</li>
                    <li>• Compromisso</li>
                    <li>• Transparência</li>
                    <li>• Personalização</li>
                    <li>• Honestidade</li>
                    <li>• Sustentabilidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative">
              <img
                src={aboutWorker}
                alt="Profissional da RC Pinturas & Rebaixamentos trabalhando"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-8 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg">
                <p className="font-display font-bold text-lg leading-tight">
                  EXCELÊNCIA,<br />
                  QUALIDADE<br />
                  E CONFIANÇA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
