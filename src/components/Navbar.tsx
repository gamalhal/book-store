"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/auth/AuthProvider";
import { SimpleThemeToggle } from "@/components/theme/ThemeToggle";
import LoginModal from "@/components/auth/LoginModal";
import RegisterModal from "@/components/auth/RegisterModal";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* شعار الموقع */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Book Store</h1>
              <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">by Gamal Hal</span>
            </div>
            
            {/* روابط التنقل */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                الرئيسية
              </Link>
              <Link href="/books" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                جميع الكتب
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                عن الموقع
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                تواصل معنا
              </Link>
            </div>
            
            {/* أيقونات السلة والمستخدم */}
            <div className="flex items-center space-x-4 space-x-reverse">
              {/* زر تبديل الثيم */}
              <SimpleThemeToggle />
              
              <Link href="/cart" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative">
                🛒
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm"
                  >
                    تسجيل خروج
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2 space-x-reverse">
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    تسجيل دخول
                  </button>
                  <button
                    onClick={() => setShowRegisterModal(true)}
                    className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
                  >
                    إنشاء حساب
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* نوافذ المصادقة */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />
      
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
} 