import React from 'react'
import { Flex } from '../../../components/Flex/Flex'
import Icons from '../../../../public/assets/icons'
import Image from 'next/image'

export const FacialSection = () => {
  return (
    <Flex className='w-full flex-col lg:flex-row border-b-[1px] lg:border-b-[0px] lg:border-t-[1px] border-neutral-pure200'>
      <Flex className='hidden lg:flex w-full lg:w-[50%] gap-10 lg:gap-14 justify-center py-12 lg:py-[128px] px-[5%] lg:px-[114px]' direction='col'>
        <Flex direction='col' className='gap-3'>
          <p className='lg:font-[400] text-[12px] font-[600] text-neutral-pure400 text-[14px] lg:tracking-[0.56px] lg:text-secondary-pure lg:font-metropolis'>
            TRATAMENTO
          </p>
          <p className='text-[56px] leading-[73px] font-[600] tracking-[2px] text-secondary-pure'>
            FACIAL
          </p>
        </Flex>
        <Flex align='center' className='w-fit gap-4 border-b-[1px] border-secondary-pure'>
          <p className='font-[600]'>CONHECER LINHA</p>
          <button >
            <Icons.EmailButton className='h-14 w-14' />
          </button>
        </Flex>
      </Flex>
      <Flex className='w-full lg:w-[50%] max-[600px]:h-[264px] max-[1023px]:h-[364px] '>
        <Image
          src='/assets/facial.png'
          width={2000}
          height={468}
          alt='Facial'
          quality={100}
          priority
          objectFit='cover'
        />
      </Flex>
      <Flex className='lg:hidden w-full lg:w-[50%] gap-10 lg:gap-14 justify-center py-12 lg:py-[128px] px-[5%] lg:px-[114px]' direction='col'>
        <Flex direction='col' className='gap-3'>
          <p className='lg:font-[400] text-[12px] font-[600] text-neutral-pure400 text-[14px] lg:tracking-[0.56px] lg:text-secondary-pure lg:font-metropolis'>
            TRATAMENTO
          </p>
          <p className='text-[56px] leading-[73px] font-[600] tracking-[2px] text-secondary-pure'>
            FACIAL
          </p>
        </Flex>
        <Flex align='center' className='w-fit gap-4 border-b-[1px] border-secondary-pure'>
          <p className='font-[600]'>CONHECER LINHA</p>
          <button >
            <Icons.EmailButton className='h-14 w-14' />
          </button>
        </Flex>
      </Flex>

    </Flex>
  )
}
