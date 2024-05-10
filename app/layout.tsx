import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "./context/active-section-context";
import { ThemeProvider } from "@/components/Theme-provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hafiz | Portfolio",
  description: "Hafiz ADAM is a web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={`${inter.className} text-gray-950  dark:text-gray-300  bg-gradient-to-r from-indigo-100 via-purple-100 to-violet-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900 relative mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#693e3e]"></div>
          <div
            className=" bg-yellow-400 dark:bg-yellow-600 absolute top-20 -z-10 left-1/2 -translate-x-1/2 h-[10rem] w-1/4
        rounded-full blur-[10rem] dark:blur-[6rem]"
          ></div>
          <div
            className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 
        2xl:left-[-5rem] dark:bg-blue-950"
          ></div>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
