import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "ONE - IMS",
  description: "Inventory Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
