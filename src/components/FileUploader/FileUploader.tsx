import Papa from "papaparse";
import type { FileUploaderProps, Movies } from "./FileUploader.types";
import { searchMovies } from "../../services/tmdb";

export default function FileUploader({
  setData,
  data,
  setResults,
}: FileUploaderProps) {
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

  const handleSearch = () => {
    searchMovies(data, setResults);
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={handleFile}
        className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:border file:border-black file:bg-white file:text-black file:text-sm file:font-medium hover:file:bg-black hover:file:text-white file:transition-colors file:duration-200 file:cursor-pointer"
      />
      <button
        onClick={handleSearch}
        className="bg-white text-black border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
      >
        Search
      </button>
    </div>
  );
}
