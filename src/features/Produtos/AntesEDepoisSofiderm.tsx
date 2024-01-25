import React from "react";
import { Flex } from "../../components/Flex/Flex";
import Icons from "../../../public/assets/icons";
import { Carousel } from "../../components/Carousel/Carousel";
import Image from "next/image";

const images = [
  {
    src: "/assets/produtoPlaceholder.png",
  },
  {
    src: "/assets/produtoPlaceholder.png",
  },
  {
    src: "/assets/produtoPlaceholder.png",
  },
  {
    src: "/assets/produtoPlaceholder.png",
  },
  {
    src: "/assets/produtoPlaceholder.png",
  },
  {
    src: "/assets/produtoPlaceholder.png",
  },
  {
    src: "/assets/produtoPlaceholder.png",
  },
  {
    src: "/assets/produtoPlaceholder.png",
  },
];

export const AntesEDepoisSofiderm = (): JSX.Element => {
  return (
    <Flex
      direction="col"
      className="gap-8 lg:gap-16 lg:pb-[120px] pb-20 w-full"
    >
      <Flex
        direction="col"
        className="gap-8 lg:gap-16 w-full"
        justify="center"
        align="center"
      >
        <Flex direction="col" className="gap-6">
          <Flex direction="col" className="gap-2 max-w-[985px]" align="center">
            <p className="text-[12px] text-neutral-pure400 font-[600] uppercase leading-[14px]">
              AESKINS®
            </p>
            <p className="text-[32px] text-secondary-pure font-[300] leading-[48px] uppercase text-center lg:text-[56px] lg:tracking-[2px] lg:leading-[73px]">
              <span className="font-[600]">ANTES E DEPOIS </span>DE QUEM UTILIZA
              A LINHA SOFIDERM
            </p>
            <Icons.LetterLine className="w-[281px] h-5" />
          </Flex>
        </Flex>
        <Flex className="w-full">
          <Carousel
            slides={images.length}
            isConheca
            style="w-full bg-white dark:bg-white z-[10] flex-nowrap"
            interval={3000}
            config={{ dragFree: true }}
          >
            <Flex className=" w-full pl-[5%] lg:pl-[160px] [&>*:last-child]:mr-8 gap-4 lg:gap-8 ">
              {images.map((image, index) => (
                <Flex className="w-full h-full" key={index}>
                  <Flex className="w-[304px] lg:w-[644px] h-full ">
                    <div className="relative w-full h-full pt-[75%] ">
                      <Image
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={image.src}
                        alt={`Antes e depois ${index}`}
                        layout="fill"
                        quality={100}
                        priority
                      />
                    </div>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Carousel>
        </Flex>
      </Flex>
    </Flex>
  );
};
