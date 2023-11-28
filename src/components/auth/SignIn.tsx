"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { SignInInputSchema } from "@/server/api/routers/auth.schema";
import { useGuestStore } from "@/store/guest";
import { api } from "@/trpc/react";
import { SignInInputs } from "@/trpc/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { guest, signIn } = useGuestStore();

  if (guest) {
    redirect("/");
  }

  const { toast } = useToast();

  const form = useForm<SignInInputs>({
    resolver: zodResolver(SignInInputSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const [showSpecifier, setShowSpecifier] = useState<boolean>(false);
  const watchSpecifierType = form.watch("specifierType");

  const [loading, setLoading] = useState<boolean>(false);

  const findUser = api.auth.signIn.useMutation({
    onMutate: () => {
      setLoading(true);
    },
    onSettled: () => {
      setLoading(false);
    },
    onSuccess: (result) => {
      console.log({ result });
      if (result.error) {
        switch (result.error.code) {
          case "WRONG_PASSWORD": {
            toast({
              variant: "destructive",
              title: "Wrong password!",
              description:
                "You submitted an invalid password. Please try again! Note: the password is case-sensitive.",
            });
            break;
          }
          case "NO_USER_FOUND": {
            toast({
              variant: "destructive",
              title: "We couldn't find you.",
              description:
                "We couldn't identify a guest with the information you entered. Please try with the information of someone else in your party, or contact Rutmi or Akash for extra assistance.",
            });
            break;
          }
          case "INTERNAL_SERVER_ERROR": {
            toast({
              variant: "destructive",
              title: "Something went wrong!",
              description:
                "We ran into some issues while looking you up. Please try again later, or contact Rutmi or Akash for extra assistance.",
            });
            break;
          }
          case "TOO_MANY_USERS_FOUND": {
            if (showSpecifier === false) {
              setShowSpecifier(true);
            } else {
              console.log("ooga bboogaa");
            }
            break;
          }
        }
      } else {
        signIn(result.guest);
      }
    },
  });

  const handleSubmit = async (data: SignInInputs) => {
    findUser.mutate(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid w-full max-w-screen-sm grid-cols-6 gap-4"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-3 w-full">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First name" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-3 w-full">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last name" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-6 w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {showSpecifier && (
          <>
            <p className="font-figtree text-md col-span-6 font-light text-foreground">
              There are multiple guests under that name. Please enter your
              party&apos;s primary email address or phone number to help us
              identify you.
            </p>
            <FormField
              control={form.control}
              name="specifierType"
              render={({ field }) => (
                <FormItem className="col-span-6 sm:col-span-2">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Specify..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="email">Email address</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-6 sm:col-span-4">
              {watchSpecifierType === "email" ? (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : watchSpecifierType === "phone" ? (
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Phone"
                          inputMode="numeric" // display numeric keyboard on mobile
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                <Input
                  disabled
                  className="w-full"
                  placeholder="Please select a specifier."
                />
              )}
            </div>
          </>
        )}
        <Button
          type="submit"
          disabled={loading}
          className="font-figtree col-span-6 mt-2 rounded-sm bg-primary/70 text-sm uppercase tracking-widest text-background transition-[background-color,opacity] hover:bg-primary/100 "
        >
          {loading ? <Spinner /> : "Enter"}
        </Button>
      </form>
    </Form>
  );
}
