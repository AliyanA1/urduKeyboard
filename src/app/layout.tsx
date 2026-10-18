import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "UrduMaster", description: "A focused Urdu typing trainer for practical office work." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
