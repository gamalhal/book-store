"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SimpleBookImage from '@/components/SimpleBookImage';
import { 
  booksData, 
  categories, 
  getCategoryCounts, 
  filterBooksByCategory, 
  searchBooks,
  type Book 
} from '@/data/books';

export default function BooksPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(booksData);
  const [sortBy, setSortBy] = useState<'title' | 'price' | 'rating'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const categoryCounts = getCategoryCounts();

  useEffect(() => {
    let books = booksData;

    // تطبيق التصنيف
    if (selectedCategory !== 'all') {
      books = filterBooksByCategory(selectedCategory);
    }

    // تطبيق البحث
    if (searchQuery.trim()) {
      books = searchBooks(searchQuery);
    }

    // تطبيق الترتيب
    books.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'title':
          aValue = a.title;
          bValue = b.title;
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        default:
          aValue = a.title;
          bValue = b.title;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredBooks(books);
  }, [selectedCategory, searchQuery, sortBy, sortOrder]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // البحث يتم تلقائياً عند تغيير searchQuery
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* عنوان الصفحة */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              ← العودة للصفحة الرئيسية
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">مكتبة الكتب</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* شريط البحث والتصفية */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* البحث */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث في الكتب بالعنوان، المؤلف، أو الوصف..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
            </div>

            {/* الترتيب */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'title' | 'price' | 'rating')}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="ترتيب الكتب"
              >
                <option value="title">ترتيب حسب العنوان</option>
                <option value="price">ترتيب حسب السعر</option>
                <option value="rating">ترتيب حسب التقييم</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* شريط التصنيفات */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">التصنيفات</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-right px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                        {categoryCounts[category.id as keyof typeof categoryCounts]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* عرض الكتب */}
          <div className="lg:col-span-3">
            {/* نتائج البحث */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {searchQuery ? `نتائج البحث عن "${searchQuery}"` : 'جميع الكتب'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredBooks.length} كتاب متاح
                {selectedCategory !== 'all' && ` في تصنيف "${categories.find(c => c.id === selectedCategory)?.name}"`}
              </p>
            </div>

            {/* شبكة الكتب */}
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <div key={book.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    {/* صورة الكتاب */}
                    <Link href={`/book/${book.id}`}>
                      <SimpleBookImage
                        src={book.image}
                        alt={book.title}
                        className="h-48"
                      />
                    </Link>
                    
                    {/* معلومات الكتاب */}
                    <div className="p-4">
                      <Link href={`/book/${book.id}`}>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                          {book.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">المؤلف: {book.author}</p>
                      
                      {/* التقييم */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>{i < Math.floor(book.rating) ? "★" : "☆"}</span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">({book.reviewsCount})</span>
                      </div>
                      
                      {/* السعر */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-green-600 dark:text-green-400">{book.price} $</span>
                          {book.originalPrice && (
                            <span className="text-sm text-gray-400 dark:text-gray-500 line-through">{book.originalPrice} $</span>
                          )}
                        </div>
                        {book.originalPrice && (
                          <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-1 rounded text-xs">
                            خصم {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}%
                          </span>
                        )}
                      </div>
                      
                      {/* الوصف */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {book.description}
                      </p>
                      
                      {/* أزرار الإجراءات */}
                      <div className="flex gap-2">
                        <Link
                          href={`/book/${book.id}`}
                          className="flex-1 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-center text-sm font-medium"
                        >
                          عرض التفاصيل
                        </Link>
                        <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">
                          إضافة للسلة
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">لا توجد كتب</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {searchQuery 
                    ? `لم نجد كتباً تطابق "${searchQuery}"`
                    : 'لا توجد كتب في هذا التصنيف'
                  }
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    مسح البحث
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 