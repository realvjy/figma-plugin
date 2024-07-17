import { JetBrains_Mono } from "next/font/google";
import "../styles/globals.scss";
import StyledComponentsRegistry from "@/styles/styled-registry";
import { Metadata } from "next";
import localFont from "next/font/local";
import { inter, jetBrainsMono } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Figma Plugin",
  description: "Figma Plugin created by realvjy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${inter.variable}`}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
