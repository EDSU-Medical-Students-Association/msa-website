"use client";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/components/firebase/firebase";
import moment from 'moment';

export default function PaymentTable() {
    const [payments, setPayments] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (!currentUser) {
                setLoading(false);  // Stop loading if no user is authenticated
            }
        });

        return () => unsubscribe();
    }, []);

    const fetchPaymentDetails = useCallback(async () => {
        if (user) {
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
                if (response.data.message === "NoPaymentsFound") {
                    setPayments([]);
                } else {
                    setPayments(response.data);
                }
            } catch (err) {
                console.error('Error fetching payments:', err);
                setError('Failed to fetch payments');
            } finally {
                setLoading(false);
            }
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            fetchPaymentDetails();
        }
    }, [user, fetchPaymentDetails]);

    if (loading) return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
            Loading <span className="loading loading-dots loading-lg" style={{ marginLeft: '10px' }}></span>
        </div>
    );
    if (error) return <div>Error: {error}</div>;

    if (!user) {
        return <div>Please log in to view your payment details.</div>;
    }

    return (
        <div className="container mx-auto">
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="p-8"> All Payments</h3>
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
                    {payments && payments.length > 0 ? (
                        payments.map((payment: any, index: any) => (
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
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="border px-4 py-2 text-center"><p>No Payment Made</p></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
