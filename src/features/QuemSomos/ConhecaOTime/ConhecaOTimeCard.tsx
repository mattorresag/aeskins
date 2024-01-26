import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";
interface Props {
  image: string;
  cargo: string;
  nome: string;
  sobre: React.ReactNode;
}
export const ConhecaOTimeCard = ({
  image,
  cargo,
  nome,
  sobre,
}: Props): JSX.Element => {
  return (
    <Flex className="flex-col w-full xl:flex-row ">
      <Flex className="hidden xl:flex w-[50%]">
        <Image
          // src={image}
          src="/assets/alexandre.png"
          width={1920}
          height={886}
          alt="Time"
          quality={100}
          priority
        />
      </Flex>
      <Flex className="xl:hidden w-full  h-full">
        <div className="relative w-full h-full pt-[88%] ">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/assets/alexandre.png"
            alt={nome}
            layout="fill"
            quality={100}
            priority
          />
        </div>
      </Flex>
      <Flex
        direction="col"
        className="w-full xl:w-[50%] xl:justify-center xl:items-center bg-secondary-pure pt-6 pb-20 xl:py-[3%] xl:px-[3%] 2xl:py-[7%] 2xl:px-[7%]  px-[5%]"
      >
        <Flex direction="col" className="xl:gap-16 gap-8 ">
          <Flex direction="col" className="gap-2">
            <p className="text-[18px] text-start xl:text-[20px] leading-[27px] xl:leading-[30px] text-white font-[300]">
              {cargo}
            </p>
            <p className="uppercase text-[48px] xl:text-[56px] xl:tracking-[2px] xl:leading-[73px] leading-[62px] text-white font-[300]">
              {nome}
            </p>
          </Flex>
          <Flex direction="col" className="gap-8">
            <p className="pb-2 border-b-[1px] border-white/10 text-[14px] text-[600] text-neutral-pure400">
              SOBRE
            </p>
            {sobre}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
