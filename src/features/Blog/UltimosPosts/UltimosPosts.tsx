import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Icons from "../../../../public/assets/icons";
import { BlogPostCard } from "../../../components/Cards/BlogPostCard";
import useWindowWidth from "../../../hooks/useWindowWidth";

const mockedPosts = [
  {
    title: "Exploring the Future of Web Development",
    link: "exploring-the-future-of-web-development",
    date: "2024-05-01",
  },
  {
    title: "The Impact of AI on Modern Software Practices",
    link: "impact-of-ai-on-software",
    date: "2024-05-15",
  },
  {
    title: "Understanding React's Latest Features",
    link: "understanding-react-features",
    date: "2024-06-01",
  },
  {
    title: "Innovations in Cloud Computing",
    link: "innovations-in-cloud-computing",
    date: "2024-06-18",
  },
  {
    title: "Best Practices for Responsive Design",
    link: "best-practices-responsive-design",
    date: "2024-07-05",
  },
  {
    title: "Building Scalable Web Applications",
    link: "building-scalable-web-applications",
    date: "2024-07-20",
  },
  {
    title: "Introduction to Serverless Architectures",
    link: "intro-to-serverless-architectures",
    date: "2024-08-10",
  },
  {
    title: "Leveraging Machine Learning in Web Apps",
    link: "leveraging-ml-in-web-apps",
    date: "2024-08-25",
  },
  {
    title: "Cybersecurity Trends in 2024",
    link: "cybersecurity-trends-2024",
    date: "2024-09-05",
  },
];

export const UltimosPosts = (): JSX.Element => {
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
        <p className="text-[12px] text-neutral-pure400 font-[600] leading-[14px] uppercase 2xl:pl-[160px] px-[5%] min-[1440px]:px-20">
          BLOGS E ARTIGOS
        </p>
        <Flex
          justify="between"
          className="w-full gap-2 flex-col lg:flex-row lg:items-center 2xl:px-[160px] px-[5%] min-[1440px]:px-20"
        >
          <p className="text-[32px] lg:text-[40px] lg:tracking-[2px] text-secondary-pure leading-[48px] lg:leading-[52px] uppercase font-[300]">
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
        justify="center"
        className="grid gap-8  bg-white 2xl:px-[160px] px-[5%] min-[1440px]:px-20"
      >
        {mockedPosts.map((post, index) => {
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
                date={post.date}
                link={post.link}
              />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
