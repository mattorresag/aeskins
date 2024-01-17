import React from "react";
import { Flex } from "../Flex/Flex";
import Icons from "../../../public/assets/icons";
import Link from "next/link";

export const Header = (): JSX.Element => {
  return (
    <Flex justify="center" className="w-full border-b-[1px] border-neutral-pure200">
      <Flex
        justify="between"
        align="center"
        className="h-[88px] py-10 z-[1000]  bg-white w-full px-[5%] min-[1800px]:px-16 min-[1921px]:px-0"
      >
        <Flex className="relative w-full  items-center justify-between" >
          <Link passHref href='/' >
            <a className="cursor-pointer">
              <Icons.LogoBlack className='hidden lg:block w-[95px] h-[64px]' />
              <Icons.LetterBlack className='lg:hidden w-[53px] h-[41px]' />
            </a>
          </Link>
          <Flex className=" gap-12 hidden lg:flex text-[14px] text-secondary-pure" align="center">
            <Flex className="gap-2" align="center">
              <p>PRODUTOS</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L4 4L8 0" fill="#29223E" />
              </svg>
            </Flex>
            <Link passHref href='/sobre' >
              <a>
                <p>BLOGS E ARTIGOS</p>
              </a>
            </Link>
            <Link passHref href='/sobre' >
              <a>
                <p>ENCONTRE UMA CLÍNICA</p>
              </a>
            </Link>
            <Link passHref href='/sobre' >
              <a>
                <p>PARA PROFISSIONAIS</p>
              </a>
            </Link>
            <Link passHref href='/sobre' >
              <a>
                <p>COMMUNITY</p>
              </a>
            </Link>
          </Flex>
          <Flex className="lg:hidden">
            <Icons.Burger className='w-8 h-8' />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
