// صفحة تفاصيل الكتاب
// تعرض معلومات شاملة عن الكتاب: الصورة، العنوان، المؤلف، السعر، الوصف، التقييمات

import Link from "next/link";
import Image from "next/image";
import SimpleBookImage, { SimpleBookImageThumbnail } from "@/components/SimpleBookImage";
import { getBookById } from "@/data/books";

// الحصول على بيانات الكتاب
const getBookData = (id: string) => {
  return getBookById(parseInt(id));
};

// مكون عرض التقييمات
const ReviewsSection = ({ rating, reviewsCount }: { rating: number; reviewsCount: number }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">تقييمات القراء</h3>
      
      {/* التقييم العام */}
      <div className="flex items-center gap-4 mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{rating}</div>
          <div className="flex text-yellow-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{reviewsCount} تقييم</div>
        </div>
        
        <div className="flex-1">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-2">
                <span className="text-sm w-8 text-gray-700 dark:text-gray-300">{stars} نجوم</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${(stars <= rating ? 100 : 0)}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 w-12">80%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* زر إضافة تقييم */}
      <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
        أضف تقييمك
      </button>
    </div>
  );
};

// مكون معلومات الكتاب التفصيلية
const BookDetails = ({ book }: { book: any }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">معلومات الكتاب</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">عدد الصفحات:</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">{book.pages}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">اللغة:</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">{book.language}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">الناشر:</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">{book.publisher}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">سنة النشر:</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">{book.publishDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">رقم ISBN:</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">{book.isbn}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">التصنيف:</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">{book.category}</span>
        </div>
      </div>
      
      {/* الكلمات المفتاحية */}
      <div className="mt-4">
        <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">الكلمات المفتاحية:</h4>
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag: string) => (
            <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// مكون عرض الكتب ذات الصلة
const RelatedBooks = ({ relatedBookIds }: { relatedBookIds: number[] }) => {
  const relatedBooks = [
    {
      id: 2,
      title: "علم النفس الحديث",
      author: "سارة أحمد",
      price: 32.50,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=250&fit=crop",
      rating: 4.2
    },
    {
      id: 5,
      title: "إدارة الأعمال الحديثة",
      author: "علي محمود",
      price: 42.25,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=250&fit=crop",
      rating: 4.3
    },
    {
      id: 6,
      title: "الرياضيات للجميع",
      author: "نور الدين",
      price: 38.90,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=250&fit=crop",
      rating: 4.4
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">كتب ذات صلة</h3>
      
      <div className="space-y-3">
        {relatedBooks.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <SimpleBookImageThumbnail
              src={book.image}
              alt={book.title}
              className="w-12 h-16 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm line-clamp-1">{book.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">{book.author}</p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center">
                  <span className="text-yellow-500 text-xs">★</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 mr-1">{book.rating}</span>
                </div>
                <span className="text-green-600 dark:text-green-400 font-bold text-sm">{book.price} $</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// المكون الرئيسي للصفحة
export default function BookPage({ params }: { params: { id: string } }) {
  const book = getBookData(params.id);
  
  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">الكتاب غير موجود</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* عنوان الصفحة */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* العمود الأيسر - صورة الكتاب والمعلومات الأساسية */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* صورة الكتاب */}
                <SimpleBookImage
                  src={book.image}
                  alt={book.title}
                  className="h-96"
                  priority={true}
                />
                
                {/* معلومات الكتاب الأساسية */}
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{book.title}</h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">المؤلف: {book.author}</p>
                  
                  {/* التقييم */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < Math.floor(book.rating) ? "★" : "☆"}</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">({book.reviewsCount} تقييم)</span>
                  </div>
                  
                  {/* السعر */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">{book.price} $</span>
                      {book.originalPrice && (
                        <span className="text-lg text-gray-400 dark:text-gray-500 line-through">{book.originalPrice} $</span>
                      )}
                      {book.originalPrice && (
                        <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-1 rounded text-sm">
                          خصم {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}%
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* حالة المخزون */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${book.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {book.inStock ? `متوفر (${book.stockCount} نسخة)` : 'غير متوفر'}
                      </span>
                    </div>
                  </div>
                  
                  {/* أزرار الإجراءات */}
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium">
                      إضافة إلى السلة
                    </button>
                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      إضافة للمفضلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* وصف الكتاب */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">وصف الكتاب</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{book.longDescription}</p>
              </div>
            </div>
            
            {/* معرض الصور - مؤقتاً معطل */}
            {/* {book.additionalImages && book.additionalImages.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <ImageGallery 
                  images={[book.image, ...book.additionalImages]} 
                  alt={book.title} 
                />
              </div>
            )} */}
          </div>
          
          {/* العمود الأيمن - التقييمات والمعلومات التفصيلية */}
          <div className="space-y-6">
            <ReviewsSection rating={book.rating} reviewsCount={book.reviewsCount} />
            <BookDetails book={book} />
            <RelatedBooks relatedBookIds={book.relatedBooks} />
          </div>
        </div>
      </div>
    </div>
  );
} 