import { useState } from "react";
import FileUploader from "./components/FileUploader/FileUploader";
import MovieList from "./components/MovieList/MovieList";
import type {
  Result,
  Movies,
} from "./components/FileUploader/FileUploader.types";

function App() {
  const [data, setData] = useState<Movies[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="container mx-auto border min-h-screen flex flex-col items-center gap-24">
      <h1 className="text-4xl font-bold tracking-tight mt-12">Stream Radar</h1>
      <FileUploader
        setData={setData}
        data={data}
        setResults={setResults}
        loading={loading}
        setLoading={setLoading}
      />
      <MovieList results={results} />
    </div>
  );
}

export default App;
