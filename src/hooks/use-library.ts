import { useQuery } from "@tanstack/react-query";
import type { LibraryInterface } from "../types/library.ts";
import { LIBRARIES_API } from "../constants/api.ts";

interface Props {
  name?: string;
}

const useLibrary = ({ name }: Props) => {
  const { error, data, isLoading } = useQuery<LibraryInterface>({
    queryKey: ["library", name],
    queryFn: () => fetch(`${LIBRARIES_API}/${name}`).then((res) => res.json()),
    placeholderData: (prev) => prev,
  });

  return { error, data, isLoading };
};

export default useLibrary;
