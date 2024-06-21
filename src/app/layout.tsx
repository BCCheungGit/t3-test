import "~/styles/globals.css";
import "@uploadthing/react/styles.css"
import { ClerkProvider } from "@clerk/nextjs";

import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";



export const metadata = {
  title: "T3 Gallery",
  description: "Generated by Benjamin Cheung",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};




export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
      <html lang="en">
        <NextSSRPlugin
          // Pass in the routerConfig from ourFileRouter, allows button to be prerendered
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className="font-sans dark">
        <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{children}</main>
              {modal}
            </div>
          <div id="modal-root" />
          <Toaster />
        </body>
      </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
