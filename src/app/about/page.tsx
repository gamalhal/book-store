// صفحة "عن الموقع"
// تعرض معلومات عن المتجر والمطور gamal hal

import Link from "next/link";

// مكون عرض إحصائيات المتجر
const StatsSection = () => {
  const stats = [
    { number: "1000+", label: "كتاب متوفر" },
    { number: "50+", label: "ناشر شريك" },
    { number: "10K+", label: "عميل راضي" },
    { number: "24/7", label: "دعم فني" }
  ];

  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// مكون عرض فريق العمل
const TeamSection = () => {
  const team = [
    {
      name: "Gamal Hal",
      role: "مطور ومؤسس الموقع",
      description: "مطور ويب متخصص في تقنيات React و Next.js، مع خبرة في تطوير تطبيقات الويب الحديثة والمتجاوبة.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      image: "/gamal-hal.jpg"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">فريق العمل</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              {/* صورة العضو */}
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="text-gray-500 text-4xl">👨‍💻</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.description}</p>
              
              {/* المهارات */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// مكون عرض قيم المتجر
const ValuesSection = () => {
  const values = [
    {
      icon: "📚",
      title: "جودة الكتب",
      description: "نحرص على تقديم أفضل الكتب من دور النشر المعتمدة والموثوقة"
    },
    {
      icon: "🚚",
      title: "شحن سريع",
      description: "خدمة شحن سريعة وآمنة لجميع أنحاء الوطن العربي"
    },
    {
      icon: "💰",
      title: "أسعار منافسة",
      description: "أسعار منافسة وخصومات دورية على جميع الكتب"
    },
    {
      icon: "🛡️",
      title: "ضمان الجودة",
      description: "ضمان إرجاع الكتب خلال 30 يوم مع الحفاظ على حالتها"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// المكون الرئيسي للصفحة
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* شريط التنقل المبسط */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:underline">
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </nav>
      
      {/* العنوان الرئيسي */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">عن متجر الكتب</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            متجر كتب إلكتروني حديث يهدف إلى توفير أفضل الكتب في مختلف المجالات
            مع تجربة تسوق مميزة وخدمة عملاء متميزة
          </p>
        </div>
      </div>
      
      {/* الإحصائيات */}
      <StatsSection />
      
      {/* قصة المتجر */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">قصتنا</h2>
          
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              بدأت رحلة متجر الكتب في عام 2024، عندما قرر المطور <strong>Gamal Hal</strong> 
              إنشاء منصة إلكترونية متكاملة لبيع الكتب، بهدف تسهيل الوصول إلى المعرفة 
              وتشجيع القراءة في الوطن العربي.
            </p>
            
            <p className="mb-6">
              تم تطوير الموقع باستخدام أحدث التقنيات مثل <strong>Next.js</strong> و 
              <strong>TypeScript</strong> و <strong>Tailwind CSS</strong>، لضمان تجربة 
              مستخدم سلسة وسريعة على جميع الأجهزة.
            </p>
            
            <p className="mb-6">
              نحن نؤمن بأهمية المعرفة ودورها في تطوير المجتمع، لذلك نحرص على:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>تقديم مجموعة متنوعة من الكتب في مختلف المجالات</li>
              <li>ضمان جودة الكتب وموثوقية المحتوى</li>
              <li>توفير خدمة عملاء متميزة ودعم فني متواصل</li>
              <li>استخدام تقنيات حديثة لتحسين تجربة التسوق</li>
              <li>تقديم أسعار منافسة وخصومات دورية</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* قيم المتجر */}
      <ValuesSection />
      
      {/* فريق العمل */}
      <TeamSection />
      
      {/* معلومات التواصل */}
      <div className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
              <div className="space-y-3">
                <p>📧 البريد الإلكتروني: info@bookstore.com</p>
                <p>📱 الهاتف: +123 456 7890</p>
                <p>📍 العنوان: شارع المعرفة، مدينة الكتب</p>
                <p>⏰ ساعات العمل: الأحد - الخميس (9 ص - 6 م)</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">تابعنا</h3>
              <div className="space-y-3">
                <p>📘 فيسبوك: Book Store</p>
                <p>📷 إنستغرام: @bookstore</p>
                <p>🐦 تويتر: @bookstore</p>
                <p>💼 لينكد إن: Book Store</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              تم التطوير بواسطة <strong>Gamal Hal</strong> - جميع الحقوق محفوظة © 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 