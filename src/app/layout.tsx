import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cozy Nest",
  description: "A Flat Sharing site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className}>
          <AppRouterCacheProvider>
            <>{children}</>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
