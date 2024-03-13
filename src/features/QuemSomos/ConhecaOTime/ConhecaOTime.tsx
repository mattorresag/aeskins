import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import { WordsCarousel } from "../../../components/Carousel/WordsCarousel/WordsCarousel";
import { ConhecaOTimeCarousel } from "./ConhecaOTimeCarousel";

const words = (
  <p className="text-[64px] font-[300] leading-[83px] lg:text-[80px] lg:leading-[104px] text-nowrap">
    Conheça o time de
    <span className="text-secondary-pure font-[700]">Especialistas</span>
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
      <Flex className="w-full">
        <ConhecaOTimeCarousel />
      </Flex>
    </Flex>
  );
};
