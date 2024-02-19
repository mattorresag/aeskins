import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import AutoPlaySilentVideo from "../../../hooks/usePlayVideo";
import VideoDialog from "../../../components/VideoDialog/VideoDialog";
import Image from "next/image";
import Icons from "../../../../public/assets/icons";
import Thumbnail from '../../../../public/assets/thumbnail.jpg';
export const Banner = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
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
          <AutoPlaySilentVideo
            className="w-full h-full"
            video="/assets/video_banner.mp4"
          />
        </Flex>
        <div className="absolute top-0  transform  z-[1] w-full h-full  overflow-hidden">
          <div className="w-full h-full blur-xl  filter opacity-100 scale-[1.25]">
            <AutoPlaySilentVideo className="w-full h-full" video="/assets/video_banner.mp4" />
          </div>
        </div>
      </Flex>
      <VideoDialog
        url={'https://www.youtube.com/embed/jf_BMG7qG80?si=cM58ANR9ijTBQvY3'}
        isModalOpen={isModalOpen}
        handleClose={() => setIsModalOpen((oldState) => !oldState)}
      />
    </Flex >
  );
};
