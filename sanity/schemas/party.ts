import { defineField, defineType } from "sanity";

export default defineType({
  name: "party",
  title: "Party",
  type: "document",
  fields: [
    defineField({
      name: "displayName",
      title: "Display Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "description",
    }),
    defineField({
      name: "dateTime",
      title: "Date & Time",
      type: "datetime",
    }),
    defineField({
      name: "dressCode",
      title: "Dress Code",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});
