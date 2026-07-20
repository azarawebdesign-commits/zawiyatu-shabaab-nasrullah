import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";


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

  title: "Zawiyatu Shabaab Nasrullah",

  description:
    "Official website of Zawiyatu Shabaab Nasrullah. Connecting hearts through faith, knowledge, unity, and service.",


  keywords: [
    "Zawiyatu Shabaab Nasrullah",
    "Islamic Community",
    "Maulid Nabiyyi",
    "Islamic Programs",
    "Sabon Zongo",
    "Accra Ghana",
  ],


  openGraph: {

    title: "Zawiyatu Shabaab Nasrullah",

    description:
      "Connecting hearts through faith, knowledge, unity, and service.",

    url:
      "https://zawiyatu-shabaab-nasrullah.vercel.app",

    siteName:
      "Zawiyatu Shabaab Nasrullah",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Zawiyatu Shabaab Nasrullah Logo",
      },
    ],

    locale: "en_GH",

    type: "website",

  },


  twitter: {

    card: "summary_large_image",

    title:
      "Zawiyatu Shabaab Nasrullah",

    description:
      "Official website of Zawiyatu Shabaab Nasrullah.",

    images: [
      "/images/logo.png"
    ],

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

          {children}

        </CartProvider>

      </body>

    </html>

  );

}