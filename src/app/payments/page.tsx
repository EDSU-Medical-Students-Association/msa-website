"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/components/firebase/firebase";
import moment from 'moment';

export default function PaymentTable() {
    const [payments, setPayments] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>('');
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

    useEffect(() => {
        if (user!=null) {

            const response:any = fetchPaymentDetails();
            console.log(response)
        }
    }, [user]);

    useEffect(() => {
        if (payments) {
            console.log(payments)
        }
    }, [payments]);


    const fetchPaymentDetails = async () => {
        setLoading(true);
        try {
             const options = {
                method: "GET",
                url: "https://edsumsa-backend.onrender.com/getUserPayments",
                headers: {
                    accept: "application/json",
                    authorization: `Bearer ${user.accessToken}`
                },
            };
            const response = await axios.request(options);
            if(response.data.message==="NoPaymentsFound"){
                setLoading(false);
                return;
            }
            else {
                setLoading(false);
                setPayments(response.data);

            }

        }
        catch (err) {
            console.error('Error fetching payments:', err);
            setError('Failed to fetch payments');
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto">
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">S/N</th>
                        <th className="px-4 py-2">Payment For</th>
                        <th className="px-4 py-2">Reference ID</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Amount (₦)</th>
                    </tr>
                </thead>
                <tbody>
                    {payments ? payments.map((payment:any, index:any) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{payment?.paymentType}</td>
                            <td className="border px-4 py-2">{payment?.paymentId}</td>
                            <td className="border px-4 py-2">
                              {moment(payment.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                            </td>
                            <td className="border px-4 py-2">{payment?.paymentStatus}</td>
                            <td className="border px-4 py-2">{payment?.paymentAmount}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td  className="border px-4 py-2 text-center"><p>No Payment Made</p></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
