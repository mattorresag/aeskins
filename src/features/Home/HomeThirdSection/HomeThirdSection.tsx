import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Icons from "../../../../public/assets/icons";
import { PreenchedoresCard } from "../../../components/Cards/PreenchedoresCard";
import { Preenchedores } from "./Preenchedores";
import Image from "next/image";

export const HomeThirdSection = () => {
  return (
    <Flex className="xl:pb-[174px] w-full">
      <Flex
        className="
    xl:bg-background-preenchedores
    max-[1023px]:bg-background-preenchedoresMobile
    bg-no-repeat
    bg-[bottom_right]
    w-full
    xl:h-[630px]
    min-[1921px]:justify-center
    bg-center xl:px-20  2xl:px-[160px] pt-16 xl:pt-[88px]  xl:pb-[0px]"
      >
        <Flex
          direction="col"
          className="    min-[1921px]:max-w-[1800px] gap-2 xl:gap-6  xl:max-w-[50vw] w-full"
        >
          <Icons.SofidermMobile className="w-[180px] h-12 pl-[5%] xl:hidden" />
          <Flex direction="col" className="gap-6 xl:gap-14 w-full ">
            <Icons.Sofiderm className="w-[155px] h-[56px] hidden xl:block" />
            <Flex
              className="w-full xl:px-0 px-[5%] justify-between min-[1921px]:justify-start min-[1921px]:gap-14"
              align="end"
            >
              <p className="xl:text-[48px] xl:tracking-[2px] xl:leading-[63px] text-[32px] font-[300] leading-[48px] text-secondary-pure">
                PREENCHEDORES DE <br />
                <span className="font-[400]">ALTA TECNOLOGIA</span>
              </p>
            </Flex>
            <Preenchedores />
            <Flex>
              <div className="hidden md:block xl:hidden relative w-full pt-[60%]">
                <Image
                  className="absolute left-0 w-full object-cover object-top"
                  src={"/assets/preenchedores.png"}
                  alt="Preenchedores Mobile"
                  unoptimized
                  layout="fill"
                  quality={100}
                  priority
                />
              </div>
              <div className="md:hidden relative w-full pt-[60%]">
                <Image
                  className="absolute left-0 w-full object-cover object-top"
                  src={"/assets/mobilePreenchedores.png"}
                  alt="Preenchedores Mobile"
                  unoptimized
                  layout="fill"
                  quality={100}
                  priority
                />
              </div>
            </Flex>
          </Flex>
        </Flex>
        {/* <Flex className="w-full">
          <div className="relative w-full   pt-[70%]">
            <Image
              className="absolute left-0 w-full object-cover"
              src="/assets/preenchedores.png"
              alt="Preenchedores Mobile"
              unoptimized
              layout="fill"
              quality={100}
              priority
            />
          </div>
        </Flex> */}
      </Flex>
    </Flex>
  );
};
