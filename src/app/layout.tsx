import "./globals.css";
import PageTransition from "@/components/PageTransition";
import { LanguageProvider } from "@/utils/LanguageContext";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | MR. EKO Guidance Learning',
    default: 'MR. EKO Guidance Learning',
  },
  description: 'Educational guidance and learning platform for nurturing brighter minds with deeper values',
  keywords: [
    'education', 
    'guidance', 
    'learning', 
    'tutoring', 
    'academic support',
    'bimbingan belajar',
    'pendidikan',
    'les privat'
  ],
  icons: {
    icon: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}