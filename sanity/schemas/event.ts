import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "guests",
      title: "Guests",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "guest" }],
        },
      ],
    }),
    defineField({
      name: "allowedEvents",
      title: "Allowed Events",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
        },
      ],
    }),
  ],
});
