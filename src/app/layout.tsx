import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../common/styles/globals.css";
import { Sidebar } from "@/common/components/sidebar";
import { Providers } from "@/common/libs/Providers";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const url = "https://fahlevi.vercel.app";
const img = "/img/imgPorto.png";
const desc =
  "web developer especially in Frontend side, with a passion for creating pixel-perfect web experiences.";
const keyword =
  "nextjs, reactjs, blog, website, personal, personal, personalwebsite, portofolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahlevi.vercel.app"),
  title: "Fahlevi - Personal Website",
  description: desc,
  icons: "/img/imgprofile.png",
  verification: {
    google: "fjLlPxGIXUXCmFZlnANXcLlSdWucmfDtroAf0M5F91M",
    other: {
      'google-adsense-account' : 'ca-pub-1019915566543827'
    }
  },

  keywords: keyword,
  creator: "Fahlevi",
  authors: {
    name: "Fahlevi",
    url: url,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Fahlevi - Personal Website",
    description: desc,
    type: "website",
    url: url,
    images: [
      {
        url: img,
        alt: "fahlevi.vercel.app og-image",
        width: 800,
        height: 600,
      },
      {
        url: img,
        alt: "fahlevi.vercel.app og-image",
        width: 1200,
        height: 630,
      },
      {
        url: img,
        alt: "fahlevi.vercel.app og-image",
        width: 1600,
        height: 900,
      },
    ],

    siteName: "fahlevi.vercel.app",
  },
  twitter: {
    creator: "Fahlevi",
    images: "/img/imgprofile.png",
    card: "summary_large_image",
    site: "@site",
    siteId: "https://fahlevi.vercel.app/",
    title: "Fahlevi",
    description: desc,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script 
      
      />
      <body className={inter.className}>
        <Providers>
          <Sidebar>
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={2}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
            {children}
          </Sidebar>
        </Providers>
      </body>
    </html>
  );
}
