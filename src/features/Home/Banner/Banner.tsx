import React from 'react'
import { Flex } from '../../../components/Flex/Flex'
import Image from 'next/image'

export const Banner = () => {
  return (
    <Flex className="md:bg-background-home
    md:bg-[center_left_-350px]
  bg-no-repeat
  bg-cover
  xl:bg-[center]
w-full bg-primary-pure relative h-[652px] min-[433px]:h-[750px] min-[400px]:h-[700px] min-[1800px]:h-[800px] min-[1921px]:h-[1000px]   md:pl-[5%] xl:pl-[160px]   flex-col md:flex-row">
      <Flex className=" md:hidden  h-full lg:h-full 2xl:h-[826px] min-[1921px]:h-[1000px] right-0 top-0">
        <Flex className="relative">
          <Image
            className="object-cover min-[500px]:object-contain"
            src="/assets/bannerMobile.png"
            width={2920}
            height={826}
            alt="Banner"
            quality={100}
            priority
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
