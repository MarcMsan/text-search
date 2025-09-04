import { useMemo, useState } from "react";
import { ARTICLES } from "./data/articles";
import { SearchBox } from "./components/SearchBox";
import { ArticleCard } from "./components/ArticleCard";

export default function App() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return ARTICLES;
    const rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    return ARTICLES.filter((a) => rx.test(a.title) || rx.test(a.body));
  }, [query]);

  return (
    <div className="container">
      <h1>Search</h1>

      <div className="grid">
        <div>
          <SearchBox
            value={query}
            onChange={setQuery}
            placeholder="Search..."
          />

          <div className="meta" aria-live="polite">
            {results.length} posts were found.
          </div>

          {results.length === 0 ? (
            <div className="empty">No matches. Try a different keyword.</div>
          ) : (
            <div className="list">
              {results.map((a) => (
                <ArticleCard key={a.id} article={a} query={query} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
