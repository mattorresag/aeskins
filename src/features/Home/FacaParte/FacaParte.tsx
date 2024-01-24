import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";
import useWindowWidth from "../../../hooks/useWindowWidth";
import Icons from "../../../../public/assets/icons";

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
        className="w-full grid lg:flex max-h-[540px] lg:w-[50%] flex-nowrap lg:flex-wrap gap-2"
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
          className="w-full lg:w-[calc(50%-16px)] h-[160px] lg:h-[266px]"
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
          className="w-full lg:w-[calc(50%-16px)] h-[160px] lg:h-[266px]"
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
          className="w-full lg:w-[calc(50%-16px)] h-[160px] lg:h-[266px]"
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
        <Flex
          style={{ gridArea: "card4" }}
          direction="col"
          className="w-full gap-6 lg:w-[calc(50%-16px)] px-[5%] h-[160px] lg:h-[266px] bg-black items-center justify-center"
        >
          <p className="text-[24px] lg:text-[32px]  text-center text-white leading-[40px] lg:leading-[48px]">
            PARA PROFISSIONAIS
          </p>
          <button className="bg-white text-black/87 py-2 h-12 px-4">
            <Flex className="justify-between items-center gap-4">
              <p className="text-[12px] lg:text-[14px] font-[600] uppercase leading-[14px] 2xl:text-[16px] lg:leading-[19px]">
                Fazer parte{" "}
                <span className="lg:hidden 2xl:inline">da comunidade</span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M19.75 14H14.9375H5.75V9.03071V9"
                  stroke="black"
                  stroke-opacity="0.87"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 10L19.75 14L15.75 18"
                  stroke="black"
                  stroke-opacity="0.87"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Flex>
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};
