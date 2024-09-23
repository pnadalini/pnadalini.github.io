import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Pietro's Portfolio",
  description: "Next.js Frontend Portfolio",
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
