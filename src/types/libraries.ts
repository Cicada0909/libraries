export interface LibraryListItemInterface {
  name: string;
  latest: string;
}

export interface LibraryListPaginatedInterface {
  results: LibraryListItemInterface[];
  available: number;
  total: number;
}
