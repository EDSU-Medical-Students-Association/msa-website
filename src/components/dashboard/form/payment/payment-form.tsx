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
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/components/firebase/firebase";
import axios from "axios";
import { PaystackButton } from "react-paystack";

interface PaystackButtonProps {
  email: string;
  amount: number;
  metadata: {
    name: string;
    phone: string;
    custom_fields: {
      display_name: string;
      variable_name: string;
      value: string;
    }[];
  };
  publicKey: string;
  text: string;
  onSuccess: (data: any) => void;
  onClose: () => void;
}

const paySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z
    .string()
    .regex(
      /^0[789]\d{9}$/,
      "Phone number must be a valid Nigerian phone number"
    ),
});

export type UserSignUpSchema = z.infer<typeof paySchema>;

const LoadingModal = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-lg font-bold mb-4">Processing Payment</h2>
      <p className="mb-4">Please do not leave this page until your payment details are saved.</p>
      <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin mx-auto"></div>
    </div>
  </div>
);

const PaymentForm = () => {
  const form = useForm<UserSignUpSchema>({
    resolver: zodResolver(paySchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      onAuthStateChanged(auth, (user: any) => {
        setUser(user);
      });
    };

    fetchUser();
  }, []);

  const [user, setUser] = useState<any | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const publicKey = "pk_live_d4651d30a8f745f579c4fcff28ea0e9007d158b9";
  const amount = 206500;

  const savePaymentDetails = async (data: any) => {
    setIsSaving(true);
    try {
      const options = {
        method: "POST",
        url: "https://edsumsa-backend.onrender.com/payment",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
        data: {
          paymentId: data.reference,
          paymentStatus: data.status,
          paymentType: "associationCollegeDues",
          paymentAmount: 20650,
        },
      };
      const response = await axios.request(options);
      console.log(response);
      setIsSaving(false);
      alert("Payment details saved successfully.");
    } catch (err) {
      console.log(err);
      setIsSaving(false);
      alert("Failed to save payment details.");
    }
  };

  const componentProps: PaystackButtonProps = {
    email: user?.email,
    amount: amount,
    metadata: {
      name: name,
      phone: phone,
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone,
        },
      ],
    },
    publicKey: publicKey,
    text: "Pay Now",
    onSuccess: (data: any) => {
      alert("Payment Successful");
      savePaymentDetails(data);
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform any additional actions on form submit if necessary
  };

  return (
    <section className="h-svh">
      <Container className="justify-center">
        <div className="py-6 text-center">
          <h2 className={cn(crismonPro.variable, "font-serif text-4xl font-bold")}>
            Pay Association Dues
          </h2>
        </div>
        <div className="">
          <Form {...form}>
            <form className="block" onSubmit={handleSubmit}>
              <div className="pb-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type="name" placeholder="Enter your full name" {...field} />
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
                        <Input type="tel" placeholder="08000000000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
            <div className="grid justify-center" style={{ marginTop: '2rem' }}>
              <PaystackButton {...componentProps} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" />
            </div>
          </Form>
        </div>
      </Container>
      {isSaving && <LoadingModal />}
    </section>
  );
};

export default PaymentForm;
