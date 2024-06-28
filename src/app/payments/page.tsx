"use client";
import { Banner } from "~/components/about/banner/banner";
import { Hero } from "~/components/layouts/hero/hero";
import { Info } from "~/components/about/info/info";
import { Gallery } from "~/components/about/gallery/gallery";
import { Question } from "~/components/about/question/question";
import Support from "~/components/about/support/support";
import {useEffect, useState} from "react";
import {onAuthStateChanged}from"firebase/auth"
import {auth} from '../../components/firebase/firebase'
import { PaystackButton } from 'react-paystack'
import axios from "axios";


export default function About() {

    const publicKey = "pk_test_10e67239dddf774c7bd5336d80e715a5b2b50876"
    const amount = 1000000 // Remember, set in kobo!
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [user,setUser] = useState<any|null>();

    useEffect(()=>{
        onAuthStateChanged(auth,(user:any)=>{
            setUser(user)
        })

    },[]);


   const savePaymentDetails = async (data:any)=>{

              try {

                const options = {
                method: "POST",
                url: "http://localhost:8001/payment",
                headers: {
                    accept: "application/json",
                    authorization: `Bearer ${user.accessToken}`
                },
                data:{
                    paymentId:data.reference,
                    paymentStatus: data.status,
                    paymentType:"associationCollegeDues"
                  } ,
            };
            const responce = await axios.request(options);
            console.log(responce)

        }
        catch (err) {
            console.log(err);
        }

   }


    const componentProps = {
        email:user?.email,
        amount:amount,
        metadata: {
            name:name,
            phone:phone,
        },
        publicKey:publicKey,
        text: "Pay Now",
        onSuccess: (data:any) =>{
            savePaymentDetails(data);
        },
        onClose: () => alert("Wait! Don't leave :("),
    }

  // @ts-ignore
    return (
    <main className="text-base">
        <div >
            <h1>make payment</h1>
             <input placeholder="Enter name" type='text' onChange={(e)=>{setName(e.target.value)}}></input>
            <input placeholder="Enter phone number" type='text' onChange={(e)=>{setPhone(e.target.value)}}></input>
            <button>on click of button</button>
            <PaystackButton {...componentProps} />

        </div>
      <Info />
      <Support />


    </main>
  );
}
