import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Icons from "../../../../public/assets/icons";
import { Preenchedores } from "./Preenchedores";
import Image from "next/image";
import PreenchedoresImage from "../../../../public/assets/preenchedores.png";
import PreenchedoresMobileImage from "../../../../public/assets/mobilePreenchedores.png";

export const HomeThirdSection = () => {
  return (
    <Flex className="xl:pb-[174px] w-full">
      <Flex
        className="
        lg:bg-background-preenchedoresLg
        2xl:bg-background-preenchedores
    max-[1023px]:bg-background-preenchedoresMobile
    bg-no-repeat
    bg-right-bottom
    w-full
    2xl:h-[630px]
    min-[1921px]:justify-center
    relative
    bg-center xl:px-20  2xl:px-[160px] pt-16 xl:pt-[88px]  xl:pb-[0px]"
      >
        <div className="absolute right-0 bottom-0 w-[50%] hidden lg:block 2xl:hidden">
          <div className="relative w-full pt-[70%]">
            <Image
              className="absolute right-0 w-full object-cover object-top"
              src={PreenchedoresImage.src}
              alt="Preenchedores Mobile"
              unoptimized
              layout="fill"
              quality={100}
              priority
            />
          </div>
        </div>
        <Flex
          direction="col"
          className="    min-[1921px]:max-w-[1800px] relative gap-2 xl:gap-6  xl:max-w-[50vw] w-full"
        >
          <Flex direction="col" className="gap-6 xl:gap-14 w-full ">
            <Flex direction="col" className="lg:gap-4">
              <Icons.Sofiderm className="w-[200px] xl:w-[161px] h-[60px] pl-[5%] xl:pl-0" />
              <Flex
                className="w-full xl:px-0 px-[5%] justify-between min-[1921px]:justify-start min-[1921px]:gap-14"
                align="end"
              >
                <p className="xl:text-[48px] xl:tracking-[2px] xl:leading-[63px] text-[32px] font-[300] leading-[48px] text-secondary-pure">
                  PREENCHEDORES DE <br />
                  <span className="font-[400]">ALTA TECNOLOGIA</span>
                </p>
              </Flex>
            </Flex>
            <Preenchedores />
            <Flex>
              <div className="hidden md:block xl:hidden relative w-full pt-[60%]">
                <Image
                  className="absolute left-0 w-full object-cover object-top"
                  src={PreenchedoresImage.src}
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
                  src={PreenchedoresImage.src}
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
      </Flex>
    </Flex>
  );
};
