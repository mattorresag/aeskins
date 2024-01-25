import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Icons from "../../../../public/assets/icons";
import { PreenchedoresCard } from "../../../components/Cards/PreenchedoresCard";
import { Preenchedores } from "./Preenchedores";
import Image from "next/image";

export const HomeThirdSection = () => {
  return (
    <Flex className="lg:pb-[174px] w-full">
      <Flex
        className="
    lg:bg-background-preenchedores
    max-[1023px]:bg-background-preenchedoresMobile
    bg-no-repeat
    w-full
    lg:h-[770px]
    xl:h-[630px]
    min-[1921px]:justify-center
    bg-center  lg:px-[160px] pt-16 lg:pt-[88px]  lg:pb-[174px]"
      >
        <Flex
          direction="col"
          className="    min-[1921px]:max-w-[1800px] gap-2 lg:gap-6  lg:max-w-[50vw] w-full"
        >
          <Icons.SofidermMobile className="w-[180px] h-12 pl-[5%] lg:hidden" />
          <Flex direction="col" className="gap-6 lg:gap-14 w-full ">
            <Icons.Sofiderm className="w-[155px] h-[56px] hidden lg:block" />
            <Flex
              className="w-full lg:px-0 px-[5%] justify-between min-[1921px]:justify-start min-[1921px]:gap-14"
              align="end"
            >
              <p className="lg:text-[48px] lg:tracking-[2px] lg:leading-[63px] text-[32px] font-[300] leading-[48px] text-secondary-pure">
                PREENCHEDORES DE <br />
                <span className="font-[400]">ALTA TECNOLOGIA</span>
              </p>
              <Flex
                align="center"
                className="cursor-pointer hidden xl:flex w-fit py-2 gap-4 border-b-[1px] border-secondary-pure"
              >
                <p className="font-[600]">COMPRAR AGORA</p>
                <Icons.ArrowRight className="h-6 w-6" />
              </Flex>
            </Flex>
            <Flex
              align="center"
              className="cursor-pointer  hidden lg:flex xl:hidden w-fit py-2 gap-4 border-b-[1px] border-secondary-pure"
            >
              <p className="font-[600]">COMPRAR AGORA</p>

              <Icons.ArrowRight className="h-6 w-6" />
            </Flex>
            <Preenchedores />
            <Flex
              align="center"
              className="px-[5%] hidden  max-[1023px]:flex w-full py-2 gap-4"
            >
              <Flex
                align="center"
                className="cursor-pointer hidden mb-16 max-[1023px]:flex w-full py-2 gap-4 border-b-[1px] border-secondary-pure"
              >
                <p className="font-[600]">COMPRAR AGORA</p>

                <Icons.ArrowRight className="h-6 w-6" />
              </Flex>
            </Flex>
            <Flex className="lg:hidden h-[203px] min-[410px]:h-[230px] md:h-[420px]  ">
              <Image
                src="/assets/mobilePreenchedores.png"
                className="object-cover min-[768px]:object-contain"
                width={2000}
                height={468}
                alt="Preenchedores"
                quality={100}
                priority
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
