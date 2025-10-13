import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "marketX Website",
  description: "A production-ready Next.js app in TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
