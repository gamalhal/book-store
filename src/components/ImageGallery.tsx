// مكون معرض الصور لعرض صور إضافية للكتاب
// يدعم التكبير والتنقل بين الصور

"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (images.length === 0) return null;

  return (
    <>
      {/* معرض الصور المصغر */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">معرض الصور</h3>
        
        {/* الصورة الرئيسية */}
        <div className="relative">
          <div className="bg-gray-200 rounded-lg h-64 relative overflow-hidden">
            <Image
              src={images[selectedImage]}
              alt={`${alt} - صورة ${selectedImage + 1}`}
              fill
              className="object-cover cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* أزرار التنقل */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                aria-label="الصورة السابقة"
              >
                ‹
              </button>
              <button
                onClick={() => setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                aria-label="الصورة التالية"
              >
                ›
              </button>
            </>
          )}
        </div>
        
        {/* الصور المصغرة */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                }`}
              >
                <Image
                  src={image}
                  alt={`${alt} - مصغر ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal للصورة المكبرة */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            {/* زر الإغلاق */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10"
              aria-label="إغلاق المعرض"
            >
              ✕
            </button>
            
            {/* الصورة المكبرة */}
            <div className="relative">
              <Image
                src={images[selectedImage]}
                alt={`${alt} - مكبرة`}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
                priority
              />
              
              {/* أزرار التنقل في Modal */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1);
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                    aria-label="الصورة السابقة"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1);
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                    aria-label="الصورة التالية"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            
            {/* عداد الصور */}
            <div className="text-white text-center mt-4">
              {selectedImage + 1} من {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 