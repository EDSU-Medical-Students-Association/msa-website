"use client"

import PaymentForm from "~/components/dashboard/form/payment/payment-form";
import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "~/components/firebase/firebase";

function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // @ts-ignore
        setUser(currentUser);
      } else {
        // Redirect to login page if not authenticated
        router.push('/sign-in');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>; // Show loading state or a spinner until the auth state is confirmed
  }
  const name = "Joseph@msa.com";
  // @ts-ignore
  const firstLetter = user.email ? user.email[0].toUpperCase() : '';
  // @ts-ignore
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h6 className="text-2xl">Welcome, {name}</h6>
        </div>

        <div>
          <div className="grid aspect-square w-10 place-items-center rounded-full bg-yellow-600">
            <p className="text-4xl">{firstLetter}</p>
          </div>
        </div>
      </div>
      <div className="grid h-full place-items-center ">
        <PaymentForm />
      </div>
    </>
  );
}

export default Dashboard;
