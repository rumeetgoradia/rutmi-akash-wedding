"use client";

import { checkParty, checkPassword } from "@/app/admin/AdminCheck";
import { figtree } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import Flower from "public/flower.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/styles";
import { useGuestStore, useHydration } from "@/store/guest";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { Content } from "@/components/layout/PageContent";
import LandingImage from "public/home/landing.jpeg";

const PasswordSubmissionSchema = z.object({
  password: z
    .string({ required_error: "Please enter the admin password." })
    .min(1, "Please enter the admin password."),
});

type PasswordSubmission = z.infer<typeof PasswordSubmissionSchema>;

const AdminLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { guest, validatedAdmin, setAdmin } = useGuestStore();
  const hydrated = useHydration();

  useEffect(() => {
    const checkAdminParty = async (party: string) => {
      const isAdminParty = await checkParty(party);
      return isAdminParty;
    };

    if ((guest && !checkAdminParty(guest.partyId)) || (!guest && hydrated)) {
      redirect("/");
    }
  }, [guest, hydrated]);

  return (
    <Content hero={LandingImage} title="Admin">
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full items-center justify-center">
          <Image src={Flower} alt="flower" className="h-20 w-auto" priority />
        </div>
        {guest && !validatedAdmin ? (
          <>
            <div className="font-noto w-full text-center font-light leading-[1.8] [text-wrap:balance]">
              <p>Please enter the admin password.</p>
            </div>
            <div className="flex w-full justify-center">
              <div className="w-full max-w-screen-sm">
                <AdminForm name={guest!.firstName} handleSuccess={setAdmin} />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full">{children}</div>
        )}
      </div>
    </Content>
  );
};

const AdminForm: React.FC<{ handleSuccess: () => void; name: string }> = ({
  name,
  handleSuccess,
}) => {
  const form = useForm<PasswordSubmission>({
    resolver: zodResolver(PasswordSubmissionSchema),
  });

  const { toast } = useToast();

  const onSubmit = async (data: PasswordSubmission) => {
    const matches = await checkPassword(data.password);

    if (matches) {
      toast({
        variant: "default",
        description: (
          <div className={cn(figtree.className, "w-full")}>
            <div className="mb-4 text-lg font-medium leading-[1.2]">
              Successfully logged in as admin.
            </div>
            <div>Welcome, {name}!</div>
          </div>
        ),
      });
      handleSuccess();
    } else {
      toast({
        variant: "destructive",
        description: (
          <div className={cn(figtree.className, "w-full")}>
            <div className="mb-4 text-lg font-medium leading-[1.2]">
              Wrong password.
            </div>
            <div>Please try again.</div>
          </div>
        ),
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="font-figtree grid w-full grid-cols-3 gap-4 md:gap-6"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-3 w-full sm:col-span-2">
              <FormLabel className="text-sm font-light">Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="cta"
          className="col-span-3 sm:col-span-1 sm:mt-[28px]"
        >
          Enter
        </Button>
        {/* <div className="col-span-1 flex h-full w-full items-end"></div> */}
      </form>
    </Form>
  );
};

export default AdminLayout;
