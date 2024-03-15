import React, { useState } from "react";
import { BuscaVazia } from "./BuscaVazia";
import { ClinicaCard } from "../../components/Cards/ClinicaCard";
import { Location } from "../../utils/types";
import { useDebounce } from "react-use";
import { Flex } from "../../components/Flex/Flex";
import { BuscarClinicasInput } from "./BuscarClinicasInput";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import { AutoSizer, List, CellMeasurer, CellMeasurerCache, ListRowProps } from 'react-virtualized';

interface Props {
  handleDebounced: (value: string) => void;
  handleSelectedLocation: (location: Location | null) => void;
  data?: Location[];
  isLoading?: boolean;
}
export const BuscarClinicasItems = ({
  data,
  isLoading,
  handleSelectedLocation,
  handleDebounced,
}: Props): JSX.Element => {
  const [userSearch, setUserSearch] = useState<string | undefined>();
  const isEmpty = !data || data?.length === 0;

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100, // Provide a default height
  });

  const handleUserSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearch(e.target.value);
  };

  useDebounce(
    () => {
      handleDebounced(userSearch || "");
    },
    300,
    [userSearch]
  );

  const rowRenderer = ({ index, key, style, parent }: ListRowProps) => {
    const itemStyle = { ...style, paddingBottom: index === (data?.length || 0) - 1 ? 0 : 16 };
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}>
        <div style={itemStyle}>
          {data && (
            <ClinicaCard
              location={data[index]}
              key={data?.[index].name}
              handleSelectedLocation={handleSelectedLocation}
            />)}
        </div>
      </CellMeasurer>
    );
  };

  return (
    <Flex className="justify-center lg:justify-start   w-full lg:w-[50%] py-10 xl:pl-[160px] px-[5%] lg:pr-0">
      <Flex
        direction="col"
        style={{
          gap: isEmpty ? "16px" : "24px",
        }}
        className="w-full"
      >
        <Flex direction="col" className="gap-6">
          <Flex direction="col" className="gap-2">
            <h1 className="text-[24px] text-secondary-pure font-[600] leading-[36px] uppercase font-[600]">
              ENCONTRE UMA CLÍNICA{" "}
              <span className="font-[300]">PERTINHO DE VOCÊ </span>
            </h1>
            <p className="text-neutral-pure400 leading-[24px]">
              Pesquise uma clínica mais perto da localização que você deseja.
            </p>
          </Flex>
          <BuscarClinicasInput handleUserSearch={handleUserSearch} />
        </Flex>
        <div className="divider h-0 m-0" />
        <Flex className="h-[732px] h-full">
          {isLoading ? (
            <Flex className="justify-center overflow-hidden min-h-[100px]">
              <CircularProgress />
            </Flex>
          ) : isEmpty ? (
            <BuscaVazia />
          ) : (
            <AutoSizer>
              {({ height, width }) => (
                <List
                  width={width}
                  height={height}
                  deferredMeasurementCache={cache}
                  rowCount={data.length}
                  rowHeight={cache.rowHeight}
                  rowRenderer={rowRenderer}
                />
              )}
            </AutoSizer>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
