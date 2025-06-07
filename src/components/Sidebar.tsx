
import React from 'react';
import { Clock, Bell } from 'lucide-react';
import { NewsArticle } from '../services/newsService';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import ArticleCard from './ArticleCard';

interface SidebarProps {
  trendingNews: NewsArticle[];
  onArticleClick: (article: NewsArticle) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ trendingNews, onArticleClick }) => {
  return (
    <aside className="space-y-6">
      {/* Trending News */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-news-primary">
            <Bell className="w-5 h-5 mr-2" />
            Trending Now
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trendingNews.slice(0, 5).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="compact"
              onClick={() => onArticleClick(article)}
            />
          ))}
        </CardContent>
      </Card>

      {/* News Sources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-news-primary">News Sources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <a 
              href="https://www.dailymirror.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="font-medium">Daily Mirror</div>
              <div className="text-sm text-muted-foreground">dailymirror.lk</div>
            </a>
            <a 
              href="https://www.adaderana.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="font-medium">Ada Derana</div>
              <div className="text-sm text-muted-foreground">adaderana.lk</div>
            </a>
            <a 
              href="https://english.newsfirst.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="font-medium">News First</div>
              <div className="text-sm text-muted-foreground">newsfirst.lk</div>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Live Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-news-primary">
            <Clock className="w-5 h-5 mr-2" />
            Live Updates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-breaking-news rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="text-sm font-medium">Last updated: {new Date().toLocaleTimeString()}</div>
                <div className="text-xs text-muted-foreground">Auto-refresh every 5 minutes</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
