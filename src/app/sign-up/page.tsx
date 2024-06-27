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

export const userSignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(7, "Password must be at least 6 characters long"),
});

export type UserSignUpSchema = z.infer<typeof userSignUpSchema>;

const SignUp = () => {
  const form = useForm<z.infer<typeof userSignUpSchema>>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof userSignUpSchema>) => {
    console.log(values);
  };

  return (
    <section>
      <Container className="grid justify-center">
        <div className="py-6 text-center">
          <h2
            className={cn(crismonPro.variable, "font-serif text-4xl font-bold")}
          >
            Create a New Account
          </h2>
        </div>
        <div className="">
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
                      <FormDescription>
                        Usage: vital documents and information
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
                          placeholder="jdxx2842"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Should not be obvious phrases.
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
