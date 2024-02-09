import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import AutoPlaySilentVideo from "../../../hooks/usePlayVideo";
export const Banner = () => {
  return (
    <Flex className="w-full flex-col md:flex-row">
      <Flex direction="col" className="w-full">
        <Flex className=" w-full h-full max-h-[calc(100vh-80px)] z-[10] justify-center ">
          <AutoPlaySilentVideo
            className="w-full h-full"
            video="/assets/video_banner.mp4"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
