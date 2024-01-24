import React from "react";
import { Flex } from "../Flex/Flex";
import Image from "next/image";
import useWindowWidth from "../../hooks/useWindowWidth";

import { useRouter } from "next/router";
interface Props {
  date: string;
  title: string;
  link: string;
  image: string;
}
export const BlogHeroCard = ({
  date,
  title,
  link,
  image,
}: Props): JSX.Element => {
  const router = useRouter();

  return (
    <Flex className="bg-neutral-pure100 lg:bg-secondary-pure w-full min-w-[100vw]  relative pt-8 pb-16 gap-8 md:gap-20 md:pt-20 lg:py-[140px] 2xl:pl-[160px] px-[5%] min-[1440px]:px-20 justify-center lg:justify-start flex-col lg:flex-row">
      <Flex
        direction="col"
        className="gap-8 max-w-[468px]"
        onClick={() => {
          router.push(link);
        }}
      >
        <Flex direction="col" className="gap-2">
          <p className="text-neutral-pure400 text-[12px] lg:text-[14px] font-[600] leading-[14px] uppercase lg:leading-[17px]">
            {date}
          </p>
          <p className="lg:text-[40px] lg:leading-[52px] lg:text-white text-[32px] leading-[42px] font-[300] text-secondary-pure overflow-hidden line-clamp-2">
            {title}
          </p>
        </Flex>
        <Flex
          align="center"
          className="cursor-pointer w-fit gap-4 h-12 border-b-[1px] border-secondary-pure lg:border-white text-secondary-pure lg:text-white"
        >
          <p className="font-[600] ">CONTINUAR LENDO</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 13H14.1875H5V8.03071V8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 9L19 13L15 17"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Flex>
      </Flex>
      <Flex className="lg:absolute min-h-[40vh] lg:min-h-fit h-full w-full lg:w-[50%] lg:right-0 lg:top-0">
        <Image
          src={image}
          objectFit="cover"
          width={2000}
          objectPosition={"center"}
          height={800}
          alt="Banner"
          quality={100}
          priority
        />
      </Flex>
    </Flex>
  );
};
