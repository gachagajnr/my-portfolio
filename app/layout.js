import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gachaga Pius",
  description: "Gachaga Pius Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="" data-theme="winter">
        <div className="grid w-full bg-base-300 justify-center text-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
