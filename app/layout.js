export const metadata = {
  title: "Multiple Driller",
  description: "Multiple Driller Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0, fontFamily:'system-ui, sans-serif'}}>{children}</body>
    </html>
  );
}
