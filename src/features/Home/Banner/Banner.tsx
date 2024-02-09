import React from "react";
import { Flex } from "../../../components/Flex/Flex";
export const Banner = () => {
  return (
    <Flex
      className="
w-full relative    flex-col md:flex-row"
    >
      <Flex direction="col" className="w-full">
        <Flex className=" w-full h-full z-[10] justify-center">
          <video playsInline muted autoPlay>
            <source src="/assets/video_banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Flex>
      </Flex>
    </Flex>
  );
};
