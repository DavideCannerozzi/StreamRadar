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
  const [error, setError] = useState<string | null>(null);
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center gap-24">
      <h1 className="text-4xl font-bold tracking-tight mt-12">Stream Radar</h1>
      <FileUploader
        setData={setData}
        data={data}
        setResults={setResults}
        loading={loading}
        setLoading={setLoading}
        setError={setError}
        setCounter={setCounter}
      />
      <MovieList
        results={results}
        error={error}
        loading={loading}
        counter={counter}
        totalMovies={data.length}
      />
    </div>
  );
}

export default App;
