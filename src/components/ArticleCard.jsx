import { Highlight } from "./Highlight";

export function ArticleCard({ article, query }) {
  return (
    <article className="card">
      <h2 className="title">
        <Highlight text={article.title} query={query} />
      </h2>
      <div className="date">{article.date}</div>
      <p className="excerpt">
        <Highlight text={article.body} query={query} />
      </p>
    </article>
  );
}
