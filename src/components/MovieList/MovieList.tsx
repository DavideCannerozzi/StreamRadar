import React from "react";
import type { Result } from "../FileUploader/FileUploader.types";

interface MovieListProps {
  results: Result[];
}

export default function MovieList({ results }: MovieListProps) {
  return (
    <div>
      {results.map((result, i) => (
        <React.Fragment key={i}>
          <li>{result.title}</li>
          {result.platforms.map((platform) => (
            <li key={platform.provider_id}>{platform.provider_name}</li>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
