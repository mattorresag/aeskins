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
      <Flex className="max-h-[536px] w-[303px] xl:w-full max-w-[556px] lg:h-full relative">
        <Flex className=" absolute inset-0 justify-center items-center z-10">
          <Icons.YoutubePlay className="w-20 h-20" />
        </Flex>
        <div className="relative w-full  pt-[100%]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-left"
            layout="fill"
            src={src}
            alt={`Depoimento ${src}`}
          />
        </div>
      </Flex>
    </>
  );
};
