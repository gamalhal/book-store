// بيانات الكتب مع التصنيفات
export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription?: string;
  pages?: number;
  language?: string;
  publisher?: string;
  publishDate?: string;
  isbn?: string;
  inStock: boolean;
  stockCount?: number;
  tags?: string[];
  relatedBooks?: number[];
}

export const categories = [
  { id: "all", name: "جميع الكتب", count: 0 },
  { id: "technology", name: "التكنولوجيا", count: 0 },
  { id: "business", name: "إدارة الأعمال", count: 0 },
  { id: "psychology", name: "علم النفس", count: 0 },
  { id: "science", name: "العلوم", count: 0 },
  { id: "history", name: "التاريخ", count: 0 },
  { id: "arts", name: "الفنون", count: 0 },
  { id: "literature", name: "الأدب", count: 0 },
  { id: "philosophy", name: "الفلسفة", count: 0 },
  { id: "education", name: "التعليم", count: 0 },
];

export const booksData: Book[] = [
  {
    id: 1,
    title: "مقدمة في الذكاء الاصطناعي",
    author: "د. محمد أحمد",
    price: 45.99,
    originalPrice: 59.99,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
    category: "technology",
    rating: 4.7,
    reviewsCount: 234,
    description: "كتاب شامل يغطي أساسيات الذكاء الاصطناعي وتطبيقاته الحديثة.",
    longDescription: `كتاب شامل يغطي أساسيات الذكاء الاصطناعي وتطبيقاته الحديثة.

الفصول:
• مقدمة في الذكاء الاصطناعي
• خوارزميات التعلم الآلي
• الشبكات العصبية
• معالجة اللغة الطبيعية
• رؤية الحاسوب
• تطبيقات عملية

يحتوي على أمثلة عملية وتمارين تفاعلية.`,
    pages: 480,
    language: "العربية",
    publisher: "دار العلوم الحديثة",
    publishDate: "2024",
    isbn: "978-1234567890",
    inStock: true,
    stockCount: 15,
    tags: ["ذكاء اصطناعي", "تعلم آلي", "تكنولوجيا", "برمجة"],
    relatedBooks: [2, 5, 8],
  },
  {
    id: 2,
    title: "علم النفس الحديث",
    author: "سارة أحمد",
    price: 32.5,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop",
    category: "psychology",
    rating: 4.2,
    reviewsCount: 156,
    description: "استكشاف علم النفس المعاصر ونظرياته الحديثة.",
    longDescription: `استكشاف علم النفس المعاصر ونظرياته الحديثة.

الفصول:
• تاريخ علم النفس
• النظريات الحديثة
• علم النفس المعرفي
• علم النفس الاجتماعي
• علم النفس الإكلينيكي
• تطبيقات عملية

يحتوي على دراسات حالة وأمثلة واقعية.`,
    pages: 320,
    language: "العربية",
    publisher: "دار المعرفة النفسية",
    publishDate: "2023",
    isbn: "978-1234567891",
    inStock: true,
    stockCount: 28,
    tags: ["علم نفس", "سلوك", "عقل", "علاج"],
    relatedBooks: [1, 6, 9],
  },
  {
    id: 3,
    title: "تاريخ الحضارات القديمة",
    author: "علي محمود",
    price: 38.75,
    originalPrice: 45.0,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    category: "history",
    rating: 4.5,
    reviewsCount: 189,
    description: "رحلة عبر التاريخ لاستكشاف الحضارات القديمة.",
    longDescription: `رحلة عبر التاريخ لاستكشاف الحضارات القديمة.

الفصول:
• الحضارة المصرية القديمة
• حضارة بلاد الرافدين
• الحضارة اليونانية
• الحضارة الرومانية
• الحضارة الصينية
• الحضارة الإسلامية

يحتوي على صور أثرية وخرائط تفصيلية.`,
    pages: 560,
    language: "العربية",
    publisher: "دار التاريخ والآثار",
    publishDate: "2023",
    isbn: "978-1234567892",
    inStock: true,
    stockCount: 12,
    tags: ["تاريخ", "حضارات", "آثار", "ثقافة"],
    relatedBooks: [4, 7, 10],
  },
  {
    id: 4,
    title: "إدارة الأعمال الحديثة",
    author: "نور الدين",
    price: 42.25,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop",
    category: "business",
    rating: 4.3,
    reviewsCount: 203,
    description: "مبادئ وأساليب إدارة الأعمال في العصر الحديث.",
    longDescription: `مبادئ وأساليب إدارة الأعمال في العصر الحديث.

الفصول:
• أساسيات الإدارة
• التخطيط الاستراتيجي
• إدارة الموارد البشرية
• التسويق الحديث
• إدارة المالية
• الابتكار في الأعمال

يحتوي على دراسات حالة من شركات عالمية.`,
    pages: 420,
    language: "العربية",
    publisher: "دار الإدارة الحديثة",
    publishDate: "2024",
    isbn: "978-1234567893",
    inStock: true,
    stockCount: 35,
    tags: ["إدارة", "أعمال", "استراتيجية", "تسويق"],
    relatedBooks: [1, 5, 8],
  },
  {
    id: 5,
    title: "الرياضيات للجميع",
    author: "فاطمة حسن",
    price: 38.9,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=500&fit=crop",
    category: "science",
    rating: 4.4,
    reviewsCount: 167,
    description: "كتاب يشرح الرياضيات بطريقة سهلة وممتعة.",
    longDescription: `كتاب يشرح الرياضيات بطريقة سهلة وممتعة.

الفصول:
• الجبر الأساسي
• الهندسة
• التفاضل والتكامل
• الإحصاء
• نظرية الأعداد
• تطبيقات عملية

يحتوي على تمارين وحلول تفصيلية.`,
    pages: 380,
    language: "العربية",
    publisher: "دار الرياضيات الحديثة",
    publishDate: "2023",
    isbn: "978-1234567894",
    inStock: true,
    stockCount: 22,
    tags: ["رياضيات", "جبر", "هندسة", "إحصاء"],
    relatedBooks: [1, 6, 9],
  },
  {
    id: 6,
    title: "فن الخط العربي",
    author: "أحمد الخطاط",
    price: 28.75,
    originalPrice: 35.0,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
    category: "arts",
    rating: 4.8,
    reviewsCount: 156,
    description:
      "رحلة في تاريخ الفن الإسلامي العريق من العصور الوسطى إلى العصر الحديث.",
    longDescription: `رحلة في تاريخ الفن الإسلامي العريق من العصور الوسطى إلى العصر الحديث.

الفصول:
• تاريخ الخط العربي
• أنواع الخطوط
• تقنيات الكتابة
• الزخرفة الإسلامية
• التطبيقات الحديثة
• معرض الأعمال

يحتوي على صور ملونة عالية الجودة لأهم الأعمال الفنية الإسلامية.`,
    pages: 420,
    language: "العربية",
    publisher: "دار الفنون الإسلامية",
    publishDate: "2023",
    isbn: "978-1234567895",
    inStock: true,
    stockCount: 18,
    tags: ["فن إسلامي", "خط عربي", "زخرفة", "ثقافة"],
    relatedBooks: [3, 7, 10],
  },
  {
    id: 7,
    title: "الأدب العربي المعاصر",
    author: "ليلى الشعرية",
    price: 35.5,
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=500&fit=crop",
    category: "literature",
    rating: 4.1,
    reviewsCount: 134,
    description: "دراسة شاملة للأدب العربي في العصر الحديث.",
    longDescription: `دراسة شاملة للأدب العربي في العصر الحديث.

الفصول:
• الشعر الحديث
• الرواية العربية
• القصة القصيرة
• المسرح العربي
• النقد الأدبي
• الأدب المقارن

يحتوي على نصوص مختارة وتحليلات نقدية.`,
    pages: 360,
    language: "العربية",
    publisher: "دار الأدب العربي",
    publishDate: "2024",
    isbn: "978-1234567896",
    inStock: true,
    stockCount: 25,
    tags: ["أدب", "شعر", "رواية", "نقد"],
    relatedBooks: [3, 6, 10],
  },
  {
    id: 8,
    title: "فلسفة العلم",
    author: "د. خالد الفيلسوف",
    price: 41.99,
    originalPrice: 52.0,
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop",
    category: "philosophy",
    rating: 4.6,
    reviewsCount: 98,
    description: "استكشاف العلاقة بين الفلسفة والعلم عبر التاريخ.",
    longDescription: `استكشاف العلاقة بين الفلسفة والعلم عبر التاريخ.

الفصول:
• فلسفة العلم القديمة
• الثورة العلمية
• فلسفة المعرفة
• فلسفة الأخلاق
• فلسفة العقل
• الفلسفة المعاصرة

يحتوي على مناقشات فلسفية عميقة.`,
    pages: 440,
    language: "العربية",
    publisher: "دار الفلسفة الحديثة",
    publishDate: "2023",
    isbn: "978-1234567897",
    inStock: true,
    stockCount: 14,
    tags: ["فلسفة", "علم", "معرفة", "أخلاق"],
    relatedBooks: [1, 5, 9],
  },
  {
    id: 9,
    title: "طرق التدريس الحديثة",
    author: "د. سامية المعلمة",
    price: 33.75,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop",
    category: "education",
    rating: 4.3,
    reviewsCount: 145,
    description: "دليل شامل لطرق التدريس الفعالة في العصر الحديث.",
    longDescription: `دليل شامل لطرق التدريس الفعالة في العصر الحديث.

الفصول:
• نظريات التعلم
• طرق التدريس التفاعلية
• التكنولوجيا في التعليم
• تقييم الطلاب
• إدارة الفصول الدراسية
• التطوير المهني

يحتوي على أمثلة عملية ونماذج تطبيقية.`,
    pages: 320,
    language: "العربية",
    publisher: "دار التربية الحديثة",
    publishDate: "2024",
    isbn: "978-1234567898",
    inStock: true,
    stockCount: 30,
    tags: ["تعليم", "تدريس", "تعلم", "تربية"],
    relatedBooks: [2, 5, 8],
  },
  {
    id: 10,
    title: "تطوير تطبيقات الويب",
    author: "أحمد المطور",
    price: 49.99,
    originalPrice: 65.0,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=500&fit=crop",
    category: "technology",
    rating: 4.7,
    reviewsCount: 278,
    description: "دليل شامل لتطوير تطبيقات الويب الحديثة.",
    longDescription: `دليل شامل لتطوير تطبيقات الويب الحديثة.

الفصول:
• أساسيات تطوير الويب
• HTML و CSS المتقدم
• JavaScript الحديث
• React و Next.js
• قواعد البيانات
• النشر والتطوير

يحتوي على مشاريع عملية وأمثلة كود.`,
    pages: 520,
    language: "العربية",
    publisher: "دار البرمجة الحديثة",
    publishDate: "2024",
    isbn: "978-1234567899",
    inStock: true,
    stockCount: 20,
    tags: ["برمجة", "ويب", "React", "JavaScript"],
    relatedBooks: [1, 4, 8],
  },
];

// حساب عدد الكتب في كل تصنيف
export const getCategoryCounts = () => {
  const counts: { [key: string]: number } = {};
  booksData.forEach((book) => {
    counts[book.category] = (counts[book.category] || 0) + 1;
  });
  counts.all = booksData.length;
  return counts;
};

// تصفية الكتب حسب التصنيف
export const filterBooksByCategory = (category: string) => {
  if (category === "all") return booksData;
  return booksData.filter((book) => book.category === category);
};

// البحث في الكتب
export const searchBooks = (query: string) => {
  const searchTerm = query.toLowerCase();
  return booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.description.toLowerCase().includes(searchTerm) ||
      book.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
};

// الحصول على كتاب بواسطة ID
export const getBookById = (id: number) => {
  return booksData.find((book) => book.id === id);
};
