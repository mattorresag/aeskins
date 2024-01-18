import React from "react";
import { Carousel } from "../../../components/Carousel/Carousel";
import { Flex } from "../../../components/Flex/Flex";
import Icons from "../../../../public/assets/icons";

const words = [
  "EXCELÊNCIA",
  "BEM-ESTAR",
  "INOVAÇÃO",
  "BIOTECNOLOGIA",
  "TRANSFORMAÇÃO",
  "CONFIANÇA",
  "EXCELÊNCIA",
  "BEM-ESTAR",
  "INOVAÇÃO",
  "BIOTECNOLOGIA",
  "TRANSFORMAÇÃO",
  "CONFIANÇA",
  "EXCELÊNCIA",
  "BEM-ESTAR",
  "INOVAÇÃO",
  "BIOTECNOLOGIA",
  "TRANSFORMAÇÃO",
  "CONFIANÇA",
  "EXCELÊNCIA",
  "BEM-ESTAR",
  "INOVAÇÃO",
  "BIOTECNOLOGIA",
  "TRANSFORMAÇÃO",
  "CONFIANÇA",
];

export const WordsCarousel = () => {
  return (
    <Carousel
      style="h-16 w-full border-b-[1px]"
      autoPlay
      config={{ loop: true, dragFree: true }}
    >
      <Flex className="gap-10 [&>*:last-child]:mr-10 h-16" align="center">
        {words.map((word, index) => (
          <Flex
            key={index}
            className="text-[14px] w-fit flex-shrink-0 relative text-nowrap leading-[17px] text-neutral-pure600 gap-3"
            align="center"
          >
            <Icons.CarouselIcon className="w-[9px] h-[8.5px]" />
            <p>{word}</p>
          </Flex>
        ))}
      </Flex>
    </Carousel>
  );
};
