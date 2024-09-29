import "@/app/_styles/globals.css";

export const metadata = {
  title: "The ML Repo",
  description:
    "A learning hub with curated machine learning articles, tutorials, and resources to help users deepen their understanding of ML concepts and techniques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
