import './ui/global.css';
import { inter } from './ui/fonts';

// RootLayout 필수, 모든 페이지에서 공유
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
