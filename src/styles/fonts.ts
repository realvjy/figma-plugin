import localFont from "next/font/local";
import { JetBrains_Mono, Inter } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetBrainsMono",
});

export const inter = Inter({
  weight: ["200", "300", "400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
