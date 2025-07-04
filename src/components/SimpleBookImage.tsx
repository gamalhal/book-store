// مكون بسيط لعرض صور الكتب
// بديل في حالة وجود مشاكل مع المكون المعقدة

import Image from "next/image";

interface SimpleBookImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function SimpleBookImage({
  src,
  alt,
  className = "",
  priority = false
}: SimpleBookImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-gray-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
    </div>
  );
}

// مكون مصغر بسيط
export function SimpleBookImageThumbnail({
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
        sizes="64px"
      />
    </div>
  );
} 