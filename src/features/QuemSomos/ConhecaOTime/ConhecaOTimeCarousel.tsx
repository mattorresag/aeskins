import React from "react";
import { useCarousel } from "../../../hooks/useCarousel";
import { Flex } from "../../../components/Flex/Flex";
import { ConhecaOTimeCard } from "./ConhecaOTimeCard";
const mockedCards = [
  {
    image: "/assets/mock1.png",
    cargo: "Desenvolvedor Frontend",
    nome: "Alexandre",
    sobre: (
      <p className="text-[16px] lg:text-[18px] text-white/40 lg:font-[300] leading-[24px] lg:leading-[27px]">
        {" "}
        Médico formado pela Universidade Gama Filho do Rio de Janeiro em 1991 e
        pós-graduado em Dermatologia pela Santa Casa da Misericórdia do Rio de
        Janeiro em 1993.
        <br />
        <br className="hidden lg:block" />
        • Membro da Sociedade Brasileira de Dermatologia
        <br />
        <br className="hidden lg:block" />
        • Membro da Academia Americana de Dermatologia
        <br />
        <br className="hidden lg:block" />
        • Ex-coordenador do Departamento de Laser da SBD por 3 mandatos• Chefe
        do setor de laser da Santa Casa do Rio de Janeiro
        <br />
        <br className="hidden lg:block" />
        • Professor de Dermatologia da Santa Casa do Rio de Janeiro
        <br />
        <br className="hidden lg:block" />
        • Membro da Sociedade Brasileira de Cirurgia Dermatológica
        <br />
        <br className="hidden lg:block" />
      </p>
    ),
  },
  {
    image: "/assets/mock2.png",
    cargo: "Designer UI/UX",
    nome: "Beatriz",
    sobre: (
      <p className="text-[16px] lg:text-[18px] text-white/40 lg:font-[300] leading-[24px] lg:leading-[27px]">
        Expertise em design de interfaces e experiência do usuário.
      </p>
    ),
  },
  {
    image: "/assets/mock3.png",
    cargo: "Desenvolvedor Backend",
    nome: "Carlos",
    sobre: (
      <p className="text-[16px] lg:text-[18px] text-white/40 lg:font-[300] leading-[24px] lg:leading-[27px]">
        Especializado em Node.js e bancos de dados.
      </p>
    ),
  },
  {
    image: "/assets/mock4.png",
    cargo: "Gerente de Projeto",
    nome: "Daniela",
    sobre: (
      <p className="text-[16px] lg:text-[18px] text-white/40 lg:font-[300] leading-[24px] lg:leading-[27px]">
        Gerenciamento de projetos ágeis e SCRUM.
      </p>
    ),
  },
  {
    image: "/assets/mock5.png",
    cargo: "Analista de Dados",
    nome: "Eduardo",
    sobre: (
      <p className="text-[16px] lg:text-[18px] text-white/40 lg:font-[300] leading-[24px] lg:leading-[27px]">
        Experiência em Python, análise de dados e machine learning.
      </p>
    ),
  },
];
export const ConhecaOTimeCarousel = (): JSX.Element => {
  const { calcStyle, emblaRef, scrollToSlide } = useCarousel({
    classNameActive: "w-[calc(300%/7)] lg:w-[154px] bg-white",
    classNameInactive: "w-[calc(100%/7)] lg:w-[50px] bg-white/10",
  });
  return (
    <div
      ref={emblaRef}
      className="relative cursor-pointer h-full w-screen bg-neutral-pure100 dark:bg-neutral-pure100  z-[10] flex-nowrap"
    >
      <Flex className="w-full h-full">
        {mockedCards.map((card) => (
          <ConhecaOTimeCard
            key={card.nome}
            image="/assets/alexandre.png"
            cargo={card.cargo}
            nome={card.nome}
            sobre={card.sobre}
          />
        ))}
      </Flex>
      <Flex className="gap-2 absolute bottom-4 w-[90%] lg:w-fit left-[5%] xl:left-1/2 xl:bottom-6  xl:px-[3%] 2xl:px-[5%]  ">
        {Array.from({ length: mockedCards.length }, (_, index) => (
          <div
            key={index}
            className={calcStyle(index)}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </Flex>
    </div>
  );
};
