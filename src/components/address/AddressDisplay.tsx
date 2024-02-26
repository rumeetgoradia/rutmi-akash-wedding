import { Address } from "./constants";
import { cn } from "@/lib/styles";
import { MapPin } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";

const AddressDisplay = ({
  googleMaps,
  title,
  street,
  city,
  state,
  zipCode,
}: Address) => {
  return (
    <div className={cn("flex gap-2 text-lg font-medium")}>
      <MapPin height={20} className="mt-0.5" />
      <div className="leading-[1.3]">
        <Link
          href={googleMaps}
          className="text-primary underline-offset-4 hover:underline "
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
  );
};

export default AddressDisplay;
