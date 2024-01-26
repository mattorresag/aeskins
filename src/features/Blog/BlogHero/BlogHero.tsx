import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Flex } from "../../../components/Flex/Flex";
import { BlogHeroCard } from "../../../components/Cards/BlogHeroCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCarousel } from "../../../hooks/useCarousel";

const mockedCards = [
  {
    date: "2024-01-01",
    title: "New Year, New Beginnings: Launching Our Latest Project",
    link: "/blog/new-year-new-beginnings",
    image: "/assets/produtoPlaceholder.png",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day Special: Love in the Tech World",
    link: "/blog/valentines-day-special",
    image: "/assets/produtoPlaceholder.png",
  },
  {
    date: "2024-03-10",
    title: "International Women's Day: Celebrating Women in Tech",
    link: "/blog/international-womens-day",
    image: "/assets/produtoPlaceholder.png",
  },
  {
    date: "2024-04-22",
    title: "Earth Day: Sustainable Practices in Software Development",
    link: "/blog/earth-day",
    image: "/assets/produtoPlaceholder.png",
  },
];

export const BlogHero = (): JSX.Element => {
  const { calcStyle, emblaRef, scrollToSlide } = useCarousel({});

  return (
    <div
      ref={emblaRef}
      className="relative cursor-pointer  w-full w-screen bg-neutral-pure100 dark:bg-neutral-pure100 lg:bg-secondary-pure dark:lg:bg-secondary-pure z-[10] flex-nowrap"
    >
      <Flex className="w-full ">
        {mockedCards.map((card) => (
          <BlogHeroCard
            key={card.title}
            date={card.date}
            title={card.title}
            link={card.link}
            image={card.image}
          />
        ))}
      </Flex>
      <Flex className="w-full gap-2 absolute bottom-4 lg:bottom-6 2xl:pl-[160px] px-[5%] xl:px-20">
        {Array.from({ length: mockedCards.length }, (_, index) => (
          <div
            key={index}
            className={calcStyle(index)}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </Flex>
    </div>
  );
};
