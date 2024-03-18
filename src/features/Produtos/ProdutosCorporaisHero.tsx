import Image from "next/image";
import React from "react";
import { Flex } from "../../components/Flex/Flex";
import ProdutosHero from "../../../public/assets/corporalHero.png";

export const ProdutosCorporaisHero = (): JSX.Element => {
  return (
    <Flex
      style={{
        background:
          "linear-gradient(179deg, #A8ACB0 1.01%, #A8ACB0 23.09%, #AAAEB3 42.85%, #A6AAAE 57.6%, #A5A8AC 69.14%, #A1A5A8 81.17%, #9FA2A5 85.07%, #9C9EA1 90.04%, #9A9C9E 94.15%, #9A9C9E 95.21%)",
      }}
      className="  w-full relative gap-8 md:gap-20  justify-center pt-10 lg:pt-0 flex-col lg:flex-row"
    >
      <Flex
        direction="col"
        className=" px-[5%] 2xl:pl-[160px]  items-center justify-center gap-10 z-10  lg:w-[50%] xl:w-[60%]"
      >
        <Flex direction="col" className="max-w-[572px] ">
          <p className="font-[300] tracking-[2px] uppercase text-[54px] xl:text-[80px] xl:leading-[104px] leading-[70px] text-secondary-pure">
            linha <span className="font-[600]"> corporal</span>
          </p>
        </Flex>
      </Flex>
      <Flex className=" h-full w-[89%] ">
        <div className="relative w-full h-full pt-[45%] ">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={ProdutosHero.src}
            alt="produtos hero"
          />
        </div>
      </Flex>
    </Flex>
  );
};
