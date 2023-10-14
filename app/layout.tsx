import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "Your connected workspace for wiki, docs & projects | Notion",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:Light)",
        url: "/LogoLight.svg",
        href: "/LogoLight.svg",
      },
      {
        media: "(prefers-color-scheme:Dark)",
        url: "/LogoDark.svg",
        href: "/LogoDark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="notion-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
