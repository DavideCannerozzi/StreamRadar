export interface Movies {
  Const: number;
  Title: string;
  Year: number;
  TitleType: string;
  ReleaseData: number;
}

export interface FileUploaderProps {
  setData: (data: Movies[]) => void;
}
