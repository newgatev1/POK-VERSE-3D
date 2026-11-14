import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POKÉVERSE 3D",
  description: "Explore the ultimate 3D Pokémon card universe."
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
