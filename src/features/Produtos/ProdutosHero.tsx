import Image from "next/image";
import React from "react";
import { Flex } from "../../components/Flex/Flex";
import useWindowWidth from "../../hooks/useWindowWidth";

export const ProdutosHero = (): JSX.Element => {
  const width = useWindowWidth();
  return (
    <Flex
      style={{
        background:
          "linear-gradient(179deg, #A8ACB0 1.01%, #A8ACB0 23.09%, #AAAEB3 42.85%, #A6AAAE 57.6%, #A5A8AC 69.14%, #A1A5A8 81.17%, #9FA2A5 85.07%, #9C9EA1 90.04%, #9A9C9E 94.15%, #9A9C9E 99.21%)",
      }}
      className="  w-full relative pt-10 gap-8 md:gap-20 md:pt-20 lg:py-[140px] min-[1920px]:pl-[295px] lg:px-[5%] min-[1440px]:px-20 justify-center lg:justify-start flex-col lg:flex-row"
    >
      <Flex className="hidden lg:flex absolute h-full right-0 top-0">
        <Image
          src="/assets/produtosHero.png"
          objectFit="cover"
          width={width < 1440 ? 500 : 800}
          objectPosition={width < 1440 ? "left" : "center"}
          height={500}
          alt="Banner"
          quality={100}
          priority
        />
      </Flex>
      <Flex direction="col" className="px-[5%] lg:px-0 gap-10 z-10">
        <Flex direction="col" className="max-w-[742px] ">
          <p className="font-[300] tracking-[2px] uppercase text-[54px] lg:text-[80px] lg:leading-[104px] leading-[70px] text-neutral-pure900">
            linha facial <span className="font-[600]"> sofiderm</span>
          </p>
        </Flex>
      </Flex>
      <Flex className=" lg:hidden  h-[206px] md:h-[450px] right-0">
        <Image
          src="/assets/produtosHero.png"
          objectFit="cover"
          objectPosition="right"
          width={1200}
          priority
          height={384}
          alt="Banner"
          quality={100}
        />
      </Flex>
    </Flex>
  );
};
