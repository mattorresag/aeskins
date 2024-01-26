import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
interface Props {
  classNameActive?: string;
  classNameInactive?: string;
}
export const useCarousel = ({
  classNameActive = "w-[calc(300%/6)] lg:w-[154px] bg-black lg:bg-white",
  classNameInactive = "w-[calc(100%/6)] lg:w-[50px] bg-black/30 lg:bg-white/40",
}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const updateCurrentSlide = useCallback(() => {
    if (emblaApi) {
      const index = emblaApi.selectedScrollSnap();
      setCurrentSlide(index);
    }
  }, [emblaApi]);

  const scrollToSlide = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onScroll = useCallback(() => {
    if (emblaApi) {
      updateCurrentSlide();
    }
  }, [emblaApi, updateCurrentSlide]);

  useEffect(() => {
    if (emblaApi) {
      onScroll();
      emblaApi.on("reInit", onScroll);
      emblaApi.on("scroll", onScroll);
      emblaApi.on("select", updateCurrentSlide);
    }
  }, [emblaApi, onScroll, updateCurrentSlide]);

  const calcStyle = (index: number) => {
    return `h-[2px] ${
      currentSlide === index ? classNameActive : classNameInactive
    } mx-1`;
  };
  return {
    calcStyle,
    scrollToSlide,
    emblaRef,
  };
};
