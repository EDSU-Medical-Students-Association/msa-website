import type { Metadata } from "next";
import { BDOGrotesk } from "~/fonts";
import "./globals.scss";
import NavBar from "~/components/nav/nav-bar";

export const metadata: Metadata = {
  title: "EDSU MSA | Home",
  description:
    "EDSUMSA is a student-run organization dedicated to supporting and empowering medical students at Edo State University Uzairue. We provide academic resources, professional development opportunities, and a supportive community for future medical professionals.",
  keywords:
    "Edo State University Uzairue, Medical Students' Association, EDSUMSA, Nigeria, Medical Education, Medical Students, Future Doctors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BDOGrotesk.variable} font-sans`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
