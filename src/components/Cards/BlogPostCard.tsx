import React from "react";
import { Flex } from "../Flex/Flex";
import Image from "next/image";
import { useRouter } from "next/router";
interface Props {
  title: string;
  id: number;
  date: string;
  image?: string;
}
export const BlogPostCard = ({
  title,
  image,
  date,
  id,
}: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Flex direction="col" className="gap-6 max-w-[512px] h-full w-full">
      <Flex className="bg-neutral-pure100 h-full">
        <Image
          src={image || "/assets/blogPlaceholder.png"}
          objectFit="cover"
          width={512}
          height={420}
          alt={title}
          quality={100}
          priority
        />
      </Flex>
      <Flex direction="col" className="gap-4" style={{ height: "150px" }}>
        <Flex direction="col" className="gap-2">
          <p className="text-[12px] text-neutral-pure400 font-[600] leading-[14px] uppercase">
            {date}
          </p>
          <p className="line-clamp-1 text-[20px] text-secondary-pure  leading-[30px]">
            {title}
          </p>
        </Flex>
        <Flex
          onClick={() => {
            router.push(`/blog/${id}`);
          }}
          align="center"
          className="cursor-pointer w-fit gap-4 h-12 border-b-[1px] border-secondary-pure text-secondary-pure"
        >
          <p className="font-[600]">CONTINUAR LENDO</p>
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
    </Flex>
  );
};
