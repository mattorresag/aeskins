import React from "react";
import { Flex } from "../Flex/Flex";
import Image from "next/image";
import Icons from "../../../public/assets/icons";
import { Location } from "../../utils/types";
interface Props {
  location: Location;
  handleSelectedLocation: (location: Location | null) => void;
}
export const ClinicaCard = ({
  location,
  handleSelectedLocation,
}: Props): JSX.Element => {
  const imageUrl = location.image?.replace(
    "http://localhost:8000",
    "https://hml.aeskins.com"
  );

  const checkIfOpenBasedOnDay = (days: string) => {
    const currentDay = new Date().getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
    const daysMapping = {
      Dom: 0,
      Seg: 1,
      Ter: 2,
      Qua: 3,
      Qui: 4,
      Sex: 5,
      Sab: 6,
    };
    const [startDay, endDay] = days
      .split("-")
      .map((day) => daysMapping[day.trim() as keyof typeof daysMapping]);

    // Check if current day is within the range
    if (startDay <= endDay) {
      // Range does not cross the week boundary (e.g., Seg-Sex)
      return currentDay >= startDay && currentDay <= endDay;
    } else {
      // Range crosses the week boundary (e.g., Sab-Ter), handle accordingly
      return currentDay >= startDay || currentDay <= endDay;
    }
  };

  // Usage
  const isOpenToday = checkIfOpenBasedOnDay(location.days);

  const isOpen =
    new Date().getHours() >= parseInt(location.start_time.split(":")[0]) &&
    new Date().getHours() < parseInt(location.end_time.split(":")[0]) &&
    isOpenToday;
  const statusStyle = `${isOpen ? "bg-status-open" : "bg-status-closed"
    } py-2 px-3 text-[12px] font-[600] uppercase rounded-3xl h-6 items-center justify-center`;
  return (
    <Flex
      className=" w-full rounded-md border-[1px] border-black/10 active:border-secondary-pure hover:border-secondary-pure"
      direction="col"
    >
      <Flex className="p-4 gap-4 lg:justify-between">
        <Flex className="flex-col lg:flex-row gap-4 lg:items-center w-full">
          <Flex className="w-20 h-20">
            <Image
              alt={`${location.name} logo`}
              src={imageUrl || "/assets/produtoPlaceholder.png"}
              width={80}
              height={80}
              objectFit="cover"
            />
          </Flex>
          <Flex direction="col" className="gap-1">
            <p className="text-[20px] font-[400] leading-[30px] text-secondary-pure">
              {location.name}
            </p>
            <Flex className="gap-2" align="center">
              <Flex className="w-fit">
                <Icons.MapPin className="w-[18px] h-[18px]" />
              </Flex>
              <p className="text-[14px] font-[400] leading-[21px] text-neutral-pure400">
                {location.address}
              </p>
            </Flex>
          </Flex>
        </Flex>
        <Flex className={statusStyle}>
          <p>{isOpen ? "Aberto" : "Fechado"}</p>
        </Flex>
      </Flex>
      <div className="divider h-0 m-0" />
      <Flex
        className="p-4 cursor-pointer"
        justify="between"
        onClick={() => handleSelectedLocation(location)}
        align="center"
      >
        <Flex className="gap-2" align="center">
          <Icons.Map className="w-6 h-6" />
          <p className="text-[12px] font-[600] text-secondary-pure uppercase">
            VISUALIZAR NO MAPA
          </p>
        </Flex>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
        >
          <path
            d="M10 4.00012L0.833334 4.00012"
            stroke="#29223E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.62667 0.626709L10 4.00004L6.62667 7.37338"
            stroke="#29223E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Flex>
    </Flex>
  );
};
