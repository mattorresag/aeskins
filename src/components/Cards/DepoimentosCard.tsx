import React from 'react'
import { Flex } from '../Flex/Flex'
import Image from 'next/image'
import VideoDialog from '../VideoDialog/VideoDialog'

interface Props {
  src: string
  url: string
}

export const DepoimentosCard = ({ src, url }: Props) => {

  return (
    <>
      <Flex className='lg:w-[556px] lg:h-[536px] w-[303px] h-[424px]' onClick={() => document.getElementById(url)?.showModal()}>
        <Image
          className='object-cover'
          width={556}
          height={536}
          src={src}
          alt={`Depoimento ${src}`}
        />
      </Flex>
      <VideoDialog url={url} id={url} />
    </>
  )
}
