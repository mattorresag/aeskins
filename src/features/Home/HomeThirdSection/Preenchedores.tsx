import React from 'react'
import { Flex } from '../../../components/Flex/Flex'
import { PreenchedoresCard } from '../../../components/Cards/PreenchedoresCard'
import Icons from '../../../../public/assets/icons'
import useWindowWidth from '../../../hooks/useWindowWidth'

const preenchedores = [
  { title: 'Segurança Comprovada', icon: <><Icons.Seguranca className='w-[40px] h-[40px] lg:w-12 lg:h-12 hidden lg:block' /><Icons.SegurancaMobile className="w-10 h-10 lg:hidden" /></> },
  { title: 'Biocompatível e Biodegradável', icon: <><Icons.Biocompativel className='w-[40px] h-[40px] lg:w-12 lg:h-12 hidden lg:block' /><Icons.BiocompativelMobile className="w-10 h-10 lg:hidden" /></> },
  { title: 'Ácido Hialurônico Puro Reticulado', icon: <><Icons.Acido className='w-[40px] h-[40px] lg:w-12 lg:h-12 hidden lg:block' /><Icons.AcidoMobile className="w-10 h-10 lg:hidden" /></> },
  { title: 'Volume com Projeção', icon: <><Icons.Volume className='w-[40px] h-[40px] lg:w-12 lg:h-12 hidden lg:block' /><Icons.VolumeMobile className="w-10 h-10 lg:hidden" /></> },
  { title: 'Duração de 12 a 24 meses', icon: <><Icons.Duracao className='w-[40px] h-[40px] lg:w-12 lg:h-12 hidden lg:block' /><Icons.DuracaoMobile className="w-10 h-10 lg:hidden" /></> },
  { title: 'Partículas com Textura Firme', icon: <><Icons.Particulas className='w-[40px] h-[40px] lg:w-12 lg:h-12 hidden lg:block' /><Icons.ParticulasMobile className="w-10 h-10 lg:hidden" /></> }
]

export const Preenchedores = () => {

  const width = useWindowWidth()

  return (
    <Flex className='px-[5%] lg:px-0 gap-4 w-full flex-wrap items-center justify-center lg:justify-start' style={{
      gridTemplateAreas: width > 1439 ? `
      "card1 card2 card3"
      "card4 card5 card6"
      ` : `
      "card1 card2"
      "card3 card4"
      "card5 card6"`

    }}>
      {preenchedores.map((preenchedor, index) => (
        <Flex className='w-[calc(calc(100%/2)-16px)] xl:w-[calc(calc(100%/3)-16px)]' key={preenchedor.title} style={{
          gridArea: `card${index + 1}`
        }}>
          <PreenchedoresCard title={preenchedor.title} icon={preenchedor.icon} />
        </Flex>
      ))}
    </Flex>
  )
}
