import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import { WordsCarousel } from "../../../components/Carousel/WordsCarousel/WordsCarousel";
import Image from "next/image";
import { ConhecaOTimeCard } from "./ConhecaOTimeCard";

const words = (
  <p className="text-[64px] font-[300] leading-[83px] lg:text-[80px] lg:leading-[104px] text-nowrap">
    Conheça o time{" "}
    <span className="text-secondary-pure font-[700]">Aeskins® </span>
  </p>
);

export const ConhecaOTime = (): JSX.Element => {
  return (
    <Flex
      direction="col"
      className="h-full gap-8 pt-20 lg:pt-[120px] w-full border-none"
    >
      <WordsCarousel words={words} />
      <p className="text-center lg:hidden text-[40px] font-[300] leading-[53px]">
        Conheça o time{" "}
        <span className="text-secondary-pure font-[700]">Aeskins® </span>
      </p>
      <ConhecaOTimeCard
        image="/assets/alexandre.png"
        cargo="Diretor médico científico"
        nome="Alexandre Filippo"
        sobre={
          <p className="text-[16px] lg:text-[18px] text-white/40 lg:font-[300] leading-[24px] lg:leading-[27px]">
            Médico formado pela Universidade Gama Filho do Rio de Janeiro em
            1991 e pós-graduado em Dermatologia pela Santa Casa da Misericórdia
            do Rio de Janeiro em 1993.
            <br />
            <br className="hidden lg:block" />
            • Membro da Sociedade Brasileira de Dermatologia
            <br />
            <br className="hidden lg:block" />
            • Membro da Academia Americana de Dermatologia
            <br />
            <br className="hidden lg:block" />
            • Ex-coordenador do Departamento de Laser da SBD por 3 mandatos•
            Chefe do setor de laser da Santa Casa do Rio de Janeiro
            <br />
            <br className="hidden lg:block" />
            • Professor de Dermatologia da Santa Casa do Rio de Janeiro
            <br />
            <br className="hidden lg:block" />
            • Membro da Sociedade Brasileira de Cirurgia Dermatológica
            <br />
            <br className="hidden lg:block" />
          </p>
        }
      />
    </Flex>
  );
};
