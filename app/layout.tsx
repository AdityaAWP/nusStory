import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'leaflet/dist/leaflet.css';
import { raleway } from "./fonts";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${raleway.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
