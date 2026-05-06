import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xavier Daloonwarr | Author",
  description: "Top selling Author Xavier Daloonwarr with over 15 million book sales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
