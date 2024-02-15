import React from "react";
import { Flex } from "../Flex/Flex";
import Image from "next/image";
import Icons from "../../../public/assets/icons";

interface Props {
  src: string;
}

export const DepoimentosCard = ({ src }: Props) => {
  return (
    <>
      <Flex className="lg:w-[556px] lg:h-[536px] w-[303px] h-[424px] relative">
        <Flex className=" absolute inset-0 justify-center items-center z-10">
          <Icons.YoutubePlay className="w-20 h-20" />
        </Flex>
        <Image
          className="object-cover"
          width={556}
          height={536}
          src={src}
          alt={`Depoimento ${src}`}
        />
      </Flex>
    </>
  );
};
