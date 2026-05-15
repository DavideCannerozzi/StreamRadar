export interface Movies {
  Const: number;
  Title: string;
  Year: number;
  TitleType: string;
  ReleaseDate: number;
}

export interface FileUploaderProps {
  data: Movies[];
  setData: (data: Movies[]) => void;
  setResults: (data: Result[]) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface Platform {
  provider_name: string;
  logo_path: string;
  provider_id: number;
  display_priority: number;
}

export interface Result {
  Const: number;
  title: string;
  platforms: Platform[];
  releaseDate: string;
}
