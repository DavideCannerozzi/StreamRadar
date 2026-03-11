export interface Movies {
  Const: number;
  Title: string;
  Year: number;
  TitleType: string;
  ReleaseData: number;
}

export interface FileUploaderProps {
  data: Movies[];
  setData: (data: Movies[]) => void;
  setResults: (data: Result[]) => void;
}

export interface Platform {
  provider_name: string;
  logo_path: string;
  provider_id: number;
  display_priority: number;
}

export interface Result {
  title: string;
  platforms: Platform[];
  releaseDate: string;
}
