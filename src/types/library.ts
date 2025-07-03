export interface LibraryInterface {
  name: string;
  latest: string;
  sri: string;
  authors: Array<{
    name: string;
  }>;
  autoupdate: {
    source: string;
    target: string;
    fileMap: Array<{
      basePath: string;
      files: string[];
    }>;
    ignoreVersions: string[];
  };
  description: string;
  filename: string;
  homepage: string;
  keywords: string[];
  license: string;
  repository: {
    type: string;
    url: string;
  };
  version: string;
  author: string;
  assets: Array<{
    version: string;
    files: string[];
    rawFiles: string[];
    sri: {
      [key: string]: string;
    };
  }>;
  versions: string[];
}
