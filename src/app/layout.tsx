import type { Metadata } from "next";
import Providers from "./providers";
import { afacad, cedarville, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Theming fiesta",
  description: "Themes are fun 🍰",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ height: "100vh", width: "100vw" }}
      className={`${poppins.variable} ${cedarville.variable} ${afacad.variable}`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧁</text></svg>"
        />
      </head>
      <body style={{ height: "100vh", width: "100vw" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
