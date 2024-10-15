import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "@/styles/globals.scss";
import ThemeToggle from "@/components/theme-toogle";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", '400', "500", "700", "900"],
  style: ['normal', 'italic'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: "Test de perfil de riego",
  description: "Test de perfil de riego para inversionistas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="auto">
      <body className={roboto.className}>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
