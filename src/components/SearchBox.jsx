export function SearchBox({ value, onChange, placeholder = "Search…" }) {
  return (
    <div className="searchbox" role="search">
      <svg
        className="searchicon"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M10.5 3.75a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5Zm8.69 14.19 3.1 3.1"
          stroke="#111827"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <input
        className="input"
        type="search"
        placeholder={placeholder}
        value={value}
        aria-label="Search articles"
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <button
          className="clearbtn"
          aria-label="Clear search"
          onClick={() => onChange("")}
        >
          ✕
        </button>
      )}
    </div>
  );
}
