import { BlogPost } from "../../../utils/types";
import { api } from "../../axios/auth";

export const getPosts = async ({
  params,
}: {
  params?: { [key: string]: any };
}): Promise<BlogPost[]> => {
  const response = await api.get<BlogPost[]>(`/blogposts/`, {
    params,
  });

  return response.data;
};
