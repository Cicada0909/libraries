import { useQuery } from "@tanstack/react-query";
import { LIBRARIES_API } from "../constants/api.ts";
import type { LibraryListPaginatedInterface } from "../types/libraries.ts";
import { useState } from "react";

interface Props {
  rowsPerPage: number;
}

const useLibraries = ({ rowsPerPage }: Props) => {
  const [limit, setLimit] = useState(rowsPerPage);

  const fields =
    "filename, description, version, keywords, alternativeNames, fileType, github, objectID, license, homepage, repository, author, originalName, sri";

  const { error, data, isLoading } = useQuery<LibraryListPaginatedInterface>({
    queryKey: ["libraries", limit],
    queryFn: () =>
      fetch(`${LIBRARIES_API}?limit=${limit}&fields=${fields}`).then((res) =>
        res.json(),
      ),
    placeholderData: (prev) => prev,
  });

  const getMoreData = () => setLimit((prev) => prev + rowsPerPage);

  return {
    isLoading,
    error,
    data,
    getMoreData,
  };
};

export default useLibraries;
