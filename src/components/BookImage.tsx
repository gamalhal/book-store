"use client";

// مكون مخصص لعرض صور الكتب مع تأثيرات بصرية
// يدعم أحجام مختلفة وتأثيرات hover

import Image from "next/image";
import { useState } from "react";

interface BookImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  showOverlay?: boolean;
  onClick?: () => void;
}

export default function BookImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  showOverlay = false,
  onClick
}: BookImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg bg-gray-200 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* صورة الكتاب */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={!width && !height}
        className={`
          object-cover transition-all duration-300
          ${isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'}
          ${isHovered ? 'scale-105' : 'scale-100'}
        `}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        onLoad={() => setIsLoading(false)}
        sizes={width ? `${width}px` : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
      />
      
      {/* تأثير التحميل */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      {/* Overlay عند Hover */}
      {showOverlay && isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all duration-300">
          <div className="text-white text-center">
            <div className="text-2xl mb-2">👁️</div>
            <div className="text-sm font-medium">عرض التفاصيل</div>
          </div>
        </div>
      )}
      
      {/* تأثير الظل */}
      <div className={`
        absolute inset-0 rounded-lg shadow-lg transition-all duration-300
        ${isHovered ? 'shadow-xl' : 'shadow-md'}
      `}></div>
    </div>
  );
}

// مكون مصغر لصورة الكتاب (للسلة والكتب ذات الصلة)
export function BookImageThumbnail({
  src,
  alt,
  className = ""
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded bg-gray-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        sizes="64px"
      />
    </div>
  );
} 