import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Alchemy, Landing Page",
  description: "Landing page prototype for Alchemy App",
};

const Aeonik = localFont({
  src: [
    {
      path: "../assets/fonts/Aeonik/Aeonik-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik/Aeonik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik/Aeonik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik/Aeonik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik/Aeonik-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: '--font-aeonik'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter' 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Aeonik.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}