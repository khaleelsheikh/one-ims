import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "ONE - IMS",
  description: "Inventory Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
