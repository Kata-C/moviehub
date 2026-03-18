import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const font = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400','600','700']
})

export const metadata: Metadata = {
  title: "MovieHub",
  description: "Rate and discover movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
