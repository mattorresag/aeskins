import React from 'react'
import { Flex } from '../../components/Flex/Flex'
import { DateCard } from '../../components/DateCard/DateCard'
import { ProgramacaoCard } from '../../components/ProgramacaoCard/ProgramacaoCard'

const dates = [
  {
    date: '24 de jan, 2024',
    day: 'quarta-feira',
  },
  {
    date: '25 de jan, 2024',
    day: 'quinta-feira',
  },
  {
    date: '26 de jan, 2024',
    day: 'sexta-feira',
  },
  {
    date: '27 de jan, 2024',
    day: 'sábado',
  },
]

const programacao = [
  [
    {
      avatar: '/assets/foto.png',
      name: 'Matheus Macedo',
      start: '10:00',
      end: '10:40',
      title: 'Rinomodelação com Sofiderm',
    },
  ]
]

export const Dates = () => {
  const [selectedDate, setSelectedDate] = React.useState(0)
  return (
    <Flex direction='col' className='gap-6'>

      <Flex className='bg-neutral-pure100 w-full gap-8'>
        {dates.map((date, index) => (
          <Flex key={date.date} className=' cursor-pointer' onClick={() => setSelectedDate(index)}>
            <DateCard date={date.date} day={date.day} selected={selectedDate === index} />
          </Flex>
        ))}
      </Flex>
      <Flex direction='col' className='gap-2'>
        {programacao[selectedDate]?.map((programacao) => (
          <Flex key={programacao.name}>
            <ProgramacaoCard {...programacao} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
