import React from "react";
import { Flex } from "../Flex/Flex";
import Icons from "../../../public/assets/icons";
import Image from "next/image";
import { useRouter } from "next/router";
interface Props {}
interface Props {
  link: string;
  title: string;
  image?: string;
  linkName: string;
  icon?: JSX.Element;
}
export const PostCard = ({
  linkName,
  link,
  title,
  image,
  icon = <Icons.ArrowRight className="h-6 w-6" />,
}: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Flex className="w-full lg:w-[calc(50%-32px)] gap-4" direction="col">
      <Flex className="gap-6" direction="col">
        <Flex className="lg:h-[428px] h-[264px]">
          <Image
            src={image || "/assets/produtoPlaceholder.png"}
            objectFit="cover"
            width={1000}
            height={1000}
            alt="title"
            quality={100}
            priority
          />
        </Flex>
        <p className="text-[24px] text-secondary-pure leading-[29px]">
          {title}
        </p>
      </Flex>
      <button
        onClick={() => {
          router.push(link);
        }}
        className=" w-fit py-2 gap-4 border-b-[1px] border-secondary-pure"
      >
        <Flex className="gap-4" align="center">
          <p className="font-[600]">{linkName}</p>
          {icon}
        </Flex>
      </button>
    </Flex>
  );
};
