import Papa from "papaparse";
import type { FileUploaderProps, Movies } from "./FileUploader.types";

export default function FileUploader({ setData }: FileUploaderProps) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    Papa.parse<Movies>(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return (
    <div>
      <input type="file" name="file" accept=".csv" onChange={handleFile} />
    </div>
  );
}
