import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { BlogPost } from "../../../utils/types";
import { getPosts } from "../../queries/posts/getPosts";

export function usePosts({
  params,
  options,
}: {
  params?: { [key: string]: any };
  options?: UseQueryOptions<BlogPost[], unknown, BlogPost[], string[]>;
}): UseQueryResult<BlogPost[]> {
  return useQuery(["posts gerais"], async () => getPosts({ params }), options);
}
