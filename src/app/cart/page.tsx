"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/components/auth/AuthProvider";
import PaymentModal from "@/components/payment/PaymentModal";
import { BookImageThumbnail } from "@/components/BookImage";

// بيانات وهمية لسلة المشتريات - يمكن استبدالها لاحقاً بـ state management
const initialCartItems = [
  {
    id: 1,
    title: "مقدمة في البرمجة",
    author: "أحمد محمد",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=250&fit=crop",
    quantity: 2,
    inStock: true
  },
  {
    id: 2,
    title: "علم النفس الحديث",
    author: "سارة أحمد",
    price: 32.50,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=250&fit=crop",
    quantity: 1,
    inStock: true
  },
  {
    id: 3,
    title: "تاريخ الفن الإسلامي",
    author: "محمد علي",
    price: 28.75,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
    quantity: 1,
    inStock: false
  }
];

// مكون عرض عنصر واحد في السلة
const CartItem = ({ 
  item, 
  onUpdateQuantity, 
  onRemove 
}: { 
  item: typeof initialCartItems[0];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-4">
        {/* صورة الكتاب */}
        <BookImageThumbnail
          src={item.image}
          alt={item.title}
          className="w-16 h-20 flex-shrink-0"
        />
        
        {/* معلومات الكتاب */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-2">المؤلف: {item.author}</p>
          <div className="flex items-center gap-4">
            <span className="text-green-600 font-bold">{item.price} $</span>
            {!item.inStock && (
              <span className="text-red-500 text-sm">غير متوفر</span>
            )}
          </div>
        </div>
        
        {/* التحكم في الكمية */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
            disabled={!item.inStock}
          >
            -
          </button>
          <span className="w-12 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
            disabled={!item.inStock}
          >
            +
          </button>
        </div>
        
        {/* السعر الإجمالي للعنصر */}
        <div className="text-right min-w-[80px]">
          <div className="font-bold text-gray-800">{(item.price * item.quantity).toFixed(2)} $</div>
        </div>
        
        {/* زر الحذف */}
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 transition-colors p-2"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

// مكون ملخص الطلب
const OrderSummary = ({ 
  subtotal, 
  shipping, 
  tax, 
  total,
  onCheckout,
  user
}: { 
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  onCheckout: () => void;
  user: any;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">ملخص الطلب</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">المجموع الفرعي:</span>
          <span className="font-medium">{subtotal.toFixed(2)} $</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">الشحن:</span>
          <span className="font-medium">{shipping.toFixed(2)} $</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">الضريبة:</span>
          <span className="font-medium">{tax.toFixed(2)} $</span>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex justify-between text-lg font-bold">
            <span>المجموع الكلي:</span>
            <span className="text-green-600">{total.toFixed(2)} $</span>
          </div>
        </div>
      </div>
      
      {/* كوبون الخصم */}
      <div className="mt-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="كود الخصم"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            تطبيق
          </button>
        </div>
      </div>
      
      {/* زر إتمام الطلب */}
      <button 
        onClick={onCheckout}
        disabled={!user}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {user ? 'إتمام الطلب' : 'تسجيل دخول مطلوب'}
      </button>
      
      {/* معلومات إضافية */}
      <div className="mt-4 text-sm text-gray-500">
        <p>• الشحن مجاني للطلبات فوق 50$</p>
        <p>• إمكانية الإرجاع خلال 30 يوم</p>
        <p>• دفع آمن ومشفر</p>
      </div>
    </div>
  );
};

// المكون الرئيسي للصفحة
export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { user } = useAuth();
  
  // تحديث كمية عنصر في السلة
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  };
  
  // حذف عنصر من السلة
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  // حساب المجاميع
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.15; // 15% ضريبة
  const total = subtotal + shipping + tax;
  
  // عدد العناصر في السلة
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* شريط التنقل */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-blue-600 hover:underline">
              ← العودة للتسوق
            </Link>
            <h1 className="text-xl font-semibold">سلة المشتريات ({itemCount})</h1>
          </div>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          // السلة فارغة
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">سلة المشتريات فارغة</h2>
            <p className="text-gray-600 mb-6">لم تقم بإضافة أي كتب إلى السلة بعد</p>
            <Link 
              href="/" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ابدأ بالتسوق
            </Link>
          </div>
        ) : (
          // عرض محتويات السلة
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* قائمة العناصر */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold mb-4">الكتب المضافة ({cartItems.length})</h2>
              
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
              
              {/* أزرار إضافية */}
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setCartItems([])}
                  className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  تفريغ السلة
                </button>
                <Link 
                  href="/" 
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  متابعة التسوق
                </Link>
              </div>
            </div>
            
            {/* ملخص الطلب */}
            <div>
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
                onCheckout={() => setShowPaymentModal(true)}
                user={user}
              />
            </div>
          </div>
        )}
      </div>

      {/* نافذة الدفع */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={total}
        onSuccess={() => {
          setCartItems([]);
          setShowPaymentModal(false);
          alert('تم إتمام الطلب بنجاح!');
        }}
      />
    </div>
  );
} 