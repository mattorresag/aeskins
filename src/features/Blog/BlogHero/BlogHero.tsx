import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Flex } from "../../../components/Flex/Flex";
import { BlogHeroCard } from "../../../components/Cards/BlogHeroCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCarousel } from "../../../hooks/useCarousel";
import { BlogPost } from "../../../utils/types";

interface Props {
  posts?: BlogPost[];
}

export const BlogHero = ({ posts }: Props): JSX.Element => {
  const { calcStyle, emblaRef, scrollToSlide } = useCarousel({});

  return (
    <div
      ref={emblaRef}
      className="relative cursor-pointer  w-full w-screen bg-neutral-pure100 dark:bg-neutral-pure100 lg:bg-secondary-pure dark:lg:bg-secondary-pure z-[10] flex-nowrap"
    >
      <Flex className="w-full ">
        {posts?.map((card) => (
          <BlogHeroCard
            key={card.title}
            date={card.publication_date}
            title={card.title}
            link={`${card.id}`}
            image={card.card_image}
          />
        ))}
      </Flex>
      <Flex className="w-full gap-2 absolute bottom-4 lg:bottom-6 2xl:pl-[160px] px-[5%] xl:px-20">
        {Array.from({ length: posts?.length || 1 }, (_, index) => (
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
