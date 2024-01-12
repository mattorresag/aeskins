import React from "react";
import { Flex } from "../../components/Flex/Flex";

function Form() {

  return (
    <Flex
      direction="col"
      justify={"center"}
      align={"center"}
      className="max-w-[412px] min-h-[400px] md:max-w-[200px] xl:max-w-[412px] lg:max-w-[352px] gap-5 2xl:gap-8 rounded-sm bg-white pb-6 pt-4 px-6 2xl:p-6"
    >
      <p className="text-center text-[20px] 2xl:text-[24px] font-[500] leading-[29px] text-neutral-pure900">
        Todas as vagas foram preenchidas. <br />
      </p>
    </Flex>
  );
}

export default Form;
