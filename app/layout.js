import Header from "./components/Header";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "ONE - IMS",
  description: "Inventory Management System",
};

export default function RootLayout({ children }) {
  let user = true;
  return (
    <html lang="en">
      <body className="">
        <Toaster richColors position="top-center" />
        <Header />
        {children}
      </body>
    </html>
  );
}
