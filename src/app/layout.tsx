import { Inter } from "next/font/google";
import "../styles/globals.scss";
import StyledComponentsRegistry from "@/styles/styled-registry";
import { Metadata } from "next";
import localFont from 'next/font/local'
const inter = localFont({ src: '../styles/fonts/inter-variable.woff2', display:"swap",  variable: "--font-primary",
})

export const metadata: Metadata = {
  title: "Home",
  description: "Nextjs starter template typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
