
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NewsService, NewsArticle } from '../services/newsService';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';
import Sidebar from '../components/Sidebar';
import ArticleModal from '../components/ArticleModal';
import { Button } from '../components/ui/button';
import { Bell } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch news data
  const { data: news = [], isLoading, refetch } = useQuery({
    queryKey: ['news', selectedCategory, searchQuery],
    queryFn: async () => {
      if (searchQuery) {
        return NewsService.searchNews(searchQuery);
      }
      return NewsService.getNews(selectedCategory);
    },
  });

  // Fetch trending news for sidebar
  const { data: trendingNews = [] } = useQuery({
    queryKey: ['trending-news'],
    queryFn: () => NewsService.getLatestNews(),
  });

  const handleArticleClick = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('All');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleRefresh = () => {
    refetch();
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearch={handleSearch}
        />

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                    {searchQuery ? `Search results for "${searchQuery}"` : 
                     selectedCategory === 'All' ? 'Latest News' : `${selectedCategory} News`}
                  </h1>
                  <p className="text-muted-foreground">
                    {news.length} articles • Last updated: {new Date().toLocaleTimeString()}
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={handleRefresh}
                  disabled={isLoading}
                  className="flex items-center space-x-2"
                >
                  <Bell className="w-4 h-4" />
                  <span>Refresh</span>
                </Button>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <span className="ml-3 text-muted-foreground">Loading news...</span>
                </div>
              ) : (
                <NewsGrid
                  articles={news}
                  onArticleClick={handleArticleClick}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <Sidebar
                trendingNews={trendingNews}
                onArticleClick={handleArticleClick}
              />
            </div>
          </div>
        </main>

        {/* Article Modal */}
        <ArticleModal
          article={selectedArticle}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/* Footer */}
        <footer className="bg-card border-t border-border mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-display font-bold text-xl text-news-primary mb-4">
                  Lanka<span className="text-news-accent">News</span>
                </h3>
                <p className="text-muted-foreground">
                  Your trusted source for real-time Sri Lankan news and updates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">News Sources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://www.dailymirror.lk" className="hover:text-foreground">Daily Mirror</a></li>
                  <li><a href="https://www.adaderana.lk" className="hover:text-foreground">Ada Derana</a></li>
                  <li><a href="https://english.newsfirst.lk" className="hover:text-foreground">News First</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><button onClick={() => handleCategoryChange('Politics')} className="hover:text-foreground">Politics</button></li>
                  <li><button onClick={() => handleCategoryChange('Business')} className="hover:text-foreground">Business</button></li>
                  <li><button onClick={() => handleCategoryChange('Sports')} className="hover:text-foreground">Sports</button></li>
                  <li><button onClick={() => handleCategoryChange('Technology')} className="hover:text-foreground">Technology</button></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 LankaNews. All rights reserved. Real-time Sri Lankan news aggregator.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
