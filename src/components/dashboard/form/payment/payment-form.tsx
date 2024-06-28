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

import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

  const onSubmit = (values: z.infer<typeof paySchema>) => {
    console.log(values);
  };

  return (
    <section className="h-svh">
      <Container className="grid justify-center">
        <div className="py-6 text-center">
          <h2
            className={cn(crismonPro.variable, "font-serif text-4xl font-bold")}
          >
            Enter your Details
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
                <Button className="my-6" type="submit">
                  Complete Dues Payment
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default PaymentForm;
