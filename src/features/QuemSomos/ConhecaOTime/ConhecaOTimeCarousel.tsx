import React from "react";
import { useCarousel } from "../../../hooks/useCarousel";
import { Flex } from "../../../components/Flex/Flex";
import { ConhecaOTimeCard } from "./ConhecaOTimeCard";
const mockedCards = [
  {
    image: "/assets/mock1.jpeg",
    cargo: "Conselho Médico Dermatológico",
    nome: "Dra. Luciana Lourenço",
    sobre: (
      <p className="text-[16px] lg:text-[18px] text-white/40 lg:font-[300] leading-[24px] lg:leading-[27px]">
        • Doutorado pela Universidade de São Paulo – USP.
        <br />
        <br className="hidden lg:block" />
        • Pós-graduada em Cosmiatria e Cirurgia pela Faculdade de Medicina do
        ABC
        <br />
        <br className="hidden lg:block" />
        • Dermatologia no Hospital Heliópolis. Dermatologista pela SBD.
        <br />
        <br className="hidden lg:block" />
        • Membro Titular da Sociedade Brasileira de Dermatologia.
        <br />
        <br className="hidden lg:block" />
        • Membro Titular da Sociedade Brasileira de Cirurgia Dermatológica.
        <br />
        <br className="hidden lg:block" />
        • Membro da Academia Americana de Dermatologia – AAD.
        <br />
        <br className="hidden lg:block" />
        • Membro da ISDS (Sociedade Internacional de Cirurgia Dermatológica).
        <br />
        <br className="hidden lg:block" />
        • Dermatologista em consultório particular.
        <br />
        <br className="hidden lg:block" />
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
            image={card.image}
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
