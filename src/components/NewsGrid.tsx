
import React from 'react';
import { NewsArticle } from '../services/newsService';
import ArticleCard from './ArticleCard';

interface NewsGridProps {
  articles: NewsArticle[];
  onArticleClick: (article: NewsArticle) => void;
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles, onArticleClick }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground mb-2">
          No articles found
        </h3>
        <p className="text-sm text-muted-foreground">
          Try adjusting your search or selecting a different category.
        </p>
      </div>
    );
  }

  const featuredArticles = articles.slice(0, 3);
  const regularArticles = articles.slice(3);

  return (
    <div className="space-y-8">
      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-display font-semibold mb-6 text-news-primary">
            Featured Stories
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="featured"
                onClick={() => onArticleClick(article)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Regular Articles */}
      {regularArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-display font-semibold mb-6 text-news-primary">
            Latest News
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {regularArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="default"
                onClick={() => onArticleClick(article)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsGrid;
