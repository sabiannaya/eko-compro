import "./globals.css";
import PageTransition from "@/components/PageTransition";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>GL</title>
        <link rel="icon" href="/Logo.png" />
      </head>
      <body className="font-sans antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
