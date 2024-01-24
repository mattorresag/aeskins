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
    <Flex className="flex-col w-full min-[1440px]:flex-row min-[1440px]:h-[720px] 2xl:h-[886px]">
      <Flex className="w-full min-[1440px]:w-[50%]">
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
      <Flex
        direction="col"
        className="w-full min-[1440px]:w-[50%] min-[1440px]:justify-center min-[1440px]:items-center bg-secondary-pure pt-6 pb-20 min-[1440px]:py-[3%] min-[1440px]:px-[3%] 2xl:pt-[120px] 2xl:px-[160px]  px-[5%]"
      >
        <Flex direction="col" className="min-[1440px]:gap-16 gap-8 ">
          <Flex direction="col" className="gap-2">
            <p className="text-[18px] text-start min-[1440px]:text-[20px] leading-[27px] min-[1440px]:leading-[30px] text-white font-[300]">
              {cargo}
            </p>
            <p className="uppercase text-[48px] min-[1440px]:text-[56px] min-[1440px]:tracking-[2px] min-[1440px]:leading-[73px] leading-[62px] text-white font-[300]">
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
