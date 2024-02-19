"use client";

import { figtree, notoSerif } from "@/app/fonts";
import { Event } from "@/app/schedule/content";
import AddressDisplay from "@/components/address/AddressDisplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/styles";
import { RsvpInputSchema } from "@/server/api/routers/events.schema";
import { Guest } from "@/server/db/schema";
import { api } from "@/trpc/react";
import { RsvpInputs } from "@/trpc/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import {} from "@radix-ui/react-select";
import dateFormat from "dateformat";
import { Clock, Shirt } from "lucide-react";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { EMAIL_ADDRESS } from "@/app/constants";

type Rsvp = { guest: Guest; attending?: boolean };

const EventDisplay: React.FC<{
  event: Event;
  order: number;
  existingRsvps: Rsvp[];
  refetch: () => void;
}> = ({ event, order, existingRsvps, refetch }) => {
  const { dressCode, location, time, title, description } = event;

  return (
    <div className="grid w-full grid-cols-5 gap-6 px-4 py-6">
      <div className="col-span-5 flex w-full flex-col gap-6 md:col-span-3">
        <h3 className="font-noto text-2xl font-semibold">{title}</h3>
        <div className="font-figtree flex w-full flex-col gap-3 max-md:hidden">
          {description.primary.map((descPar) => (
            <p key={descPar}>{descPar}</p>
          ))}
        </div>
      </div>
      <div className="font-figtree col-span-5 flex w-full flex-col gap-2 text-foreground/80 md:col-span-2 md:pt-1">
        <div>
          <div className="flex gap-2 text-lg font-medium">
            <Clock height={20} className="mt-[1px]" />
            <div className="leading-[1.3]">{dateFormat(time, "h:MM TT")}</div>
          </div>
        </div>
        <div>
          {location.end ? (
            <div className="flex w-full flex-col gap-3">
              <div className="w-full">
                <div className="pl-[31px] text-sm font-bold uppercase tracking-tighter opacity-70">
                  START
                </div>
                <AddressDisplay {...location.start} />
              </div>
              <div className="w-full">
                <div className="pl-[31px] text-sm font-bold uppercase tracking-tighter opacity-70">
                  END
                </div>
                <AddressDisplay {...location.end} />
              </div>
            </div>
          ) : (
            <AddressDisplay {...location.start} />
          )}
        </div>
        <div>
          <div className="flex gap-2 text-lg font-medium">
            <Shirt height={20} className="mt-[1px]" />
            <div className="leading-[1.3]">
              <div>{dressCode.primary}</div>
              {dressCode.note && (
                <div className="text-sm font-light">{dressCode.note}</div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="flex-grow" /> */}
        <div className="mt-2 w-full">
          <RSVPDialog
            event={event}
            existingRsvps={existingRsvps}
            refetch={refetch}
          />
        </div>
      </div>
      {description.additional && (
        <div className="font-figtree col-span-5 flex w-full flex-col gap-3 text-sm opacity-70 max-md:hidden">
          {description.additional.map((descPar) => (
            <p key={descPar}>{descPar}</p>
          ))}
        </div>
      )}
      <div className="col-span-5 md:hidden">
        <div className="font-figtree flex w-full flex-col gap-3">
          {description.primary.map((descPar) => (
            <p key={descPar}>{descPar}</p>
          ))}
          {description.additional && (
            <>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger>More Info</AccordionTrigger>
                  <AccordionContent className="flex w-full flex-col gap-3">
                    {description.additional.map((descPar) => (
                      <p key={descPar}>{descPar}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;

const RSVPDialog: React.FC<{
  event: Event;
  existingRsvps: Rsvp[];
  refetch: () => void;
}> = ({ event: { title, time, id }, existingRsvps, refetch }) => {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();

  const orderedRsvps = existingRsvps.sort(
    (a, b) => a.guest.displayOrder - b.guest.displayOrder,
  );

  let guests: { [k: string]: Guest } = {};
  orderedRsvps.forEach(({ guest }) => (guests[guest.id] = guest));

  const utils = api.useUtils();

  const updateAttending = api.events.rsvp.useMutation({
    onSuccess(data, variables, context) {
      toast({
        variant: "default",
        description: (
          <div className={cn(figtree.className, "w-full")}>
            <div className="mb-4 text-lg font-medium leading-[1.2]">
              Updated RSVP for {title}!
            </div>
            <div>
              Thank you for submitting your party's RSVP for the {title} on{" "}
              {dateFormat(time, "mmmm d, yyyy")}. Please update your RSVP if
              anything changes!
            </div>
          </div>
        ),
      });
      setOpen(false);
      utils.events.eventsAndRsvps.invalidate();
    },
    onError(error, variables, context) {
      toast({
        description: (
          <div className="font-figtree w-full">
            <div className="mb-4 text-lg font-medium">
              Something went wrong!
            </div>
            <div>
              We ran into some issues while updating your party's RSVP. Please
              try again later, or{" "}
              <a href={`mailto:${EMAIL_ADDRESS}`} className="underline">
                contact us
              </a>{" "}
              for some extra help!
            </div>
          </div>
        ),
      });
    },
  });

  const onSubmit = async (data: RsvpInputs) => {
    await updateAttending.mutate(data);
  };

  const {
    control,
    register,
    formState: { errors, isSubmitting, isDirty, isValid, ...formState },
    ...form
  } = useForm<RsvpInputs>({
    defaultValues: {
      rsvpInput: orderedRsvps.map((rsvp) => ({
        event: id,
        guestId: rsvp.guest.id,
        attending: rsvp.attending,
      })),
    },
    resolver: zodResolver(RsvpInputSchema),
  });

  const { fields } = useFieldArray({
    control,
    name: "rsvpInput",
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="text-md w-full font-semibold uppercase tracking-wider text-background transition-[letter-spacing,background-color] hover:tracking-widest">
          RSVP
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed left-0 top-0 z-[9999] h-[100vh] w-[100vw] bg-foreground/80 backdrop-blur-sm" />
        <Dialog.Content className="DialogContent fixed left-1/2 top-1/2 z-[10000] max-h-[80vh] w-[90vw] max-w-screen-sm -translate-x-1/2 -translate-y-1/2 overflow-auto bg-background shadow-md shadow-black/50 sm:w-[400px]">
          <div className="relative flex w-full flex-col gap-3 bg-background p-6">
            <div className="flex w-full flex-col">
              <h3
                className={cn(
                  "font-noto text-2xl font-semibold leading-[1.2] md:text-3xl",
                  notoSerif.className,
                )}
              >
                {title}
              </h3>
              <h4
                className={cn(
                  "mt-1 text-lg font-light md:text-xl",
                  figtree.className,
                )}
              ></h4>
            </div>
            <Form
              {...form}
              control={control}
              register={register}
              formState={{
                ...formState,
                isSubmitting,
                errors,
                isDirty,
                isValid,
              }}
            >
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {fields.map((field, index) => {
                  const guest = guests[field.guestId];

                  return (
                    <div key={field.id} className="w-full">
                      <input
                        type="hidden"
                        {...register(`rsvpInput.${index}.guestId`)}
                        value={field.guestId}
                      />
                      <FormField
                        control={control}
                        name={`rsvpInput.${index}.attending`}
                        render={({ field }) => (
                          <FormItem>
                            <div className="grid w-full grid-cols-2 items-center justify-between gap-3 py-2">
                              <div
                                className={cn(
                                  figtree.className,
                                  "col-span-1 leading-[1.1] md:text-lg",
                                )}
                              >
                                {guest.firstName} {guest.lastName}
                              </div>
                              <div className="col-span-1 w-full">
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={
                                    field.value === undefined
                                      ? undefined
                                      : `${field.value}`
                                  }
                                >
                                  <FormControl
                                    className={cn(
                                      "w-full tracking-wide",
                                      field.value !== undefined
                                        ? "border-primary font-medium text-primary"
                                        : "font-light text-opacity-50",
                                    )}
                                  >
                                    <SelectTrigger
                                      className={cn(
                                        "w-full",
                                        errors.rsvpInput &&
                                          errors.rsvpInput[index]?.attending &&
                                          "placeholder:color-700 border-red-700 font-normal text-red-700 text-opacity-100",
                                      )}
                                    >
                                      <SelectValue placeholder="Attending?" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="true">
                                      Attending
                                    </SelectItem>
                                    <SelectItem value="false">
                                      Cannot attend
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  );
                })}
                <div className="mt-4 flex w-full flex-col items-center gap-1">
                  <Button
                    type="submit"
                    className="text-md w-full uppercase tracking-wider text-background transition-[letter-spacing,background-color] hover:tracking-widest"
                    disabled={isSubmitting || updateAttending.isLoading}
                  >
                    {isSubmitting || updateAttending.isLoading ? (
                      <div
                        className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    ) : (
                      "Save"
                    )}
                  </Button>
                  <Dialog.Close
                    asChild
                    disabled={
                      !isDirty ||
                      !isValid ||
                      isSubmitting ||
                      updateAttending.isLoading
                    }
                  >
                    <Button
                      variant="unstyled"
                      className="cursor-pointer text-sm uppercase tracking-wider hover:underline hover:underline-offset-4 "
                      disabled={isSubmitting || updateAttending.isLoading}
                    >
                      Cancel
                    </Button>
                  </Dialog.Close>
                </div>
              </form>
            </Form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
