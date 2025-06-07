
import React from 'react';
import { Clock, Share } from 'lucide-react';
import { NewsArticle } from '../services/newsService';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ArticleCardProps {
  article: NewsArticle;
  variant?: 'default' | 'featured' | 'compact';
  onClick?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  variant = 'default',
  onClick 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: article.link,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${article.title} - ${article.link}`);
    }
  };

  if (variant === 'featured') {
    return (
      <Card 
        className="article-card cursor-pointer overflow-hidden h-full"
        onClick={onClick}
      >
        <div className="relative h-64 md:h-80">
          <img
            src={article.imageUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <Badge variant="secondary" className="mb-2">
              {article.category}
            </Badge>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-2 line-clamp-2">
              {article.title}
            </h2>
            <p className="text-sm opacity-90 line-clamp-2">
              {article.description}
            </p>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Card 
        className="article-card cursor-pointer overflow-hidden"
        onClick={onClick}
      >
        <CardContent className="p-4">
          <div className="flex space-x-4">
            <img
              src={article.imageUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=150&fit=crop"}
              alt={article.title}
              className="w-20 h-16 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <Badge variant="outline" className="text-xs mb-1">
                {article.category}
              </Badge>
              <h3 className="font-medium line-clamp-2 text-sm mb-1">
                {article.title}
              </h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3 h-3 mr-1" />
                {formatDate(article.pubDate)}
                <span className="mx-2">•</span>
                <span>{article.source}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className="article-card cursor-pointer overflow-hidden h-full"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={article.imageUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 left-3">
          {article.category}
        </Badge>
      </div>
      <CardHeader className="pb-3">
        <h3 className="font-display font-semibold text-lg line-clamp-2 mb-2">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {article.description}
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span>{formatDate(article.pubDate)}</span>
            <span className="mx-2">•</span>
            <span>{article.source}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="p-2"
          >
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
