import React, { useEffect, useState } from "react";
import { Flex } from "../../components/Flex/Flex";
import { Map } from "../../components/GoogleMap/GoogleMap";
import { useRouter } from "next/router";
import { useClinicas } from "../../http/hooks/clinicas/useClinicas";
import { Location } from "../../utils/types";
import { BuscarClinicasItems } from "./BuscarClinicasItems";

export const BuscarClinicas = (): JSX.Element => {
  const [debounced, setDebounced] = useState<string>("");

  const handleDebounced = (value: string) => {
    setDebounced(value);
  };

  const { data, isLoading, refetch } = useClinicas({
    params: {
      query: debounced === "" ? undefined : debounced,
    },
    options: {
      refetchOnWindowFocus: false,
    },
  });

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const router = useRouter();

  const handleSelectedLocation = (location: Location | null) => {
    setSelectedLocation(location);
    router.push("#mapa");
  };

  useEffect(() => {
    refetch();
  }, [debounced, refetch]);

  return (
    <Flex className="w-full flex-col lg:flex-row gap-8 lg:pb-[100px]">
      <BuscarClinicasItems
        data={data}
        isLoading={isLoading}
        handleDebounced={handleDebounced}
        handleSelectedLocation={handleSelectedLocation}
      />
      <Flex className="lg:w-[50%] w-full lg:h-[975px] h-[446px]" id="mapa">
        <Map
          style={{
            width: "100%",
            height: "100%",
          }}
          selectedLocation={selectedLocation}
          handleSelectedLocation={handleSelectedLocation}
          locations={data || []}
        />
      </Flex>
    </Flex>
  );
};
