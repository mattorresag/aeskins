import React from "react";
import { Flex } from "../Flex/Flex";
import Image from "next/image";
interface Props {
  title: string;
  image?: string;
}
export const ProdutosCards = ({ title, image }: Props): JSX.Element => {
  return (
    <Flex direction="col" className="gap-6 max-w-[512px] h-full w-full">
      <Flex className="py-6 lg:py-8 bg-neutral-pure100 h-full">
        <Image
          src={image || "/assets/produtoPlaceholder.png"}
          objectFit="contain"
          width={500}
          height={384}
          alt={title}
          quality={100}
          priority
        />
      </Flex>
      <p className="text-[20px] text-secondary-pure font-[300] leading-[30px]">
        {title}
      </p>
    </Flex>
  );
};
