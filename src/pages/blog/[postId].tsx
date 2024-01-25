import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { Flex } from "../../components/Flex/Flex";
import Image from "next/image";
interface Props {
  postId: string;
}
const BlogPost: NextPage<Props> = ({ postId }): JSX.Element => {
  return (
    <Layout subtitle={`Blog Post ${postId}`} url={`blog/${postId}`}>
      <Flex className="lg:py-[62px] pb-20 gap-20">
        <Flex
          direction="col"
          className="2xl:pl-[160px] pl-[5%] xl:pl-20 hidden lg:flex py-6 gap-6 w-[327px] 2xl:w-[407px]"
        >
          <Flex direction="col" className="gap-2">
            <p className="text-[14px] font-[600] text-secondary-pure leading-[17px]">
              Publicado em
            </p>
            <p className="text-[18px] font-[400] text-secondary-pure leading-[27px]">
              7 de Janeiro, 2024
            </p>
          </Flex>
          <div className="divider h-0 m-0 bg-black/10" />
          <Flex direction="col" className="gap-2">
            <p className="text-[14px] font-[600] text-secondary-pure leading-[17px]">
              Escrito por
            </p>
            <Flex className="gap-2" align="center">
              <Flex className="rounded-[50%] overflow-hidden h-8 w-8">
                <Image
                  width={32}
                  height={32}
                  objectFit="cover"
                  alt="Autor"
                  src="/assets/blogPlaceholder.png"
                />
              </Flex>
              <p className="text-[18px] font-[400] text-secondary-pure leading-[27px]">
                Mariana Barbosa
              </p>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="col" className=" w-full gap-8 lg:gap-14 items-center">
          <Flex
            direction="col"
            className="w-full 2xl:pr-[160px] lg:pr-[5%] xl:pr-20"
          >
            <div className="relative w-full  lg:pt-[43.89%] pt-[73%]">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/levandoBeleza.png"
                alt="Levando Beleza"
                layout="fill"
                quality={100}
                priority
              />
            </div>
          </Flex>
          <Flex direction="col" className=" gap-8 w-[90%] ">
            <p className="text-[32px] text-secondary-pure uppercase leading-[48px] lg:text-[56px] lg:font-[600] lg:tracking-[2px] lg:leading-[73px]">
              TITULO
            </p>
            <p className="text-secondary-pure leading-[24px] lg:text-[20px] lg:font-[300] lg:leading-[30px]">
              CONTEUDO
            </p>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = [{ id: "1" }, { id: "2" }];

  const paths = posts.map((post) => ({
    params: { postId: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params?.postId;

  return { props: { postId } };
};

export default BlogPost;
