import "./globals.css";

export const metadata = {
  title: "Ask AI",
  description: "AI Chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}