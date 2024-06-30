import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

import {ClerkProvider} from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Devflow",
  description:
    "Welcome to DevFlow, where developers connect, learn, and grow together! Join our thriving community to share insights, tackle coding puzzles, and stay updated on cutting-edge technologies. Whether you're a seasoned pro or just getting started, explore solutions, engage in lively discussions, and expand your expertise with fellow developers from around the globe.",
  icons: {
    icon: "/public/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

// <SignedOut>
// <SignInButton />
// </SignedOut>
// <SignedIn>
// <UserButton />
// </SignedIn>
