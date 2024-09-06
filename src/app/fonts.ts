import { Cedarville_Cursive, Poppins, Afacad } from "next/font/google";

export const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
});

export const cedarville = Cedarville_Cursive({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-cedarville",
  weight: ["400"],
});

export const afacad = Afacad({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: ["400"],
});
