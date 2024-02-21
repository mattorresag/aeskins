import React, { useEffect } from "react";
import { Flex } from "../../../components/Flex/Flex";
import VideoDialog from "../../../components/VideoDialog/VideoDialog";
import Image from "next/image";
import Icons from "../../../../public/assets/icons";
import Thumbnail from "../../../../public/assets/banner.png";
import dynamic from "next/dynamic";
import PageLoading from "../../../components/PageLoading";

const AutoPlaySilentVideo = dynamic(
  () => import("../../../hooks/usePlayVideo"),
  {
    ssr: false,
  }
);

export const Banner = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <PageLoading isLoading={isLoading}>
      <Flex className="w-full flex-col md:flex-row">
        <Flex direction="col" className="w-full relative">
          <Flex className=" w-full h-full max-h-[calc(100vh-80px)] z-[10] justify-center ">
            <Flex
              className="w-full lg:hidden"
              onClick={() => {
                setIsModalOpen((oldState) => !oldState);
              }}
            >
              <Flex className="h-full w-full  relative">
                <Flex className=" absolute inset-0 justify-center items-center z-10">
                  <Icons.YoutubePlay className="w-20 h-20" />
                </Flex>
                <Image
                  className="object-cover"
                  width={1024}
                  height={536}
                  src={Thumbnail.src}
                  alt={`Video mobile`}
                />
              </Flex>
            </Flex>
            <Flex className="hidden lg:flex w-full h-full relative">
              <AutoPlaySilentVideo
                className="w-full h-full"
                video="/assets/video_banner.mp4"
              />
            </Flex>
          </Flex>
          <div className="absolute top-0 hidden lg:block  transform  z-[1] w-full h-full  overflow-hidden">
            <div className="w-full h-full blur-xl  filter opacity-100 scale-[1.25]">
              <AutoPlaySilentVideo
                className="w-full h-full"
                video="/assets/video_banner.mp4"
              />
            </div>
          </div>
        </Flex>
        <VideoDialog
          url={"https://www.youtube.com/embed/jf_BMG7qG80?si=cM58ANR9ijTBQvY3"}
          isModalOpen={isModalOpen}
          handleClose={() => setIsModalOpen((oldState) => !oldState)}
        />
      </Flex>
    </PageLoading>
  );
};

export default Banner;
