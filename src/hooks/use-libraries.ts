import { useQuery } from "@tanstack/react-query";
import { LIBRARIES_API } from "../constants/api.ts";
import type { LibraryListPaginatedInterface } from "../types/libraries.ts";

const useLibraries = () => {
  const { isPending, error, data } = useQuery<LibraryListPaginatedInterface>({
    queryKey: ["libraries"],
    queryFn: () => fetch(LIBRARIES_API).then((res) => res.json()),
  });

  return {
    isPending,
    error,
    data,
  };
};

export default useLibraries;
