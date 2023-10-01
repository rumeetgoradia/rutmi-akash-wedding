import { defineField, defineType } from "sanity";

export default defineType({
  name: "party",
  title: "Party",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "partyName",
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
