"use client";

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Container } from "~/components/layouts/base/container";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";

import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { useState, useEffect } from "react"; // Import useState and useEffect for managing state and side effects
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/components/firebase/firebase"; // Updated import path

const userSignInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(7, "Password must be at least 7 characters long"),
});

export type UserSignUpSchema = z.infer<typeof userSignInSchema>;

const SignIn = () => {
  const [message, setMessage] = useState(""); // State for error messages
  const router = useRouter(); // Router for redirection
  const form = useForm<z.infer<typeof userSignInSchema>>({
    resolver: zodResolver(userSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      router.push("/"); // Redirect to home page if already signed in
    }
  }, [router]);

  const onSubmit = async (values: z.infer<typeof userSignInSchema>) => {
    setMessage(""); // Reset message state
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const idToken = await userCredential.user.getIdToken();
      localStorage.setItem("idToken", idToken);
      console.log("Signed in successfully:", userCredential.user);
      router.back(); // Redirect to the previous page or home page if none
    } catch (error: any) {
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        setMessage("Incorrect Email or password");
      } else {
        setMessage("Error signing in: " + error.message);
      }
    }
  };

  return (
    <section>
      <Container className="grid justify-center">
        <div className="py-6 text-center">
          <h2 className={cn(crismonPro.variable, "font-serif text-4xl font-bold")}>
            Log-in to Your Account
          </h2>
        </div>
        <div className="">
          {message && (
            <div className="pb-3 text-center text-red-600">
              {message}
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="block">
              <div className="pb-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="johndoe@gmail.com"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="jdxx2842"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid justify-center">
                <Button className="my-6" type="submit">
                  Sign in to your account
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div className="flex items-center justify-center py-3 font-thin">
            <Button variant={"outline"} asChild>
              <Link href={""}>
                <span>
                  <FcGoogle />
                </span>
                <span className="px-2">Sign in with Google</span>
              </Link>
            </Button>
          </div>
        </IconContext.Provider>
        <div>
          <p className="text-center text-sm text-neutral-600 hover:underline">
            <Link href="/sign-up">or create a new account</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SignIn;
