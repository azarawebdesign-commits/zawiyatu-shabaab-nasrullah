import type { MetadataRoute } from "next";

const baseUrl = "https://zawiyatu-shabaab-nasrullah.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/api/",
        "/member/",
        "/checkout/",
        "/cart/",
        "/registration/payment/",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}