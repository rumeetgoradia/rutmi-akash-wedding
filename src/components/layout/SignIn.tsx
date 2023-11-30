"use client";

import { EMAIL_ADDRESS } from "@/app/constants";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { SignInInputSchema } from "@/server/api/routers/auth.schema";
import { Guest, Party } from "@/server/db/schema";
import { useGuestStore } from "@/store/guest";
import { api } from "@/trpc/react";
import { SignInInputs } from "@/trpc/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Flower from "public/flower.png";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full items-center justify-center ">
        <Image src={Flower} alt="flower" className="h-20 w-auto" priority />
      </div>
      <div className="font-noto w-full text-center font-light leading-[1.8] [text-wrap:balance]">
        <p className="mb-4">
          We can&apos;t wait to share our special day with you!
        </p>
        <p>
          Please sign in with your information and the password provided to you
          to navigate our website.
        </p>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-screen-sm">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

const SignInForm = () => {
  const { signIn } = useGuestStore();

  const { toast } = useToast();

  const form = useForm<SignInInputs>({
    resolver: zodResolver(SignInInputSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const [multipleFoundGuests, setMultipleFoundGuests] =
    useState<{ guest: Guest; party: Party }[]>();

  const [loading, setLoading] = useState<boolean>(false);

  const findUser = api.auth.signIn.useMutation({
    onMutate: () => {
      setLoading(true);
    },
    onSettled: () => {
      setLoading(false);
    },
    onSuccess: (result) => {
      const { foundGuests, error } = result;
      if (error) {
        switch (error.code) {
          case "WRONG_PASSWORD": {
            toast({
              variant: "destructive",
              title: "Wrong password!",
              description:
                "You submitted an invalid password. Please try again! Note: the password is case-sensitive.",
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
        }
      } else {
        if (foundGuests.length === 0) {
          toast({
            variant: "destructive",
            description: (
              <div className="font-figtree w-full">
                <div className="mb-4 text-lg font-medium">
                  We couldn&apos;t find you.
                </div>
                <div className="mb-3">
                  There are not any registered guests with the information you
                  entered. Please check your input or try again with the
                  information of someone else in your party.
                </div>
                <div>
                  Please feel free to{" "}
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="underline">
                    contact us
                  </a>{" "}
                  for some extra help!
                </div>
              </div>
            ),
          });
          return;
        }

        if (foundGuests.length > 1) {
          setMultipleFoundGuests(foundGuests);
          return;
        }

        signIn(foundGuests[0].guest);
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
        className="font-figtree grid w-full grid-cols-6 gap-4 md:gap-6"
      >
        {!multipleFoundGuests && (
          <>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="col-span-3 w-full">
                  <FormLabel className="text-sm font-light">
                    First Name
                  </FormLabel>
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
                  <FormLabel className="text-sm font-light">
                    Last Name
                  </FormLabel>
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
                  <FormLabel className="text-sm font-light">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        {multipleFoundGuests && multipleFoundGuests.length && (
          <>
            <div className="col-span-6 flex w-full flex-col">
              <p className="italic text-foreground">
                There are multiple guests under that name. Please choose the
                option that matches with your party&apos;s contact information.{" "}
                <span
                  className="cursor-pointer text-primary hover:underline"
                  onClick={() => {
                    setMultipleFoundGuests(undefined);
                  }}
                >
                  Or, try again with a different name.
                </span>
              </p>
            </div>
            <div className="col-span-6 ">
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value?.toString()}
                        className="grid grid-cols-2 gap-4"
                      >
                        {multipleFoundGuests.map(({ guest, party }) => {
                          // console.log({ guest: guest.id, field: field.value });
                          return (
                            <FormItem
                              className="col-span-2 flex w-full space-x-3 space-y-0 px-4 py-1 md:col-span-1"
                              key={guest.id}
                            >
                              <FormControl>
                                <RadioGroupItem value={guest.id.toString()} />
                              </FormControl>
                              <FormLabel
                                className={cn(
                                  guest.id.toString() ===
                                    field.value?.toString() && "text-primary",
                                  "cursor-pointer leading-[1.3] transition-colors",
                                )}
                              >
                                <div className="-mt-[4px] text-base font-semibold">
                                  {guest.firstName} {guest.lastName}
                                </div>
                                {party.email && (
                                  <div className="text-sm font-light">
                                    {party.email}
                                  </div>
                                )}
                                {party.phone && (
                                  <div className="text-sm font-light">
                                    {getFormattedPhoneNumber(party.phone)}
                                  </div>
                                )}
                              </FormLabel>
                            </FormItem>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}
        <Button
          type="submit"
          disabled={loading}
          className="font-figtree col-span-6 mt-2 rounded-sm bg-primary/70 text-sm uppercase tracking-widest text-background transition-[background-color,opacity] hover:bg-primary/100 "
        >
          {loading ? (
            <div
              className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            "Enter"
          )}
        </Button>
      </form>
    </Form>
  );
};

const getFormattedPhoneNumber = (phone: string): string => {
  try {
    return `(${phone.substring(0, 3)}) ${phone.substring(
      3,
      6,
    )}-${phone.substring(6)}`;
  } catch (error) {
    return phone;
  }
};
