import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { PostCard } from "../../components/Cards/PostCard";

export const ParaProfissionaisPosts = (): JSX.Element => {
  return (
    <Flex className="pt-8 pb-20 lg:pt-16 lg:pb-[120px] xl:px-[160px] px-[5%]">
      <Flex className="flex-col lg:flex-row gap-8 w-full">
        <PostCard
          title="Conheça nossa comunidade"
          linkName="COMMUNITY"
          link="https://community.aeskins.com/"
          image="/assets/community.png"
        />
        <PostCard
          title="Acesse nossa página de materiais"
          linkName="MATERIAIS"
          image="/assets/materiais.png"
          link="https://materiais.aeskins.com/"
        />
      </Flex>
    </Flex>
  );
};
