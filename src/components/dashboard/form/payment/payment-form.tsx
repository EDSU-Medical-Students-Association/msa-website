"use client";

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Container } from "~/components/layouts/base/container";

import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormButton } from "~/components/ui/form-button";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "~/components/firebase/firebase";
import axios from "axios";
import {PaystackButton} from "react-paystack";

const paySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z
    .string()
    .regex(
      /^0[789]\d{9}$/,
      "Phone number must be a valid Nigerian phone number",
    ),
});

export type UserSignUpSchema = z.infer<typeof paySchema>;

const PaymentForm = () => {
  const form = useForm<z.infer<typeof paySchema>>({
    resolver: zodResolver(paySchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  useEffect(()=>{
    onAuthStateChanged(auth,(user:any)=>{
      setUser(user)
    })

  },[]);
  const { handleSubmit, control } = useForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const publicKey = "pk_test_10e67239dddf774c7bd5336d80e715a5b2b50876"
  const amount = 2065000
  const [user,setUser] = useState<any|null>();


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
          paymentType:"associationCollegeDues",
          paymentAmount:20650
        } ,
      };
      const response = await axios.request(options);
      console.log(response)
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
            alert('Payment Successful')
            savePaymentDetails(data);
        },
        onClose: () => alert("Wait! Don't leave :("),
    }

  const onSubmit = (values: z.infer<typeof paySchema>) => {
    console.log(values);
  };

  // @ts-ignore
  return (
    <section className="h-svh">
      <Container className="grid justify-center">
        <div className="py-6 text-center">
          <h2
            className={cn(crismonPro.variable, "font-serif text-4xl font-bold")}
          >
            Pay Association Dues
          </h2>
        </div>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="block">
              <div className="pb-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="name"
                          placeholder="Enter your full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="08000000000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid justify-center">
                <PaystackButton {...componentProps} />
              </div>
            </form>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default PaymentForm;
