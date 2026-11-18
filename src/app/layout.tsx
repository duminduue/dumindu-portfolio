import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dumindu Ekanayaka | Graduate Mechatronics & Robotics Engineer",
  description:
    "Professional portfolio of Dumindu Udakara Ekanayaka, a Graduate Mechatronics and Robotics Engineer exploring robotics, intelligent systems, industrial automation and software engineering.",
  keywords: [
    "Dumindu Ekanayaka",
    "Mechatronics Engineer",
    "Robotics Engineer",
    "Artificial Intelligence",
    "Industrial Automation",
    "Engineering Portfolio",
  ],
  openGraph: {
    title: "Dumindu Ekanayaka | Engineering & Technology Portfolio",
    description:
      "Exploring the intersection of engineering, intelligent systems and digital technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
