
export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  link: string;
  pubDate: string;
  author?: string;
  category: string;
  imageUrl?: string;
  source: string;
}

export interface NewsSource {
  name: string;
  url: string;
  category: string;
}

// Sri Lankan news sources including Sinhala sources
export const NEWS_SOURCES: NewsSource[] = [
  {
    name: "Daily Mirror",
    url: "https://www.dailymirror.lk/rss",
    category: "general"
  },
  {
    name: "Ada Derana",
    url: "https://www.adaderana.lk/rss.php",
    category: "general"
  },
  {
    name: "News First",
    url: "https://english.newsfirst.lk/feed",
    category: "general"
  },
  {
    name: "Hiru News",
    url: "https://www.hirunews.lk/rss.php",
    category: "sinhala"
  },
  {
    name: "Lankadeepa",
    url: "https://www.lankadeepa.lk/rss",
    category: "sinhala"
  },
  {
    name: "Dinamina",
    url: "https://www.dinamina.lk/rss",
    category: "sinhala"
  }
];

// Expanded mock data with more articles including Sinhala content
export const MOCK_NEWS_DATA: NewsArticle[] = [
  {
    id: "1",
    title: "Sri Lanka Economy Shows Signs of Recovery as Tourist Arrivals Increase",
    description: "The Central Bank reports positive indicators as tourism sector rebounds with increased international arrivals.",
    content: "Sri Lanka's economy is showing promising signs of recovery with a significant increase in tourist arrivals over the past quarter. The Central Bank of Sri Lanka released data indicating a 45% growth in international visitors compared to the same period last year. Tourism Minister highlighted the government's efforts to promote the country as a safe and attractive destination for international travelers. The recovery is attributed to improved infrastructure, enhanced safety measures, and competitive pricing in the hospitality sector.",
    link: "https://example.com/news/1",
    pubDate: new Date().toISOString(),
    author: "Economic Reporter",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    source: "Daily Mirror"
  },
  {
    id: "2",
    title: "New Technology Hub Opens in Colombo, Creating 2000 Jobs",
    description: "A major international tech company establishes its South Asian headquarters in Colombo.",
    content: "A leading international technology company has officially opened its South Asian headquarters in Colombo, promising to create over 2000 high-skilled jobs in the coming years. The facility will focus on software development, artificial intelligence, and digital innovation. The President attended the opening ceremony, emphasizing the government's commitment to transforming Sri Lanka into a regional technology hub. The company's CEO praised Sri Lanka's skilled workforce and strategic location as key factors in their decision.",
    link: "https://example.com/news/2",
    pubDate: new Date(Date.now() - 3600000).toISOString(),
    author: "Tech Correspondent",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    source: "News First"
  },
  {
    id: "3",
    title: "ජනාධිපතිවරණය සඳහා නව ඡන්ද මධ්‍යස්ථාන පිහිටුවීම",
    description: "ආසන්න ජනාධිපතිවරණය සඳහා අතිරේක ඡන්ද මධ්‍යස්ථාන පිහිටුවන බව තේරීම් කොමිසම නිවේදනය කරයි.",
    content: "ශ්‍රී ලංකා ජාතික ශිෂ්‍ය මණ්ඩලයේ කළමනාකරණය යටතේ පවතින අධ්‍යාපන ප්‍රතිසංස්කරණ වැඩසටහන නම්බුගොඩ ප්‍රදේශයේ සිසුන්ට වැඩි පහසුකම් ලබා දෙන බව අධ්‍යාපන අමාත්‍යාංශය නිවේදනය කරන ලදී. මෙම වැඩසටහන මඟින් ගම්‍රාජ්‍ය ප්‍රදේශවල සිසුන්ට තාක්ෂණික උපකරණ සහ අන්තර්ජාල පහසුකම් ලබා දීමට අපේක්ෂා කරයි. අධ්‍යාපන අමාත්‍යතුමා මෙම වැඩසටහන ජාතික අධ්‍යාපන ප්‍රතිසංස්කරණයේ වැදගත් අදියරක් ලෙස හැඳින්වීය.",
    link: "https://example.com/news/3",
    pubDate: new Date(Date.now() - 7200000).toISOString(),
    author: "ක්‍රීඩා වාර්තාකරු",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1586556710712-f5ad6c3b9f71?w=800&h=600&fit=crop",
    source: "Hiru News"
  },
  {
    id: "4",
    title: "Cricket Team Prepares for Upcoming World Cup Qualifiers",
    description: "National cricket team announces squad for crucial qualifying matches.",
    content: "The Sri Lankan cricket team has announced its squad for the upcoming World Cup qualifying tournament. The selection committee, led by former captain Mahela Jayawardene, has included several young talents alongside experienced players. Head coach expressed confidence in the team's preparation and highlighted the rigorous training program undertaken over the past months. The qualifying matches will be crucial for Sri Lanka's participation in the next Cricket World Cup.",
    link: "https://example.com/news/4",
    pubDate: new Date(Date.now() - 10800000).toISOString(),
    author: "Sports Desk",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    source: "Daily Mirror"
  },
  {
    id: "5",
    title: "කොළඹ වරාය සංවර්ධන ව්‍යාපෘතිය නව අදියරකට",
    description: "පූර්ව කොන්ටේනර් පර්යන්තය ව්‍යාපෘතිය අවසන් අදියරට පිවිසෙන බව වරාය අධිකාරිය පවසයි.",
    content: "කොළඹ වරායේ පූර්ව කොන්ටේනර් පර්යන්තය ව්‍යාපෘතිය සාර්ථකව නව අදියරකට ළඟා වූ බව ශ්‍රී ලංකා වරාය අධිකාරිය නිවේදනය කළේය. මෙම ව්‍යාපෘතිය මඟින් ව්‍යාපාරික ගමනාගමනය 40%කින් වැඩි කිරීමට අපේක්ෂා කරන බව වරාය අධිකාරියේ සභාපති සඳහන් කළේය. නව යටිතල පහසුකම් සමඟ ශ්‍රී ලංකාව දකුණු ආසියාවේ ප්‍රධානතම රට සේවා මධ්‍යස්ථානය බවට පත් කිරීමේ ඉලක්කය සාක්ෂාත් කර ගැනීමට මෙය දායක වනු ඇත.",
    link: "https://example.com/news/5",
    pubDate: new Date(Date.now() - 14400000).toISOString(),
    author: "ව්‍යාපාර වාර්තාකරු",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    source: "Lankadeepa"
  },
  {
    id: "6",
    title: "Breaking: New Trade Agreement Signed with Regional Partners",
    description: "Sri Lanka signs comprehensive trade deal to boost exports and economic cooperation.",
    content: "BREAKING: Sri Lanka has signed a comprehensive trade agreement with several regional partners, marking a significant milestone in the country's economic diplomacy. The agreement is expected to reduce trade barriers, increase export opportunities, and attract foreign investment. Prime Minister described the deal as a 'game-changer' for the economy, particularly benefiting the manufacturing and agricultural sectors. The agreement covers areas including textiles, tea, spices, and information technology services.",
    link: "https://example.com/news/6",
    pubDate: new Date(Date.now() - 18000000).toISOString(),
    author: "Economic Affairs",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    source: "Ada Derana"
  },
  {
    id: "7",
    title: "අධිකරණ ප්‍රතිසංස්කරණ කමිටුව නව නිර්දේශ ඉදිරිපත් කරයි",
    description: "අධිකරණ ක්ෂේත්‍රයේ නවීකරණ සඳහා කමිටුව ගෙනා නිර්දේශ ජනාධිපතිවරයාට භාර දෙයි.",
    content: "අධිකරණ ප්‍රතිසංස්කරණ කමිටුව අධිකරණ ක්ෂේත්‍රයේ ක්‍රමානුකූල නවීකරණය සඳහා සකස් කරන ලද නිර්දේශ මාලාව ජනාධිපතිවරයාට ඉදිරිපත් කරන ලදී. මෙම නිර්දේශ මඟින් නඩු විභාගයේ කාර්යක්ෂමතාවය වැඩිදියුණු කිරීම, අධිකරණ නිලධාරීන්ගේ පුහුණුව ශක්තිමත් කිරීම සහ ඩිජිටල් තාක්ෂණය භාවිතා කරමින් අධිකරණ ක්‍රියාවලිය නවීකරණය කිරීම ආදී කරුණු ඇතුළත් වේ. අධිකරණ ඇමතිතුමා මෙම නිර්දේශ ක්‍රියාත්මක කිරීම සඳහා අදියර වශයෙන් ක්‍රියාමාර්ගයක් සකස් කරන බව සඳහන් කළේය.",
    link: "https://example.com/news/7",
    pubDate: new Date(Date.now() - 21600000).toISOString(),
    author: "නීති වාර්තාකරු",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    source: "Dinamina"
  },
  {
    id: "8",
    title: "Monsoon Season Brings Relief to Agricultural Sector",
    description: "Farmers across the island report improved crop yields following favorable weather conditions.",
    content: "The arrival of the southwest monsoon has brought much-needed relief to Sri Lanka's agricultural sector, with farmers reporting significantly improved crop yields. The Department of Meteorology confirmed that rainfall levels have been optimal for rice cultivation and other staple crops. Agricultural Minister announced new support schemes for small-scale farmers, including subsidized fertilizers and improved irrigation systems. The positive weather conditions are expected to boost food security and reduce import dependency.",
    link: "https://example.com/news/8",
    pubDate: new Date(Date.now() - 25200000).toISOString(),
    author: "Agricultural Reporter",
    category: "Weather",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    source: "Ada Derana"
  },
  {
    id: "9",
    title: "කෘෂිකර්ම අංශයට නව ප්‍රතිපාදන ආධාර වැඩසටහන",
    description: "කුඩා වගාකරුවන්ට සහන ලබා දෙමින් ආහාර නිෂ්පාදනය වැඩි කිරීම අරමුණු කරගනිමින් නව ප්‍රතිපාදන ආධාර වැඩසටහනක් ආරම්භ කෙරේ.",
    content: "කෘෂිකර්ම අමාත්‍යාංශය විසින් කුඩා වගාකරුවන්ට නව ප්‍රතිපාදන ආධාර වැඩසටහනක් ප්‍රකාශයට පත් කරන ලදී. මෙම වැඩසටහන යටතේ වගාකරුවන්ට අඩු පොලී ණය පහසුකම්, නොමිලේ බීජ සහ පෙරදැඩි තාක්ෂණික උපදේශන සේවා ලබා දෙනු ඇත. විශේෂයෙන්ම යාල සහ කුරක්කන් වගාව ප්‍රවර්ධනය කිරීම මෙම වැඩසටහනේ ප්‍රධාන අරමුණ බව අමාත්‍යවරයා සඳහන් කළේය. ආහාර ආරක්ෂාව ශක්තිමත් කිරීම සහ ගෝවන ප්‍රජාවගේ ආර්ථික තත්ත්වය යහපත් කිරීම මෙම වැඩසටහනේ අරමුණු ලෙස දකුනට නම් කර ඇත.",
    link: "https://example.com/news/9",
    pubDate: new Date(Date.now() - 28800000).toISOString(),
    author: "කෘෂිකර්ම වාර්තාකරු",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    source: "Hiru News"
  },
  {
    id: "10",
    title: "Education Ministry Announces Digital Learning Initiative",
    description: "Government launches comprehensive program to modernize education system.",
    content: "The Ministry of Education has announced a landmark digital learning initiative aimed at modernizing Sri Lanka's education system. The program will provide tablets and internet connectivity to students in rural areas, ensuring equal access to educational resources. Education Minister outlined the phased implementation plan, starting with secondary schools in underserved regions. The initiative is part of the government's broader vision to prepare students for the digital economy and improve educational outcomes across the country.",
    link: "https://example.com/news/10",
    pubDate: new Date(Date.now() - 32400000).toISOString(),
    author: "Education Correspondent",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    source: "News First"
  },
  {
    id: "11",
    title: "ශ්‍රී ලංකා ක්‍රිකට් කණ්ඩායම ලෝක කුසලානය සඳහා සූදානම්",
    description: "නව ක්‍රිකට් කණ්ඩායම නාමාවලිය ප්‍රකාශයට පත් කරමින් ලෝක කුසලානය සඳහා සූදානම් කම්",
    content: "ශ්‍රී ලංකා ක්‍රිකට් කණ්ඩායම ලෝක කුසලානය සඳහා අවසන් සූදානම් කරමින් සිටින අතර නව ක්‍රිකට් කණ්ඩායම නාමාවලිය ප්‍රකාශයට පත් කරන ලදී. පරණ සහ නව ක්‍රීඩකයින්ගේ සම්මිශ්‍රණයකින් යුත් මෙම කණ්ඩායම ශක්තිමත් වේගබෝල ප්‍රහාරයක් සහ විශ්වසනීය පිතිකරණයක් ලබා දෙනු ඇත. ප්‍රධාන පුහුණුකරු සඳහන් කළේ කණ්ඩායම අවසන් සතිපතදී දැඩි පුහුණුවක් ලබන බවයි. ක්‍රිකට් ශ්‍රී ලංකාවේ සභාපති ලෝක කුසලානයේදී හොඳ ප්‍රතිඵලයක් අපේක්ෂා කරන බව ප්‍රකාශ කළේය.",
    link: "https://example.com/news/11",
    pubDate: new Date(Date.now() - 36000000).toISOString(),
    author: "ක්‍රීඩා වාර්තාකරු",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    source: "Lankadeepa"
  },
  {
    id: "12",
    title: "Healthcare Reforms Focus on Rural Access",
    description: "Ministry launches comprehensive healthcare improvement program targeting underserved communities.",
    content: "The Ministry of Health has unveiled a comprehensive healthcare reform program specifically designed to improve medical access in rural and remote areas of Sri Lanka. The initiative includes establishing new primary healthcare centers, deploying mobile medical units, and implementing telemedicine services. Health Minister emphasized that the program aims to reduce health disparities between urban and rural populations. The project will be implemented over three years with significant investment in medical equipment and training programs for healthcare workers.",
    link: "https://example.com/news/12",
    pubDate: new Date(Date.now() - 39600000).toISOString(),
    author: "Health Reporter",
    category: "Health",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    source: "Daily Mirror"
  },
  {
    id: "13",
    title: "පරිසර සුරක්ෂණ ව්‍යාපෘති දිව්‍යකය වනය සඳහා",
    description: "දිව්‍යකය වනාන්තරය සුරක්ෂිත කිරීම සහ ජීව විවිධත්වය රැකගැනීම සඳහා නව ව්‍යාපෘතියක් ආරම්භ කෙරේ.",
    content: "වන්‍යජීවී සහ වන සංරක්ෂණ අමාත්‍යාංශය දිව්‍යකය වනාන්තරයේ ජීව විවිධත්වය රැකගැනීම සඳහා මහත් වන සුරක්ෂණ ව්‍යාපෘතියක් ආරම්භ කරන ලදී. මෙම ව්‍යාපෘතිය යටතේ වන ප්‍රදේශයේ නීති විරෝධී ක්‍රියාකාරකම් නැවැත්වීම, වන්‍යජීවී සංරක්ෂණය සහ පරිසර සංචාරක ව්‍යාපෘති සංවර්ධනය කිරීම ඇතුළත් වේ. අමාත්‍යවරයා සඳහන් කළේ මෙම ව්‍යාපෘතිය ජාතික පරිසර සංරක්ෂණ ප්‍රතිපත්තියේ වැදගත් අංගයක් බවයි. ප්‍රාදේශීය ප්‍රජාව සමඟ සහයෝගයෙන් කටයුතු කරමින් තිරසාර සංවර්ධනයක් සිදු කිරීම ප්‍රධාන අරමුණයි.",
    link: "https://example.com/news/13",
    pubDate: new Date(Date.now() - 43200000).toISOString(),
    author: "පරිසර වාර්තාකරු",
    category: "Weather",
    imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    source: "Dinamina"
  },
  {
    id: "14",
    title: "Crime Rate Drops in Major Cities Following New Police Initiative",
    description: "Enhanced community policing and technology integration show positive results in urban crime reduction.",
    content: "Sri Lanka Police announced a significant reduction in crime rates across major cities following the implementation of a comprehensive new policing initiative. The program combines enhanced community policing with advanced surveillance technology and improved coordination between police units. Inspector General of Police highlighted that property crimes have decreased by 30% and violent crimes by 25% in the past six months. The initiative includes increased foot patrols, establishment of community liaison officers, and installation of CCTV networks in high-crime areas.",
    link: "https://example.com/news/14",
    pubDate: new Date(Date.now() - 46800000).toISOString(),
    author: "Crime Reporter",
    category: "Crime",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop",
    source: "Ada Derana"
  },
  {
    id: "15",
    title: "IT කර්මාන්තයේ නව සැලැස්ම 50,000 රැකියා අවස්ථා",
    description: "තොරතුරු තාක්ෂණ අමාත්‍යාංශය ඉදිරි දශකය තුළ 50,000 නව රැකියා අවස්ථා නිර්මාණය කිරීමේ සැලසුම ප්‍රකාශයට පත් කරයි.",
    content: "තොරතුරු තාක්ෂණ අමාත්‍යාංශය ශ්‍රී ලංකාව දකුණු ආසියාවේ ප්‍රධාන තාක්ෂණ මධ්‍යස්ථානයක් බවට පත් කිරීමේ අරමුණින් ඉදිරි දශකය තුළ 50,000 නව රැකියා අවස්ථා නිර්මාණය කිරීමේ මහා සැලසුමක් ප්‍රකාශයට පත් කළේය. මෙම සැලසුම යටතේ සොෆ්ට්වෙයා සංවර්ධනය, කෘතිම බුද්ධිය, සයිබර් ආරක්ෂාව සහ ඩිජිටල් අලෙවිකරණය වැනි ක්ෂේත්‍රවල විශේෂඥ දැනුම ලබා දෙන පුහුණු වැඩසටහන් ක්‍රියාත්මක කරනු ඇත. අමාත්‍යවරයා සඳහන් කළේ මෙම වැඩසටහන මඟින් ගෝලීය IT සමාගම් ශ්‍රී ලංකාවට ආකර්ෂණය කර ගැනීමට ද හැකි වනු ඇති බවයි.",
    link: "https://example.com/news/15",
    pubDate: new Date(Date.now() - 50400000).toISOString(),
    author: "තාක්ෂණ වාර්තාකරු",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    source: "Hiru News"
  }
];

export const CATEGORIES = [
  "All",
  "Politics",
  "Business", 
  "Sports",
  "Technology",
  "Weather",
  "Education",
  "Health",
  "Crime"
];

export class NewsService {
  static async getNews(category: string = "All"): Promise<NewsArticle[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (category === "All") {
      return MOCK_NEWS_DATA;
    }
    
    return MOCK_NEWS_DATA.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  }

  static async getArticleById(id: string): Promise<NewsArticle | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_NEWS_DATA.find(article => article.id === id) || null;
  }

  static async searchNews(query: string): Promise<NewsArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const lowerQuery = query.toLowerCase();
    return MOCK_NEWS_DATA.filter(article =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.description.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery)
    );
  }

  static getBreakingNews(): NewsArticle[] {
    return MOCK_NEWS_DATA.filter(article => 
      article.title.toLowerCase().includes('breaking') ||
      new Date(article.pubDate) > new Date(Date.now() - 3600000) // Last hour
    );
  }

  static getFeaturedNews(): NewsArticle[] {
    return MOCK_NEWS_DATA.slice(0, 3);
  }

  static getLatestNews(): NewsArticle[] {
    return MOCK_NEWS_DATA.sort((a, b) => 
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
  }
}
