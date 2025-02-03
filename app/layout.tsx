import type { Metadata } from "next";
import "./globals.css";
import { Buttons } from "@/components/Button";

export const metadata: Metadata = {
  title: 'Error Handling',
  description: 'Error Handling in Next.js 15',
}
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
    <html lang="en">
      <body>
        <Buttons />
        {children}
      </body>
    </html>
  );
}
