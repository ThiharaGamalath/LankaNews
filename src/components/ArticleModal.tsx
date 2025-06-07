
import React from 'react';
import { X, Clock, Share, Bell } from 'lucide-react';
import { NewsArticle } from '../services/newsService';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ArticleModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  if (!article) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: article.link,
      });
    } else {
      navigator.clipboard.writeText(`${article.title} - ${article.link}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <img
              src={article.imageUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop"}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Badge className="absolute top-4 left-4">
              {article.category}
            </Badge>
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-96 overflow-y-auto">
            <DialogHeader className="space-y-4">
              <DialogTitle className="text-2xl md:text-3xl font-display font-bold leading-tight">
                {article.title}
              </DialogTitle>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDate(article.pubDate)}
                </div>
                <div className="flex items-center">
                  <Bell className="w-4 h-4 mr-1" />
                  {article.source}
                </div>
                {article.author && (
                  <div>
                    By {article.author}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {article.description}
              </p>
            </DialogHeader>

            {/* Article Content */}
            <div className="mt-6 prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {article.content}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                >
                  <Share className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(article.link, '_blank')}
                >
                  Read Full Article
                </Button>
              </div>
              <Badge variant="outline" className="text-xs">
                Source: {article.source}
              </Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
