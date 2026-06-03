import type { Result } from "../FileUploader/FileUploader.types";

export interface MovieListProps {
  results: Result[];
  error: string | null;
  loading: boolean;
  counter: number;
  totalMovies: number;
  value: string;
}
