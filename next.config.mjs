/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static2.finnhub.io",
        port: "",
        pathname: "/file/publicdatany/finnhubimage/stock_logo/**",
      },
      {
        protocol: "https",
        hostname: "static.finnhub.io",
        port: "",
        pathname: "/logo/**",
      },
      {
        protocol: "https",
        hostname: "s.yimg.com",
        port: "",
        pathname: "/ny/api/res/**",
      },
      {
        protocol: "https",
        hostname: "static.seekingalpha.com",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "s.yimg.com",
        port: "",
        pathname: "/cv/apiv2/social/images/**",
      },
      {
        protocol: "https",
        hostname: "media.zenfs.com",
        port: "",
        pathname: "/en/**",
      },
      {
        protocol: "https",
        hostname: "www.telegraph.co.uk",
        port: "",
        pathname: "/content/dam/business/**",
      },
      {
        protocol: "https",
        hostname: "static.seekingalpha.com",
        port: "",
        pathname: "/cdn/s3/uploads/getty_images/**",
      },
      {
        protocol: "https",
        hostname: "static.standard.co.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "g.foolcdn.com",
        port: "",
        pathname: "/editorial/images/**",
      },
      {
        protocol: "https",
        hostname: "s.yimg.com",
        port: "",
        pathname: "/ny/api/res/**",
      },
      {
        protocol: "https",
        hostname: "s.yimg.com",
        port: "",
        pathname: "/ny/api/res/1.2/**",
      },
    ],
  },
};
export default nextConfig;
