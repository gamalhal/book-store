// صفحة التواصل
// تحتوي على نموذج اتصال ومعلومات التواصل مع الفريق

"use client";

import { useState } from "react";
import Link from "next/link";

// مكون نموذج الاتصال
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // تحديث بيانات النموذج
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // إرسال النموذج
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال البيانات
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // هنا يمكن إضافة منطق إرسال البيانات الحقيقي
    console.log("بيانات النموذج:", formData);
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // إعادة تعيين النموذج
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-6">أرسل لنا رسالة</h3>
      
      {submitStatus === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              الاسم الكامل *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل اسمك الكامل"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              البريد الإلكتروني *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            الموضوع *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">اختر الموضوع</option>
            <option value="استفسار عام">استفسار عام</option>
            <option value="طلب كتاب">طلب كتاب</option>
            <option value="مشكلة في الطلب">مشكلة في الطلب</option>
            <option value="اقتراح">اقتراح</option>
            <option value="شكوى">شكوى</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            الرسالة *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="اكتب رسالتك هنا..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
        </button>
      </form>
    </div>
  );
};

// مكون معلومات التواصل
const ContactInfo = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "البريد الإلكتروني",
      details: ["info@bookstore.com", "support@bookstore.com"],
      description: "نرد خلال 24 ساعة"
    },
    {
      icon: "📱",
      title: "الهاتف",
      details: ["+123 456 7890", "+123 456 7891"],
      description: "الأحد - الخميس (9 ص - 6 م)"
    },
    {
      icon: "📍",
      title: "العنوان",
      details: ["شارع المعرفة، رقم 123", "مدينة الكتب، البلد"],
      description: "مكتبنا الرئيسي"
    },
    {
      icon: "💬",
      title: "الدردشة المباشرة",
      details: ["متاحة 24/7"],
      description: "للأسئلة العاجلة"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">معلومات التواصل</h3>
        <p className="text-gray-600 mb-6">
          نحن هنا لمساعدتك! لا تتردد في التواصل معنا بأي استفسار أو طلب.
        </p>
      </div>
      
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl">{method.icon}</div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">{method.title}</h4>
              <div className="space-y-1">
                {method.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">{detail}</p>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">{method.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* ساعات العمل */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">ساعات العمل</h4>
        <div className="space-y-1 text-sm text-blue-700">
          <p>الأحد - الخميس: 9:00 ص - 6:00 م</p>
          <p>الجمعة: 9:00 ص - 2:00 م</p>
          <p>السبت: مغلق</p>
        </div>
      </div>
    </div>
  );
};

// مكون الأسئلة الشائعة
const FAQSection = () => {
  const faqs = [
    {
      question: "كيف يمكنني إرجاع كتاب؟",
      answer: "يمكنك إرجاع الكتاب خلال 30 يوم من تاريخ الشراء، بشرط الحفاظ على حالته الأصلية."
    },
    {
      question: "ما هي تكلفة الشحن؟",
      answer: "الشحن مجاني للطلبات التي تزيد قيمتها عن 50$، وإلا تبلغ تكلفة الشحن 5.99$."
    },
    {
      question: "كم تستغرق مدة التوصيل؟",
      answer: "تتراوح مدة التوصيل بين 3-7 أيام عمل حسب موقعك."
    },
    {
      question: "هل تقدمون كتب إلكترونية؟",
      answer: "حالياً نركز على الكتب الورقية، ولكن نخطط لإضافة الكتب الإلكترونية قريباً."
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">الأسئلة الشائعة</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// المكون الرئيسي للصفحة
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* شريط التنقل */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:underline">
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </nav>
      
      {/* العنوان الرئيسي */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl text-blue-100">
            نحن هنا لمساعدتك! لا تتردد في التواصل معنا بأي استفسار أو طلب
          </p>
        </div>
      </div>
      
      {/* المحتوى الرئيسي */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* نموذج الاتصال */}
          <ContactForm />
          
          {/* معلومات التواصل */}
          <ContactInfo />
        </div>
      </div>
      
      {/* الأسئلة الشائعة */}
      <FAQSection />
      
      {/* خريطة الموقع (مكاني) */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">موقعنا</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p>خريطة تفاعلية لموقعنا</p>
              <p className="text-sm">شارع المعرفة، مدينة الكتب</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 