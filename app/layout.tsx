import Navbar from "./Navbar";
import "./global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
