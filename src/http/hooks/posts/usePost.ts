import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { BlogPost } from "../../../utils/types";
import { getPost } from "../../queries/posts/getPost";

export function usePost({
  postId,
  params,
  options,
}: {
  postId: string;
  params?: { [key: string]: any };
  options?: UseQueryOptions<BlogPost, unknown, BlogPost, string[]>;
}): UseQueryResult<BlogPost> {
  return useQuery(
    ["posts", postId],
    async () => getPost({ params, postId }),
    options
  );
}
