import '@/app/ui/global.css';
import { fMontserrat } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fMontserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
