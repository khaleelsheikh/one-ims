import "./globals.css";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";

export const metadata = {
  title: "ONE - IMS",
  description: "Inventory Management System",
};

export default function RootLayout({ children }) {
  let user = true
  return (
    <html lang="en">
      <body className="">
        <Header />
        <div className="flex">
          <SideNavbar />
          <div className="flex-grow p-4 h-[96vh]">{children}</div>
        </div>
      </body>
    </html>
  );
}
