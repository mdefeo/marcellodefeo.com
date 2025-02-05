import type { Metadata } from "next";
import PageLoad from "@/components/ui/PageLoad";
import '@/styles/globals.css';
import '@/styles/accessibility.css';

export const metadata: Metadata = {
  title: "Marcello De Feo",
  description: "Personal and Professional Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="darkMind">
      <body>
        <main>  
          {children}
        </main>
        <PageLoad />
      </body>
    </html>
  );
}