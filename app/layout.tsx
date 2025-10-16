import "./globals.css";
export const metadata = {
  title: "Continue - Ship faster with Continuous AI",
  description: "Build and run custom agents across your IDE, terminal, and CI"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

