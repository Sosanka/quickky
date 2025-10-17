import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm w-96">
        <Search size={16} className="text-gray-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch?.(q)}
          placeholder="Search services (photographer, plumber, makeup...)"
          className="ml-2 w-full outline-none text-sm"
        />
        <button
          onClick={() => onSearch?.(q)}
          className="ml-3 px-3 py-1 rounded-full bg-brand-500 text-white text-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
}
