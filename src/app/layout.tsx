import type { Viewport } from "next";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { RootThemeProvider } from "@/components/theme-provider";
import { themeStyles } from "@/components/theme-provider/theme-styles";
import { Navbar } from "@/layouts/navbar";
import { SkipLink } from "@/layouts/navbar/skip-link";
import config from "@/config.json";
import styles from "./root.module.css";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(config.url),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/shortcut.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/icon-256.png", sizes: "256x256" }],
  },
  authors: [{ name: config.name }],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value === "light" ? "light" : "dark";

  return (
    <html lang="en">
      <head>
        {/* Theme color doesn't support oklch so these are hard coded hexes */}
        <meta name="theme-color" content={theme === "dark" ? "#111" : "#F2F2F2"} />
        <meta name="color-scheme" content={theme === "light" ? "light dark" : "dark light"} />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <link rel="preload" href="/assets/fonts/gotham-medium.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/gotham-book.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="author" href="/humans.txt" type="text/plain" />
      </head>
      <body data-theme={theme}>
        <RootThemeProvider initialTheme={theme}>
          <SkipLink />
          <Navbar />
          <main id="main-content" className={styles.container} tabIndex={-1}>
            {children}
          </main>
        </RootThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
