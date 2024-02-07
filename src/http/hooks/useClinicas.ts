import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { Location } from "../../utils/types";
import { getClinicas } from "../queries/clinicas/getClinicas";

export function useClinicas({
  params,
  options,
}: {
  params?: { [key: string]: any };
  options?: UseQueryOptions<Location[], unknown, Location[], string[]>;
}): UseQueryResult<Location[]> {
  return useQuery(["clinicas"], async () => getClinicas({ params }), options);
}
