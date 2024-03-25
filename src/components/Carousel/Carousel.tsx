import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import React, { useCallback, useEffect, useState } from "react";
import { Flex } from "../Flex/Flex";
import Icons from "../../../public/assets/icons";

interface Props {
  config?: EmblaOptionsType;
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  border?: boolean;
  style?: string;
  isConheca?: boolean;
  isBlog?: boolean;
  slides?: number;
}

export const Carousel = ({
  isBlog = false,
  slides,
  isConheca = false,
  style = "w-full bg-white dark:bg-white h-[80px] z-[10] border-b-[1px] border-neutral-pureOp10",
  border = true,
  config,
  children,
  autoPlay,
  interval = 1500,
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(config);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateCurrentSlide = useCallback(() => {
    if (emblaApi) {
      const index = emblaApi.selectedScrollSnap();
      const progress = emblaApi.scrollProgress();

      // If the progress is close to 100%, manually set to the last slide
      if (progress > 0.95) {
        setCurrentSlide((slides || 0) - 1);
      } else {
        setCurrentSlide(index);
      }
    }
  }, [emblaApi, slides]);

  const onScroll = useCallback(() => {
    if (emblaApi && isConheca) {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      setScrollProgress(progress * 100);
      updateCurrentSlide();
    }
  }, [emblaApi, isConheca, updateCurrentSlide]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      onScroll();
      emblaApi.on("reInit", onScroll);
      emblaApi.on("scroll", onScroll);
      emblaApi.on("select", updateCurrentSlide);
      if (autoPlay) {
        const timer = setInterval(scrollNext, interval);

        return () => clearInterval(timer);
      }
    }
  }, [emblaApi, scrollNext, autoPlay, interval, onScroll, updateCurrentSlide]);

  return (
    <Flex className={style} align="center" direction="col">
      <div ref={emblaRef} className="cursor-pointer w-full">
        {children}
      </div>
      {isConheca && (
        <Flex
          direction="col"
          className="gap-2 w-full max-w-[90%] xl:hidden lg:max-w-[80%] min-[1800px]:max-w-[1600px] min-[1921px]:max-w-[80%]"
        >
          <div className="mt-8  w-full bg-black/10">
            <div
              className=" h-[2px] bg-black"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          <Flex justify="between" align="center">
            <p className="text-[18px] font-[600]">
              {currentSlide + 1} /{" "}
              <span className="text-neutral-pure300">{slides}</span>
            </p>
            <Flex className="gap-2">
              <Flex
                onClick={() => scrollPrev()}
                className="h-10 w-10 border-[1px] border-black/10 hover:border-black cursor-pointer"
                align="center"
                justify="center"
              >
                <Icons.ChevronLeft className="w-2 h-4" />
              </Flex>
              <Flex
                onClick={() => scrollNext()}
                className="h-10 w-10 border-[1px] border-black/10 hover:border-black cursor-pointer"
                align="center"
                justify="center"
              >
                <Icons.ChevronRight className="w-3 h-4" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
