import React from 'react';
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const search = async () => {
    if (!query.trim()) return;

    try {
      setIsLoading(true);
      setHasSearched(true);
      const res = await fetch(`http://localhost:5000/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setResults([]);
      } else {
        setError("");
        setResults(data);
      }
    } catch (err) {
      setError("Failed to connect to backend.");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset hasSearched when query changes
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    if (hasSearched) {
      setHasSearched(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">🔍 BharatSearch</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border border-gray-300 rounded px-4 py-2 w-full"
          type="text"
          placeholder="Search something..."
          value={query}
          onChange={handleQueryChange}
          onKeyDown={e => e.key === 'Enter' && search()}
          aria-label="Search query"
        />
        <button
          onClick={search}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="text-red-600 mb-4" role="alert">{error}</p>}

      {isLoading && (
        <div className="text-center py-4" role="status">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em]" aria-hidden="true"></div>
          <span className="ml-2 text-gray-700">Searching...</span>
        </div>
      )}

      {hasSearched && !isLoading && results.length === 0 && !error && (
        <div className="text-center py-8 border rounded bg-gray-50" role="status">
          <p className="text-gray-600 text-lg">No documents matched your query.</p>
          <p className="text-gray-500 text-sm mt-2">Please try different keywords or check your spelling.</p>
        </div>
      )}

      {results.length > 0 && (
        <ul className="space-y-4" aria-label="Search results">
          {results.map((r, idx) => (
            <li key={idx} className="border-b pb-2">
              <h3 className="font-semibold text-lg">{r.filename}</h3>
              <p className="text-gray-600">{r.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
