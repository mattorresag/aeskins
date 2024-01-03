import React from 'react'
import { Flex } from '../Flex/Flex';
import Image from 'next/image';

interface Props {
  avatar: string;
  name: string;
  start: string;
  end: string;
  title: string;
}

export const ProgramacaoCard = ({ avatar, end, name, start, title }: Props) => {
  return (
    <Flex className='w-full border-[1px] border-neutral-pure100'>
      <Flex className='p-2 border-r-[1px] border-r-neutral-pure100'>
        <Flex className='relative w-[160px]'>
          <Image
            src={avatar}
            alt={name}
            width={160}
            height={144}
            objectFit='cover'
            className='relative'
          />
          <p className='min-w-[85%] absolute bottom-0 left-0 p-2 bg-secondary-pure text-white text-[14px] leading-[21px]'>{name}</p>
        </Flex>
      </Flex>
      <Flex direction='col' className='p-6 gap-3' justify='center'>
        <Flex className='w-fit rounded-3xl pr-3 pl-1 py-1 border-[1px] border-secondary-pure10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M3.5 12.5C3.5 13.6819 3.73279 14.8522 4.18508 15.9442C4.63738 17.0361 5.30031 18.0282 6.13604 18.864C6.97177 19.6997 7.96392 20.3626 9.05585 20.8149C10.1478 21.2672 11.3181 21.5 12.5 21.5C13.6819 21.5 14.8522 21.2672 15.9442 20.8149C17.0361 20.3626 18.0282 19.6997 18.864 18.864C19.6997 18.0282 20.3626 17.0361 20.8149 15.9442C21.2672 14.8522 21.5 13.6819 21.5 12.5C21.5 11.3181 21.2672 10.1478 20.8149 9.05585C20.3626 7.96392 19.6997 6.97177 18.864 6.13604C18.0282 5.30031 17.0361 4.63738 15.9442 4.18508C14.8522 3.73279 13.6819 3.5 12.5 3.5C11.3181 3.5 10.1478 3.73279 9.05585 4.18508C7.96392 4.63738 6.97177 5.30031 6.13604 6.13604C5.30031 6.97177 4.63738 7.96392 4.18508 9.05585C3.73279 10.1478 3.5 11.3181 3.5 12.5Z" stroke="#07D767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 12.5L15.5 14.5" stroke="#07D767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 7.5V12.5" stroke="#07D767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className='text-neutral-pure500 font-[500] text-[18px] leading-[27px]'>{start} às {end}</p>
        </Flex>
        <p className='text-[24px] text-secondary-pure font-[400]'>{title}</p>

      </Flex>
    </Flex>
  )
}
