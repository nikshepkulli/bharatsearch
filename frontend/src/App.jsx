import React from 'react';
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const search = async () => {
    if (!query.trim()) return;

    try {
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
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && search()}
        />
        <button
          onClick={search}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {hasSearched && results.length === 0 && !error && (
        <div className="text-center py-8 border rounded bg-gray-50">
          <p className="text-gray-600 text-lg">No documents matched your query.</p>
          <p className="text-gray-500 text-sm mt-2">Try different keywords or check your spelling.</p>
        </div>
      )}

      {results.length > 0 && (
        <ul className="space-y-4">
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
