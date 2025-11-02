import React from "react";

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex gap-3 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={`px-4 py-1 rounded-full text-sm ${
          active === null ? "bg-brand-500 text-white" : "bg-white border"
        }`}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-4 py-1 rounded-full text-sm ${
            active === c ? "bg-brand-500 text-white" : "bg-white border"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
