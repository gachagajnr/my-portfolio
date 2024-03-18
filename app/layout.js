import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gachaga Pius",
  description: "gachaga pius software developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-teal-400 to-yellow-200">
        <div className="grid w-full bg-base-300 justify-center text-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
