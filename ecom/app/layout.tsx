"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import Sidebar from "@/components/common/Sidebar";
import { ColorModeScript } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider>
            <Sidebar>{children}</Sidebar>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
