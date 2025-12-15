import { Montserrat, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-Geist",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata = {
  title: "Kai Verschuren",
  description: "Kai Verschurens portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${geist.variable}`}>
        <body className="bg-background text-foreground container mx-auto md:overflow-hidden">
        {children}
      </body>
    </html>
  );
}
