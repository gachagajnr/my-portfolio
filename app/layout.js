import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gachaga Pius",
  description: "Projects Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <div className="grid w-full bg-base-300 justify-center text-center items-center">{children}</div>
      </body>
    </html>
  );
}
