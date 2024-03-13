import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";
import BannerImage from "../../../../public/assets/banner.png";
import BannerMobileImage from "../../../../public/assets/bannerMobile.png";
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
            src={BannerImage.src}
            alt="Banner home"
            layout="fill"
            quality={100}
            priority
          />
        </div>
        <div className="relative w-full md:hidden pt-[180%]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={BannerMobileImage.src}
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
