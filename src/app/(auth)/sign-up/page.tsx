"use client";

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Container } from "~/components/layouts/base/container";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";

import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { useState } from "react"; // Import useState for managing state
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/components/firebase/firebase"; // Ensure the path is correct
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import green tick icon

const userSignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(7, "Password must be at least 7 characters long"),
});

export type UserSignUpSchema = z.infer<typeof userSignUpSchema>;

const SignUp = () => {
  const [message, setMessage] = useState({ text: "", type: "" }); // State for success or error messages
  const router = useRouter(); // Router for redirection
  const form = useForm<z.infer<typeof userSignUpSchema>>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof userSignUpSchema>) => {
    setMessage({ text: "", type: "" }); // Reset message state
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      setMessage({ text: "Account created successfully", type: "success" });
      setTimeout(() => {
        router.push("/"); // Redirect to home page after 2 seconds
      }, 2000);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setMessage({ text: "This account exists, login instead", type: "error" });
      } else {
        setMessage({ text: "Error creating account: " + error.message, type: "error" });
      }
    }
  };

  return (
    <section className="h-svh">
      <Container className="grid justify-center">
        <div className="py-6 text-center">
          <h2 className={cn(crismonPro.variable, "font-serif text-4xl font-bold")}>
            Create a New Account
          </h2>
        </div>
        <div className="">
          {message.text && (
            <div className={`pb-3 text-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {message.type === "success" && <AiOutlineCheckCircle className="inline-block mr-2" />}
              {message.text}
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
                          placeholder="john24.doe@edouniversity.edu.ng"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter your school email address.
                      </FormDescription>
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
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter a password that is at least 7 characters long.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid justify-center">
                <Button className="my-6" type="submit">
                  Create an account
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
                <span className="px-2">Sign up with Google</span>
              </Link>
            </Button>
          </div>
        </IconContext.Provider>

        <div>
          <p className="text-center text-sm text-neutral-600 hover:underline">
            <Link href="/sign-in">or log-in an existing account</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SignUp;
