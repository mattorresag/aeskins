import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { Carousel } from "../../components/Carousel/Carousel";
import { DepoimentosCard } from "../../components/Cards/DepoimentosCard";
import { WordsCarousel } from "../../components/Carousel/WordsCarousel/WordsCarousel";
import VideoDialog from "../../components/VideoDialog/VideoDialog";

const words = (
  <p className="text-[64px] font-[300] leading-[83px] lg:text-[80px] lg:leading-[104px] text-nowrap">
    Conheça quem utiliza{" "}
    <span className="text-secondary-pure font-[700]">Aeskins® </span>
  </p>
);

const depoimentos = [
  {
    src: "/assets/depoimentos/first.png",
    url: "https://www.youtube.com/embed/5lR2owUhPIM",
  },
  {
    src: "/assets/depoimentos/second.png",
    url: "https://www.youtube.com/embed/3uuchiNpOIk",
  },
  {
    src: "/assets/depoimentos/third.png",
    url: "https://www.youtube.com/embed/-oVmk4hQlfA",
  },
];

export const QuemUtiliza = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState("");

  return (
    <>
      <Flex
        direction="col"
        className="h-full gap-8 lg:gap-10 py-10 lg:py-0 pb-20 lg:pb-[120px] w-full border-none"
      >
        <WordsCarousel words={words} />
        <p className="px-[5%] text-center lg:hidden text-[40px] font-[300] leading-[53px]">
          Conheça quem utiliza{" "}
          <span className="text-secondary-pure font-[700]">Aeskins® </span>
        </p>
        <Flex className="h-full w-full">
          <Carousel
            slides={depoimentos.length}
            isConheca
            style="w-full bg-white dark:bg-white z-[10] flex-nowrap"
            interval={3000}
            config={{ dragFree: true }}
          >
            <Flex className=" w-full pl-[5%] lg:pl-[160px] [&>*:last-child]:mr-8 gap-2 lg:gap-6 ">
              {depoimentos.map((depoimento, index) => (
                <Flex
                  className="w-full"
                  key={index}
                  onClick={() => {
                    setVideoUrl(depoimento.url);
                    setIsModalOpen((oldState) => !oldState);
                  }}
                >
                  <DepoimentosCard src={depoimento.src} />
                </Flex>
              ))}
            </Flex>
          </Carousel>
        </Flex>
      </Flex>
      {videoUrl && (
        <VideoDialog
          url={videoUrl}
          isModalOpen={isModalOpen}
          handleClose={() => setIsModalOpen((oldState) => !oldState)}
        />
      )}
    </>
  );
};
