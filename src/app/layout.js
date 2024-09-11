import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Žvejyba kitaip",
  description: "Mes žvejei mėgstam žvejoti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header">
          <h2>Logo</h2>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/contacts">Contacts</Link>
            <Link href="/men">Men products</Link>
            <Link href="/women">Women products</Link>
          </nav>
          <div>Hello guest!</div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
