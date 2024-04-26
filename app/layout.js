import Header from "./components/Header";
import "./globals.css";



export const metadata = {
  title: "ONE - IMS",
  description: "Inventory Management System",
};

export default function RootLayout({ children }) {
  let user = true;
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
