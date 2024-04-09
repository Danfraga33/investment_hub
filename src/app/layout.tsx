import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "./lib/utils";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investment Hub",
  description:
    "Investment Hub is an application that simplifies stock research, providing users with easy access to information about individual stocks, empowering them to make informed investment decisions.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen font-sans antialised grainy",
            inter.className,
          )}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
