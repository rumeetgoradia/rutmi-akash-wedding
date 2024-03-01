"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import {
  MassEmailSchema,
  TEST_EMAILS,
} from "@/server/api/routers/admin.schema";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/styles";
import { EMAIL_ADDRESS } from "@/server/email/constants";
import { useToast } from "@/components/ui/use-toast";
import { figtree } from "@/app/fonts";
import MDEditor from "@uiw/react-md-editor";

const AdminEmailContent: React.FC = () => {
  const massEmail = api.admin.massEmail.useMutation();

  const {
    formState: { isSubmitting, isValid, ...formState },
    ...form
  } = useForm<z.infer<typeof MassEmailSchema>>({
    defaultValues: {
      title: "Rutmi & Akash",
      test: true,
      testEmail: EMAIL_ADDRESS,
    },
    resolver: zodResolver(MassEmailSchema),
  });

  const { toast } = useToast();

  const onSubmit = async (data: MassEmailSchema) => {
    massEmail.mutate(data, {
      onSuccess: (data) => {
        if (data.error) {
          toast({
            variant: "destructive",
            description: (
              <div className={cn(figtree.className, "w-full")}>
                <div className="mb-4 text-lg font-medium leading-[1.2]">
                  Something went wrong.
                </div>
                <div>
                  {data.error.name}: {data.error.message}.
                </div>
              </div>
            ),
          });
        } else {
          toast({
            variant: "default",
            description: (
              <div className={cn(figtree.className, "w-full")}>
                <div className="text-lg font-medium leading-[1.2]">
                  Successfully sent email!
                </div>
              </div>
            ),
          });
        }
      },
      onError(error, variables, context) {
        toast({
          variant: "destructive",
          description: (
            <div className={cn(figtree.className, "w-full")}>
              <div className="mb-4 text-lg font-medium leading-[1.2]">
                Something went wrong.
              </div>
              <div>{error.message}</div>
            </div>
          ),
        });
      },
    });
  };

  const watchTest = form.watch("test");

  return (
    <Form {...form} formState={{ ...formState, isSubmitting, isValid }}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="font-figtree grid w-full grid-cols-4 gap-4 md:gap-6"
      >
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="col-span-4 w-full sm:col-span-2">
              <FormLabel className="text-sm font-light">Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preview"
          render={({ field }) => (
            <FormItem className="col-span-4 w-full sm:col-span-2">
              <FormLabel className="text-sm font-light">Preview</FormLabel>
              <FormControl>
                <Input placeholder="Preview" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="col-span-4 w-full">
              <FormLabel className="text-sm font-light">Heading</FormLabel>
              <FormControl>
                <Input placeholder="Title" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem className="col-span-4 w-full">
              <FormLabel>Body</FormLabel>
              <FormControl>
                <MDEditor
                  {...field}
                  minHeight={500}
                  height={500}
                  className="font-figtree mt-0 flex h-10 w-full flex-col rounded-sm border border-slate-200 bg-background text-[16px] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-4 flex w-full items-center gap-4 max-sm:flex-wrap">
          <FormField
            control={form.control}
            name="test"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel className="text-sm font-light">Test?</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="testEmail"
            render={({ field }) => (
              <FormItem className="w-full flex-grow max-sm:-mt-2">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={!watchTest}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Test email" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TEST_EMAILS.map((email) => (
                      <SelectItem value={email} key={email}>
                        {email}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          variant="cta"
          className="col-span-4"
          disabled={isSubmitting || !isValid || massEmail.isLoading}
        >
          Send
        </Button>
      </form>
    </Form>
  );
};

export default AdminEmailContent;
