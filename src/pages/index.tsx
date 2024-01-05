import { NextPage } from "next/types"
import { Layout } from "../Layout/Layout"
import { Flex } from "../components/Flex/Flex"
import Image from "next/image";
import Form from "../features/Form/Form";
import { Dates } from "../features/Dates/Dates";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <Layout>
      <Flex justify="center" className="w-full lg:w-[100vw] h-[232px] lg:h-[600px] xl:h-[640px] 2xl:h-[739px] min-[1921px]:h-[980px] relative">
        <Image
          src="/assets/bg.png"
          unoptimized
          objectFit="cover"
          priority
          layout="fill"
          quality={100}
          alt="Fundo"
        />

        <Flex align="center" justify="end" className=" w-fit relative lg:px-[5%] xl:px-0 bg-grey w-full min-[1921px]:max-w-[1700px] max-w-[1217px] z-[100]">
          <Link href="#programacao">
            <Flex className="gap-2 cursor-pointer  absolute right-0 lg:top-5 lg:right-14 xl:right-0 xl:top-5 2xl:top-7 min-[1921px]:top-20" align="center">
              <p className="text-white text-[14px] font-[500]">Ver programação</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                <path d="M0 5H8.5M8.5 5L4.5 1M8.5 5L4.5 9" stroke="white" stroke-linejoin="round" />
              </svg>
            </Flex>
          </Link>

          <Flex direction="col" className="max-w-[412px] gap-5 2xl:gap-8 rounded-sm bg-white pb-6 pt-4 px-6 2xl:p-6">
            <p className="text-[20px] 2xl:text-[24px] font-[500] leading-[29px] text-neutral-pure900">Faça a sua inscrição!</p>
            <Form />
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" className="w-full py-[120px] " id="programacao">
        <Flex direction='col' className="lg:px-[5%] xl:px-0 w-full min-[1921px]:max-w-[1700px] max-w-[1217px] gap-[64px]">
          <Flex justify="between" align="center">
            <Flex direction="col" className="gap-6">
              <p className="text-secondary-pure font-[500] text-[40px] xl:text-[48px] leading-[57px]">Confira a programação</p>
              <Flex className="gap-4" align="center">
                <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" width="48" height="48" rx="24" fill="#07D767" />
                  <path d="M16.5 21H32.5M28.5 15V17M20.5 15V17M19.7002 17H29.3002C30.4203 17 30.98 17 31.4078 17.218C31.7841 17.4097 32.0905 17.7157 32.2822 18.092C32.5002 18.5199 32.5 19.0798 32.5 20.2V29.8C32.5 30.9201 32.5002 31.4802 32.2822 31.908C32.0905 32.2844 31.7841 32.5902 31.4078 32.782C30.98 33 30.4203 33 29.3002 33H19.7002C18.5801 33 18.0196 33 17.5918 32.782C17.2155 32.5902 16.9097 32.2844 16.718 31.908C16.5 31.4802 16.5 30.9201 16.5 29.8V20.2C16.5 19.0798 16.5 18.5199 16.718 18.092C16.9097 17.7157 17.2155 17.4097 17.5918 17.218C18.0196 17 18.5801 17 19.7002 17Z" stroke="black" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M60.9435 19.3511L66.0546 28.2038M66.0546 28.2038L67.356 23.3469M66.0546 28.2038L61.1976 26.9024" stroke="#07D767" stroke-width="2" />
                  <path d="M40.6414 24C40.6414 36.6244 50.8755 46.8585 63.4999 46.8585C76.1244 46.8585 86.3585 36.6244 86.3585 24C86.3585 11.3756 76.1244 1.14146 63.5 1.14146C50.8755 1.14146 40.6414 11.3756 40.6414 24Z" stroke="#07D767" stroke-width="2.28292" />
                </svg>

                <p className="text-secondary-pure font-[600]"> 24 a 27 de janeiro de 2024 -&gt;  19h</p>
              </Flex>
            </Flex>
            <p className="max-w-[458px] text-neutral-pure500 font-[500] leading-[24px]">Lorem ipsum dolor sit amet consectetur. Enim vitae pulvinar sit ante vestibulum sed adipiscing. Dictumst dictum felis vitae sit ac. Vestibulum curabitur eget donec lorem ultrices.</p>
          </Flex>
          <Dates />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Home
