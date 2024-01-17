import React from 'react'
import { Flex } from '../Flex/Flex'

interface Props {
  icon: React.ReactNode
  title: string
}

export const PreenchedoresCard = ({ icon, title }: Props) => {
  return (
    <Flex className='shadow-preenchedores bg-white xl:h-[160px] w-full h-[130px] p-4 gap-4 ' direction='col' align='center' justify='center'>
      {icon}
      <p className='text-[14px] font-[600] text-secondary-pure text-center lg:text-[16px] lg:uppercase leading-16px lg:leading-[19px]'>
        {title}
      </p>
    </Flex>
  )
}
