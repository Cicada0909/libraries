import { useQuery } from "@tanstack/react-query";
import { LIBRARIES_API } from "../constants/api.ts";
import type { LibraryListPaginatedInterface } from "../types/libraries.ts";
import { useState } from "react";

interface Props {
  rowsPerPage: number;
}

const useLibraries = ({ rowsPerPage }: Props) => {
  const [limit, setLimit] = useState(rowsPerPage);
  const [search, setSearch] = useState("");
  const [searchFields, setSearchFields] = useState<string[]>([]);

  const fields =
    "filename,description,version,keywords,alternativeNames,fileType,github,objectID,license,homepage,repository,author,originalName,sri";

  const queryParams = [
    `limit=${limit}`,
    `fields=${fields}`,
    `search=${encodeURIComponent(search)}`,
    search.trim() && searchFields.length
      ? `search_fields=${encodeURIComponent(searchFields.join(","))}`
      : "",
  ]
    .filter(Boolean)
    .join("&");

  const { error, data, isFetching, isLoading } =
    useQuery<LibraryListPaginatedInterface>({
      queryKey: ["libraries", limit, search, searchFields],
      queryFn: () =>
        fetch(`${LIBRARIES_API}?${queryParams}`).then((res) => res.json()),
      placeholderData: (prev) => prev,
    });

  console.log(limit);
  console.log(search);

  const isSearchLoading = search ? isFetching : isLoading;

  const getMoreData = () => setLimit((prev) => prev + rowsPerPage);

  return {
    isLoading: isSearchLoading,
    error,
    data,
    getMoreData,
    setSearch,
    search,
    setSearchFields,
    searchFields,
  };
};

export default useLibraries;
