import React from "react";
import { Carousel } from "../Carousel";
import { Flex } from "../../Flex/Flex";
import Icons from "../../../../public/assets/icons";
interface Props {
  words: React.ReactNode;
}
export const WordsCarousel = ({ words }: Props): JSX.Element => {
  return (
    <Carousel
      style="hidden lg:flex w-full bg-white dark:bg-white z-[10] flex-nowrap"
      autoPlay
      interval={3000}
      config={{ loop: true, dragFree: true }}
    >
      <Flex
        className="w-full text-nowrap gap-8 [&>*:last-child]:mr-8 "
        align="center"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Flex key={index} align="center" className="gap-8 w-fit">
            {words}
            <Flex>
              <Icons.Line className="h-[1px] w-18" />
              <Icons.Line className="h-[1px] w-18" />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Carousel>
  );
};
