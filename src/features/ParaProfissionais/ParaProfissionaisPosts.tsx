import React from "react";
import { Flex } from "../../components/Flex/Flex";
import Image from "next/image";
import Icons from "../../../public/assets/icons";
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
          title="Como a Aeskins Eleva a Autoestima dos Nossos Clientes"
          linkName="BAIXAR MATERIAL"
          link="https://community.aeskins.com/"
          icon={<Icons.Download className="h-6 w-6" />}
        />
      </Flex>
    </Flex>
  );
};
