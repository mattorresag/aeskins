import React, { useState } from 'react'
import { Flex } from '../../components/Flex/Flex'
import { Carousel } from '../../components/Carousel/Carousel'
import Icons from '../../../public/assets/icons'
import { DepoimentosCard } from '../../components/Cards/DepoimentosCard'
import VideoDialog from '../../components/VideoDialog/VideoDialog'

const words = <p className='text-[64px] font-[300] leading-[83px] lg:text-[80px] leading-[104px]'>Conheça quem utiliza <span className='text-secondary-pure font-[700]'>Aeskins® </span></p>

const depoimentos = [
  {
    src: '/assets/depoimento.png',
    url: 'https://www.youtube.com/embed/MOPKWUVKU28?si=CsQKYlXESEcpJJoT'
  },
  {
    src: '/assets/depoimento.png',
    url: 'https://www.youtube.com/watch?v=DXKojYz25Gw'
  },
  {
    src: '/assets/depoimento.png',
    url: 'https://www.youtube.com/embed/vZX6fI2cdl4?si=aZssTB8DCb62EHJb'
  },
  {
    src: '/assets/depoimento.png',
    url: 'https://www.youtube.com/embed/vZX6fI2cdl4?si=aZssTB8DCb62EHJb'
  },
  {
    src: '/assets/depoimento.png',
    url: 'https://www.youtube.com/embed/vZX6fI2cdl4?si=aZssTB8DCb62EHJb'
  },
]


export const QuemUtiliza = () => {
  return (
    <>
      <Flex direction='col' className='h-full gap-8 lg:gap-10 py-10 lg:py-0 pb-20 lg:pb-[120px] w-full border-none'>
        <Carousel style='w-full bg-white dark:bg-white z-[10] flex-nowrap' autoPlay interval={3000} config={{ loop: true, dragFree: true, }}>
          <Flex className='w-full text-nowrap gap-8 [&>*:last-child]:mr-8 ' align='center'>
            {Array.from({ length: 4 }).map((_, index) => (
              <Flex
                key={index}
                align='center'
                className='gap-8'
              >
                {words}
                <Flex>
                  <Icons.Line className='h-[1px] w-18' />
                  <Icons.Line className='h-[1px] w-18' />
                </Flex>
              </Flex>
            ))}

          </Flex>
        </Carousel>
        <Flex className='h-full w-full'>
          <Carousel slides={depoimentos.length} isConheca style='w-full bg-white dark:bg-white z-[10] flex-nowrap' interval={3000} config={{ dragFree: true }} >
            <Flex className=' w-full pl-[5%] lg:pl-[160px] [&>*:last-child]:mr-8 gap-2 lg:gap-6 '>
              {depoimentos.map((depoimento, index) => (
                <Flex className='w-full' key={index} >
                  <DepoimentosCard src={depoimento.src} url={depoimento.url} />
                </Flex>
              ))}
            </Flex>
          </Carousel>
        </Flex>
      </Flex>
    </>
  )
}
