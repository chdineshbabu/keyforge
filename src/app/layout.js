import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "KeyForge",
  description: "A solana based blockchain wallet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Providers >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black px-64 py-24 font-Poppins text-black dark:text-slate-200 `}
      >
        {children}
      </body>
      </Providers>
    </html>
  );
}
