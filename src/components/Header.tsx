
import React, { useState } from 'react';
import { Search, Moon, Sun, Bell } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CATEGORIES } from '../services/newsService';

interface HeaderProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedCategory, onCategoryChange, onSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      {/* Breaking News Ticker */}
      <div className="bg-breaking-news text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-white text-breaking-news px-3 py-1 rounded-full text-sm font-semibold mr-4 flex items-center">
              <Bell className="w-3 h-3 mr-1" />
              BREAKING
            </span>
            <div className="breaking-news-ticker whitespace-nowrap">
              Sri Lanka signs new trade agreement • Tourism increases by 45% • Tech hub creates 2000 jobs • Monsoon brings agricultural relief
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-news-primary">
              Lanka<span className="text-news-accent">News</span>
            </h1>
            <div className="hidden md:block text-sm text-muted-foreground">
              Real-time Sri Lankan News
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64"
                    autoFocus
                  />
                  <Button type="submit" size="sm">Search</Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    Cancel
                  </Button>
                </form>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>

            {/* Mobile Search */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4">
            <form onSubmit={handleSearch} className="flex space-x-2">
              <Input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm">Search</Button>
            </form>
          </div>
        )}
      </div>

      {/* Categories Navigation */}
      <nav className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 overflow-x-auto py-3">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
