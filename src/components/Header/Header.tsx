import React from "react";
import { Flex } from "../Flex/Flex";
import Icons from "../../../public/assets/icons";
import Link from "next/link";

export const Header = (): JSX.Element => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <>
      <Flex
        justify="center"
        className=" w-full border-b-[1px] border-neutral-pure200"
      >
        <Flex
          justify="between"
          align="center"
          className=" lg:h-[88px] py-10 z-[1000] hidden lg:flex  bg-white w-full px-[5%] min-[1800px]:px-16 min-[1921px]:px-[5%]"
        >
          <Flex className="relative w-full  items-center justify-between">
            <Link passHref href="/">
              <a className="cursor-pointer">
                <Icons.LogoBlack className="hidden lg:block w-[95px] h-[64px]" />
              </a>
            </Link>
            <Flex
              className=" gap-8 xl:gap-12 hidden lg:flex text-[14px] text-secondary-pure"
              align="center"
            >
              <div className="dropdown">
                <Flex
                  tabIndex={0}
                  role="button"
                  className="gap-2"
                  align="center"
                >
                  <p>PRODUTOS</p>
                  <Icons.ChevronDown className="w-2 h-1" />
                </Flex>
                <Flex
                  tabIndex={0}
                  direction="col"
                  className="dropdown-content z-[1] menu p-2 gap-2 shadow dark:bg-white bg-white rounded-box w-52"
                >
                  <li className="p-2">
                    <Link passHref href="/produtos/linha-facial">
                      <a>Linha Facial</a>
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link passHref href="/produtos/linha-corporal">
                      <a>Linha Corporal</a>
                    </Link>
                  </li>
                </Flex>
              </div>
              <Link passHref href="/quem-somos">
                <a>
                  <Flex className="gap-2" align="center">
                    <p>QUEM SOMOS</p>
                  </Flex>
                </a>
              </Link>
              <Link passHref href="/encontre-uma-clinica">
                <a>
                  <p>ENCONTRE UMA CLÍNICA</p>
                </a>
              </Link>
              <Link passHref href="/profissionais">
                <a>
                  <p>PARA PROFISSIONAIS</p>
                </a>
              </Link>
              <Link passHref href="https://community.aeskins.com/">
                <a>
                  <p>COMMUNITY</p>
                </a>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          className="h-16 px-4 lg:hidden bg-white dark:bg-white w-full"
          align="center"
          justify="between"
        >
          <Link href="/">
            <a>
              <Icons.LetterBlack className="w-[52px] h-10" />
            </a>
          </Link>
          <Flex
            onClick={() => setShowSidebar((prevState) => !prevState)}
            className="cursor-pointer"
          >
            <Icons.Burger className="w-7 h-7" />
          </Flex>
        </Flex>
      </Flex>
      {showSidebar && (
        <Flex
          direction="col"
          className=" w-[100vw] h-[100dvh] fixed lg:hidden top-0 dark:bg-white bg-white z-[1000000]"
        >
          <Flex
            className="h-16 px-4 py-3 border-b-[1px] lg:hidden  w-full"
            align="center"
            justify="between"
          >
            <Link href="/">
              <a>
                <Icons.LetterBlack className=" w-[52px] h-10" />
              </a>
            </Link>
            <Flex
              onClick={() => setShowSidebar((prevState) => !prevState)}
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M1.70711 19.7072L20.0914 1.32287"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.29314 1.70714L19.6774 20.0914"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Flex>
          </Flex>
          <Flex className="px-6  gap-4 mt-4 mb-20" direction="col">
            <Flex onClick={() => setShowSidebar((prevState) => !prevState)}>
              <Link href="/">
                <p className="pb-6 text-[20px] w-full text-neutral-pure1000 font-[400] leading-[32px] border-b-[1px] ">
                  Página Inicial
                </p>
              </Link>
            </Flex>
            <Flex onClick={() => setShowSidebar((prevState) => !prevState)}>
              <Link href="/produtos/linha-facial">
                <p className="pb-6 text-[20px] w-full text-neutral-pure1000 font-[400] leading-[32px] border-b-[1px] ">
                  Linha Facial
                </p>
              </Link>
            </Flex>
            <Flex onClick={() => setShowSidebar((prevState) => !prevState)}>
              <Link href="/produtos/linha-corporal">
                <h1 className="pb-6 text-[20px] w-full text-neutral-pure1000 font-[400] leading-[32px] border-b-[1px] ">
                  Linha Corporal
                </h1>
              </Link>
            </Flex>
            <Flex onClick={() => setShowSidebar((prevState) => !prevState)}>
              <Link href="/encontre-uma-clinica">
                <p className="pb-6 text-[20px] w-full text-neutral-pure1000 font-[400] leading-[32px] border-b-[1px] ">
                  Encontre uma clínica
                </p>
              </Link>
            </Flex>
            <Flex onClick={() => setShowSidebar((prevState) => !prevState)}>
              <Link href="/profissionais">
                <p className="pb-6 text-[20px] w-full text-neutral-pure1000 font-[400] leading-[32px] border-b-[1px] ">
                  Para Profissionais
                </p>
              </Link>
            </Flex>
            <Flex onClick={() => setShowSidebar((prevState) => !prevState)}>
              <Link href="/quem-somos">
                <p className="pb-6 text-[20px] w-full text-neutral-pure1000 font-[400] leading-[32px] border-b-[1px] ">
                  Quem somos
                </p>
              </Link>
            </Flex>
            <Flex onClick={() => setShowSidebar((prevState) => !prevState)}>
              <Link href="https://community.aeskins.com/">
                <p className="pb-6 text-[20px] w-full font-[400] leading-[32px]">
                  Community
                </p>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};
