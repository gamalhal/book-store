/** @type {import('next').NextConfig} */
const nextConfig = {
  // تكوين الصور للسماح بالصور من Unsplash
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // تحسين جودة الصور
    formats: ["image/webp", "image/avif"],
    // تحسين الأداء
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // تحسين الأداء
  experimental: {
    optimizeCss: false, // تعطيل optimizeCss مؤقتاً
  },
  // تحسين SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
