import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";

export const QuemSomosHero = () => {
  return (
    <Flex
      className="
w-full bg-black relative  h-[624px] min-[1800px]:h-[756px] min-[1921px]:h-[1000px]   flex-col md:flex-row"
    >
      <Flex className="w-full h-fit absolute bottom-[112px] text-center lg:text-start lg:bottom-12 border-b-[1px] border-white py-16 lg:px-[160px] px-[5%]">
        <h1 className="text-[64px] font-[300] tracking-[-0.64px] leading-[81px] text-white lg:text-[80px] min-[1140px]:text-[120px] leading-[107px]">
          SOMOS A <span className="font-[600]">AESKINS</span>
        </h1>
      </Flex>
    </Flex>
  );
};
