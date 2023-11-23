import { Event } from "@/app/schedule/content";

const EventDisplay: React.FC<{ event: Event; order: number }> = ({
  event,
  order,
}) => {
  return (
    <div className="px-4 py-6">
      <h3 className="font-noto text-2xl font-light tracking-wide">
        {event.title}
      </h3>
    </div>
  );
};

export default EventDisplay;
