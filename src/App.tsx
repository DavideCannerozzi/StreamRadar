import { useState } from "react";
import FileUploader from "./components/FileUploader/FileUploader";
import MovieList from "./components/MovieList/MovieList";
import type { Movies } from "./components/FileUploader/FileUploader.types";

function App() {
  const [data, setData] = useState<Movies[]>([]);
  const [results, setResults] = useState();
  return (
    <>
      <h1>Stream Radar</h1>
      <FileUploader setData={setData} />
      <MovieList />
    </>
  );
}

export default App;
