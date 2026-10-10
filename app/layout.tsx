import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kalu-crochet.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Crochet",
  description: "Tienda de crochets",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Crochet",
    description: "Tienda de crochets",
    type: "website",
    siteName: "Crochet",
    locale: "es_ES",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1079,
        height: 992,
        alt: "KYL Crochet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crochet",
    description: "Tienda de crochets",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
