import { Inter } from "next/font/google";
import "./globals.css";
import { ContactNavbar } from "@/Components/ContactNavbar";
import { Navbar } from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ContactNavbar></ContactNavbar>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
