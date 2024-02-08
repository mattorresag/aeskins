import { BlogPost } from "../../../utils/types";
import { api } from "../../axios/auth";

export const getPost = async ({
  postId,
  params,
}: {
  postId: string;
  params?: { [key: string]: any };
}): Promise<BlogPost> => {
  const response = await api.get<BlogPost>(`/blogposts/${postId}/`, {
    params,
  });

  return response.data;
};
