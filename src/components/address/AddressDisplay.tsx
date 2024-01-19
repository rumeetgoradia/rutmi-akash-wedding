import { Address } from "@/app/constants";
import { cn } from "@/lib/utils";
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
  mapImage,
}: Address & { mapImage?: StaticImageData }) => {
  return (
    <div className={cn("flex gap-2 text-lg font-medium", mapImage && "mt-4")}>
      <MapPin height={20} className="mt-0.5" />
      <div className="leading-[1.3]">
        <Link
          href={googleMaps}
          className="text-primary hover:underline"
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
