import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";
import useWindowWidth from "../../../hooks/useWindowWidth";

export const FacaParte = () => {
  const width = useWindowWidth();
  return (
    <Flex className="p-[5%] w-full gap-2 lg:p-16 bg-black flex-col lg:flex-row lg:h-[677px]">
      <Flex className="w-full h-[160px] min-[426px]:h-[250px] md:h-[300px] lg:h-[540px] lg:w-[50%]">
        <Image
          src="/assets/facaParte.png"
          width={1000}
          height={540}
          alt="Faca Parte"
          objectFit="cover"
          objectPosition={width > 1440 ? "center" : "left"}
          quality={100}
        />
      </Flex>
      <Flex
        className="w-full max-h-[540px] lg:w-[50%] flex-nowrap lg:flex-wrap gap-2"
        style={{
          gridTemplateAreas:
            width > 1440
              ? `
        'card1 card2'
        'card3 card4'
        `
              : `
        'card1 card2 card3'
        'card4 card4 card4'
        `,
        }}
      >
        <Flex
          style={{ gridArea: "card1" }}
          className="w-full lg:w-[calc(50%-16px)] h-[266px]"
        >
          <Image
            src="/assets/faca1.png"
            width={800}
            height={266}
            alt="Faca Parte 1"
            objectFit="cover"
            quality={100}
          />
        </Flex>
        <Flex
          style={{ gridArea: "card2" }}
          className="w-full lg:w-[calc(50%-16px)] h-[266px]"
        >
          <Image
            src="/assets/faca2.png"
            width={800}
            height={266}
            alt="Faca Parte 2"
            objectFit="cover"
            quality={100}
          />
        </Flex>
        <Flex
          style={{ gridArea: "card3" }}
          className="w-full lg:w-[calc(50%-16px)] h-[266px]"
        >
          <Image
            src="/assets/faca3.png"
            width={800}
            height={266}
            alt="Faca Parte 3"
            objectFit="cover"
            quality={100}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
