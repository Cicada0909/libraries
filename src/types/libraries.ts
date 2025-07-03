export interface LibraryListItemInterface {
  name: string;
  latest: string;
  filename: string;
  description: string;
  version: string;
  keywords: string[];
  alternativeNames: string[];
  fileType: string;
  github: GitHubInterface;
  objectID: string;
  license: string;
  homepage: string;
  repository: RepositoryInterface;
  author: string;
  originalName: string;
  sri: string;
}

export interface GitHubInterface {
  user: string;
  repo: string;
  stargazers_count: number;
  forks: number;
  subscribers_count: number;
}

export interface RepositoryInterface {
  type: string;
  url: string;
}

export interface LibraryListPaginatedInterface {
  results: LibraryListItemInterface[];
  available: number;
  total: number;
}
