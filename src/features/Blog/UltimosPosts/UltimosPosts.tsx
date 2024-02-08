import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Icons from "../../../../public/assets/icons";
import { BlogPostCard } from "../../../components/Cards/BlogPostCard";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { BlogPost } from "../../../utils/types";
interface Props {
  posts?: BlogPost[];
}

export const UltimosPosts = ({ posts }: Props): JSX.Element => {
  const width = useWindowWidth();
  return (
    <Flex
      direction="col"
      className="bg-white gap-12 pt-12 lg:pt-[96px]  pb-20 lg:pb-[120px]"
    >
      <Flex
        className="gap-2 pb-4 lg:pb-8 border-b-[1px] border-secondary-pure"
        direction="col"
      >
        <p className="text-[12px] text-neutral-pure400 font-[600] leading-[14px] uppercase 2xl:pl-[160px] px-[5%] xl:px-20">
          BLOGS E ARTIGOS
        </p>
        <Flex
          justify="between"
          className="w-full gap-2 flex-col lg:flex-row lg:items-center 2xl:px-[160px] px-[5%] xl:px-20"
        >
          <p className="text-[32px]  lg:text-[40px] lg:tracking-[2px] text-secondary-pure leading-[48px] lg:leading-[52px] uppercase font-[300]">
            últimas postagens
          </p>
          <Flex
            justify="between"
            align="center"
            className="text-[14px] lg:w-fit w-full font-[600] leading-[17px] h-12 text-neutral-pure400 bg-neutral-pure100 p-2 pr-4 pl-1"
          >
            <input
              placeholder="Faça sua busca"
              className="input h-fit bg-transparent w-[90%]"
            />

            <Icons.TransparentSearchSmall className="w-6 h-6" />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        style={{
          gridTemplateAreas:
            width > 768
              ? ` 
        'card1 card2 card3'
        'card4 card5 card6'
        'card7 card8 card9'
      `
              : `	
        'card1'
        'card2'
        'card3'
        'card4'
        'card5'
        'card6'
        'card7'
        'card8'
        'card9'
      `,
        }}
        className="grid gap-8 justify-center md:justify-start bg-white 2xl:px-[160px] px-[5%] xl:px-20"
      >
        {posts?.map((post, index) => {
          return (
            <Flex
              key={`${post.title} - ${index}`}
              className=" w-full"
              style={{
                gridArea: `card${index + 1}`,
              }}
            >
              <BlogPostCard
                title={post.title}
                date={post.publication_date}
                id={post.id}
              />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
