import React, { useEffect, useRef, useState } from 'react'
import { Flex } from '../../../components/Flex/Flex'
import Icons from '../../../../public/assets/icons'
import useWindowWidth from '../../../hooks/useWindowWidth';

export const HomeFirstSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [margin, setMargin] = useState(0);

  const windowWidth = useWindowWidth()

  useEffect(() => {
    if (ref.current) {
      setMargin(ref.current.clientHeight);
    }
  }, [windowWidth]); // Dependency array includes windowWidth
  return (
    <Flex direction='col' style={{
      marginBottom: windowWidth > 1023 ? 0 : margin - 30
    }} className='lg:mb-0 w-full py-20 lg:px-[5%]  lg:pt-[120px] lg:pb-[240px] xl:px-16 gap-8 lg:gap-14' align='center'>
      <Flex direction='col' className='px-[5%] gap-6' align='center'>
        <Flex direction='col' className='gap-2 items-center cls lg:max-w-[742px] max-w-[320px]'>
          <p className='text-neutral-pure400 text-[12px] font-[600] leading-[14px]'>
            QUEM SOMOS
          </p>
          <p className='text-center text-[48px] lg:text-[56px] text-neutral-pure900 tracking-[2px] font-[300] leading-[62px] lg:leading-[73px]'>
            LEVANDO A BELEZA  <br />
            <span className='font-[400] text-secondary-pure lg:text-[64px]'>AINDA MAIS LONGE</span>
          </p>
        </Flex>
        <Icons.LetterLine className='w-[281px] h-5' />
      </Flex>
      <Flex className=' relative max-h-[320px] lg:max-h-full lg:h-[600px] xl:h-[724px] bg-neutral-pure100 w-full max-w-[1792px]'>
        <div className='-bottom-10 -left-[6%] hidden xl:flex absolute bg-[#07D767] h-[184px]  xl:w-[400px] 2xl:w-[693px] mix-blend-multiply' />
        <Flex ref={ref} className='ml-[5%] lg:ml-0 gap-8 w-full lg:max-w-[750px] xl:max-w-[886px] py-6 lg:py-12 px-[5%] h-full lg:h-fit my-[200px] lg:px-12 bg-white lg:my-0 lg:absolute lg:right-20  lg:-bottom-[300px] xl:-bottom-[120px]' direction='col'>
          <p className='text-[16px] lg:text-[20px] text-secondary-pure lg:font-[300] leading-[24px] lg:leading-[30px]'>
            A Aeskins Pharmaceutical tem a missão de democratizar a beleza, colocando nossos clientes em primeiro lugar.<br /><br />

            Formada por profissionais renomados e com mais de 20 anos de experiência no mercado de procedimentos estéticos, a Aeskins oferece uma linha de produtos inovadores em biotecnologia, para promover não só a beleza e a estética, mas principalmente a segurança, confiança, autoestima e o bem-estar dos pacientes.<br /><br />

            A Aeskins leva até os profissionais de estética uma jornada mais eficiente, fornecendo uma solução completa aliada a um programa de educação continuada, para que os pacientes obtenham os melhores resultados e maior satisfação do tratamento.<br />
          </p>
          <Flex align='center' justify='between' className='lg:max-w-[277px] w-full border-b-[1px] border-secondary-pure'>
            <p className='font-[600]'>SOBRE A AESKINS</p>
            <button >
              <Icons.EmailButton className='h-14 w-14' />
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
