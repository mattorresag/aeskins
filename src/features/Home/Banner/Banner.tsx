import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";
export const Banner = () => {
  return (
    <Flex
      className="
w-full bg-primary-pure relative    flex-col md:flex-row"
    >
      <Flex direction="col" className="w-full">
        <div className="relative w-full hidden md:block pt-[43.89%]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={'/assets/banner.png'}
            alt="Banner home"
            layout="fill"
            quality={100}
            priority
          />
        </div>
        <div className="relative w-full md:hidden pt-[180%]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={'/assets/bannerMobile.png'}
            alt="Banner home mobile"
            layout="fill"
            quality={100}
            priority
          />
        </div>
      </Flex>
    </Flex>
  );
};
