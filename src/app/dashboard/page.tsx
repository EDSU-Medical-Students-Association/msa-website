"use client";

import PaymentForm from "~/components/dashboard/form/payment/payment-form";
import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/components/firebase/firebase";

function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/sign-in');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
        Loading <span className="loading loading-dots loading-lg" style={{ marginLeft: '10px' }}></span>
      </div>
    );
  }

  const name = "Joseph@msa.com";
  const firstLetter = user.email ? user.email[0].toUpperCase() : '';

  return (
    <>
      <div style={{marginTop:'1rem'}} className="flex justify-between items-center mb-6">
        <div>
          <h6 className="text-2xl">Welcome, {user?.email}</h6>
        </div>
        <div>
          <div className="grid aspect-square w-10 place-items-center rounded-full bg-yellow-600">
            <p className="text-4xl">{firstLetter}</p>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="w-full max-w-md">
          <PaymentForm />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
