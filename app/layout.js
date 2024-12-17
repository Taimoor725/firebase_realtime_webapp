import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
