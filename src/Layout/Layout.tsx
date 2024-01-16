import React from "react";
import PageMeta from "../PageMeta";
import { Flex } from "../components/Flex/Flex";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
interface Props {
  children: React.ReactNode;
  subtitle?: string;
  align?: "center" | "start" | "end";
}
export const Layout = ({
  children,
  subtitle,
  align = "center",
}: Props): JSX.Element => {
  return (
    <>
      <PageMeta subtitle={subtitle} />
      <Header />
      <div className="w-full min-h-full overflow-x-hidden overflow-y-auto">
        <Flex className="w-full" justify="center" align={align}>
          <Flex className={"h-full w-full"} direction="col">{children}</Flex>
        </Flex>
        <Footer />
      </div>
    </>
  );
};
