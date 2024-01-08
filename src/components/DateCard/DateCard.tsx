import React from "react";
import { Flex } from "../Flex/Flex";

interface Props {
  date: string;
  day: string;
  selected?: boolean;
}

export const DateCard = ({ date, day, selected = false }: Props) => {
  const cls = selected
    ? "p-6 w-[192px] lg:w-full bg-neutral-pure100 relative gap-[6px]"
    : "p-6 w-[192px] lg:w-full bg-neutral-pure100 relative gap-[6px] opacity-[0.8]";
  return (
    <Flex direction="col" className={cls}>
      <p className="text-secondary-pure text-[20px] font-[600]">{date}</p>
      <p className="text-neutral-pure600 font-[500]">{day}</p>
      {selected && (
        <div className="divider p-0 m-0 h-[3px] w-[80%] absolute bottom-0 bg-secondary-pure" />
      )}
    </Flex>
  );
};
