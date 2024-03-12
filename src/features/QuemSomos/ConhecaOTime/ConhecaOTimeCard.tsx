import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";
interface Props {
  image: string;
  cargo?: string;
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
    <Flex className="flex-col w-full lg:flex-row min-w-[100vw]  min-h-fit ">
      <Flex className="hidden lg:flex w-[50%]">
        <Image
          className="object-cover"
          src={image}
          width={1920}
          height={1000}
          alt="Time"
          quality={100}
          priority
        />
      </Flex>
      <Flex className="lg:hidden w-full  h-full">
        <div className="relative w-full h-full pt-[88%] ">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={image}
            alt={nome}
            layout="fill"
            quality={100}
            priority
          />
        </div>
      </Flex>
      <Flex
        direction="col"
        className="w-full lg:w-[50%]  bg-secondary-pure pt-6 pb-20 lg:py-[3%] lg:px-[3%] 2lg:py-[5%] 2lg:px-[5%]  px-[5%]"
      >
        <Flex direction="col" className="lg:gap-16 gap-8 ">
          <Flex direction="col" className="gap-2 lg:pt-[100px] lg:pt-0">
            {cargo && (
              <p className="text-[18px] text-start lg:text-[20px] leading-[27px] lg:leading-[30px] text-white font-[300]">
                {cargo}
              </p>
            )}
            <p className="uppercase text-[48px] lg:text-[56px] lg:tracking-[2px] lg:leading-[73px] leading-[62px] text-white font-[300]">
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
