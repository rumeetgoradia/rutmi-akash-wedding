"use client";

import { Address, Event } from "@/app/schedule/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dateFormat from "dateformat";
import { Clock, MapPin, Shirt } from "lucide-react";
import Link from "next/link";

const EventDisplay: React.FC<{ event: Event; order: number }> = ({
  event: { dressCode, location, time, title, description },
  order,
}) => {
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
                  <AccordionContent>
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

const AddressDisplay = ({
  googleMaps,
  title,
  street,
  city,
  state,
  zipCode,
}: Address) => {
  return (
    <div>
      <div className="flex gap-2 text-lg font-medium">
        <MapPin height={20} className="mt-0.5" />
        <div className="leading-[1.3]">
          <Link
            href={googleMaps}
            className="text-primary hover:underline "
            title={title}
          >
            {title}
          </Link>
          <div className="text-sm font-light">
            <div>{street}</div>
            <div>
              {city}, {state} {zipCode}
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[30px]"></div>
    </div>
  );
};
