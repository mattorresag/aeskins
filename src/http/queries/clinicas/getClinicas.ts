import { Location } from "../../../utils/types";
import { api } from "../../axios/auth";

export const getClinicas = async ({
  params,
}: {
  params?: { [key: string]: any };
}): Promise<Location[]> => {
  const response = await api.get<Location[]>(`/clinica/`, {
    params,
  });

  return response.data;
};
