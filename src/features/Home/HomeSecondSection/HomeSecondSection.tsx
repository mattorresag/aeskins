import React from 'react'
import { Flex } from '../../../components/Flex/Flex'
import Image from 'next/image'
import Icons from '../../../../public/assets/icons'
import { CorporalSection } from './CorporalSection'
import { FacialSection } from './FacialSection'

export const HomeSecondSection = () => {
  return (
    <Flex className='pb-20 lg:pb-[120px] w-full gap-8 lg:gap-16 items-center' direction='col'>
      <Flex direction='col' className='px-[5%] gap-3 items-center'>
        <p className='text-neutral-pure400 text-[12px] font-[600]'>LINHAS</p>
        <p className='max-w-[752px] w-full uppercase lg:normal-case text-secondary-pure text-[32px] font-[300] leading:-[48px] lg:text-[40px] text-center lg:leading-[52px]'>Conheça nossos outras linhas e complemente o resultado</p>
      </Flex>
      <Flex direction='col' className='gap-4'>
        <CorporalSection />
        <FacialSection />
      </Flex>
    </Flex>
  )
}
