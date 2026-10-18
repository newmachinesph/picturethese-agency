import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PictureThese — Ideas, beautifully carried",
  description:
    "A content and creative agency for founder-led brands. Strategy, writing, social creative, short-form video, and email—managed as one connected studio.",
  openGraph: {
    title: "PictureThese — Ideas, beautifully carried",
    description:
      "A content and creative agency for founder-led brands. Strategy, writing, design, video, and email—made to sound like you.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
