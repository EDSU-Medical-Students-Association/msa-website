"use client"

// import type { Metadata } from "next";
import { BDOGrotesk } from "~/fonts";
// import "./globals.scss";
import { NavBar } from "~/components/dashboard/nav/nav-bar";
import { Container } from "~/components/layouts/base/container";
import Link from "next/link";
import { NavLogo } from "~/components/layouts/nav/nav-logo";
import { NavWordMark } from "~/components/layouts/nav/nav-word-mark";
import { Button } from "~/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "~/components/firebase/firebase";
// import { Footer } from "~/components/layouts/footer/footer";

// export const metadata: Metadata = {
//   title: "EDSU MSA | Home",
//   description:
//     "EDSUMSA is a student-run organization dedicated to supporting and empowering medical students at Edo State University Uzairue. We provide academic resources, professional development opportunities, and a supportive community for future medical professionals.",
//   keywords:
//     "Edo State University Uzairue, Medical Students' Association, EDSUMSA, Nigeria, Medical Education, Medical Students, Future Doctors",
// };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className={`${BDOGrotesk.variable} font-sans`}>
        <NavBar />
        <section className="h-svh w-screen overflow-y-scroll md:overflow-y-hidden">
          <Container className="grid grid-rows-xs-aside gap-2 py-10 md:grid-cols-dashboard md:grid-rows-1 md:gap-5">
            <aside className="grid h-full w-full grid-rows-3 rounded-sm bg-neutral-50 px-4 py-2 md:grid-rows-aside md:px-6 md:py-4">
              <section>
                <Link
                  href={"/"}
                  className="flex h-full w-full items-center gap-1 text-sm sm:gap-3"
                >
                  <NavLogo />
                  <NavWordMark />
                </Link>
              </section>
              <section className="flex flex-col gap-1 md:gap-3">
                <Button
                  variant={"secondary"}
                  asChild
                  className="w-full rounded-[10px]"
                >
                  <Link href={"/dashboard"}>Payment</Link>
                </Button>
                <Button
                  variant={"secondary"}
                  asChild
                  className="w-full rounded-[10px]"
                >
                  <Link href={"/payments"}>Payment History</Link>
                </Button>
              </section>
              <section className="pt-3">
                <Button className="w-full rounded-[10px]" variant={"ghost"} onClick={handleLogout}>
                  <span className="pr-3">
                    <ArrowLeftIcon />
                  </span>
                  Log out
                </Button>
              </section>
            </aside>
            <main className="w-full rounded-sm bg-green-50 px-6 py-4 md:overflow-y-scroll">
              {children}
            </main>
          </Container>
        </section>
      </body>
    </html>
  );
}
