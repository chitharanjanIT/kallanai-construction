import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kallanai Construction Pvt. Ltd.",
  description:
    "Kallanai Construction Pvt. Ltd. – Experts in designing, constructing, and demolishing residential and commercial buildings from Tirunelveli.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="appShell">
          <Sidebar />
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
