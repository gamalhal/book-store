// الصفحة الرئيسية لمتجر الكتب الإلكتروني
// تحتوي على: شريط التنقل، عرض الكتب، شريط البحث، التصنيفات

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleBookImage from "@/components/SimpleBookImage";
import { booksData, categories, filterBooksByCategory, searchBooks } from "@/data/books";

// عرض أول 6 كتب ككتب مميزة
const featuredBooks = booksData.slice(0, 6);

// مكون عرض كتاب واحد
const BookCard = ({ book }: { book: any }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* صورة الكتاب */}
      <SimpleBookImage
        src={book.image}
        alt={book.title}
        className="h-48"
      />
      
      {/* معلومات الكتاب */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">{book.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">المؤلف: {book.author}</p>
        <p className="text-gray-500 dark:text-gray-500 text-xs mb-3 line-clamp-2">{book.description}</p>
        
        {/* التقييم والسعر */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-1">{book.rating}</span>
          </div>
          <span className="text-green-600 dark:text-green-400 font-bold">{book.price} $</span>
        </div>
        
        {/* أزرار الإجراءات */}
        <div className="flex gap-2 mt-3">
          <button className="flex-1 bg-blue-600 dark:bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            إضافة للسلة
          </button>
          <Link href={`/book/${book.id}`} className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-3 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-center">
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
};



// مكون شريط البحث والتصفية
const SearchAndFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/books?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* شريط البحث */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في الكتب بالعنوان، المؤلف، أو الوصف..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
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
            </div>
          </div>
          
          {/* زر البحث */}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
          >
            بحث
          </button>
        </form>
      </div>
    </div>
  );
};

// المكون الرئيسي للصفحة
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* شريط البحث والتصفية */}
      <SearchAndFilter />
      
      {/* المحتوى الرئيسي */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* عنوان الصفحة */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">مرحباً بك في متجر الكتب</h2>
          <p className="text-gray-600 dark:text-gray-400">اكتشف مجموعة واسعة من الكتب في مختلف المجالات</p>
        </div>
        
        {/* عرض الكتب */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        
        {/* زر عرض جميع الكتب */}
        <div className="text-center mt-8">
          <Link 
            href="/books" 
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors inline-block"
          >
            عرض جميع الكتب
          </Link>
        </div>
      </main>
      
      {/* تذييل الصفحة */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Book Store</h3>
              <p className="text-gray-300">متجر كتب إلكتروني حديث يقدم أفضل الكتب في مختلف المجالات</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/books" className="hover:text-white">الكتب</Link></li>
                <li><Link href="/categories" className="hover:text-white">التصنيفات</Link></li>
                <li><Link href="/about" className="hover:text-white">عن الموقع</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">خدمة العملاء</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/contact" className="hover:text-white">تواصل معنا</Link></li>
                <li><Link href="/shipping" className="hover:text-white">سياسة الشحن</Link></li>
                <li><Link href="/returns" className="hover:text-white">إرجاع الكتب</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">معلومات التواصل</h4>
              <p className="text-gray-300">تم التطوير بواسطة: Gamal Hal</p>
              <p className="text-gray-300">جميع الحقوق محفوظة © 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
