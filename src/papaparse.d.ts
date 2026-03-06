declare module "papaparse" {
  export interface ParseResult<T> {
    data: T[];
  }
  export function parse<T>(
    file: File,
    config?: {
      header?: boolean;
      skipEmptyLines?: boolean;
      complete?: (results: ParseResult<T>) => void;
    },
  ): void;
}
