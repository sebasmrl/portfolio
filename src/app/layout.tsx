import type { Metadata } from "next";
import localFont from "next/font/local";

import '@fontsource-variable/onest';
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";



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


export const metadata: Metadata = {
  title: "Sebastian Morales",
  description: `Soy Ingeniero de Sistemas y Fullstack Developer con destreza en Nodejs, React, 
    Nest.js, Next.js, Python, Java, Dart y algunas otras tecnologias más. `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
          /* defaultTheme="" */
          /* disableTransitionOnChange */
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
