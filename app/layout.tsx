import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import PageTransition from "@/components/PageTransition";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(
    "https://zawiyatu-shabaab-nasrullah.vercel.app"
  ),

  title: {
    default: "Zawiyatu Shabaab Nasrullah",
    template: "%s | Zawiyatu Shabaab Nasrullah",
  },

  description:
    "Official website of Zawiyatu Shabaab Nasrullah in Sabon Zongo, Accra, Ghana. Discover our Islamic activities, Maulid Nabiyyi, Tijaniyya teachings, scholars, events, gallery, leadership, and community service.",

  keywords: [
    "Zawiyatu Shabaab Nasrullah",
    "Zawiyatu Shabaab",
    "Nasrullah",
    "Tijaniyya",
    "Tijaniyya Ghana",
    "Tijaniyya in Ghana",
    "Zawiya Ghana",
    "Islamic Community Ghana",
    "Islamic Community Accra",
    "Sabon Zongo",
    "Sabon Zongo Accra",
    "Accra Ghana",
    "Maulid Nabiyyi",
    "Zikr-ul-Juma'a",
    "Islamic Programs",
    "Islamic Events Ghana",
  ],

  authors: [
    {
      name: "Zawiyatu Shabaab Nasrullah",
    },
  ],

  creator: "Zawiyatu Shabaab Nasrullah",
  publisher: "Zawiyatu Shabaab Nasrullah",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Zawiyatu Shabaab Nasrullah",
    description:
      "Official website of Zawiyatu Shabaab Nasrullah in Sabon Zongo, Accra, Ghana. Faith, knowledge, unity, and service.",

    url: "https://zawiyatu-shabaab-nasrullah.vercel.app",

    siteName: "Zawiyatu Shabaab Nasrullah",

    images: [
      {
        url: "/images/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Zawiyatu Shabaab Nasrullah",
      },
    ],

    locale: "en_GH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Zawiyatu Shabaab Nasrullah",

    description:
      "Official website of Zawiyatu Shabaab Nasrullah in Sabon Zongo, Accra, Ghana.",

    images: ["/images/hero-main.jpg"],
  },

  icons: {
    icon: "/icon.png",
  },
};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="en"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >

      <body>
  <CartProvider>

    <Navbar />

    <PageTransition>
  {children}
</PageTransition>

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#166534",
          color: "#fff",
          borderRadius: "12px",
          padding: "16px",
          fontWeight: "600",
        },
      }}
    />

  </CartProvider>
</body>

    </html>

  );

}