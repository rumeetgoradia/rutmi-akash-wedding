import { defineField, defineType } from "sanity";

export default defineType({
  name: "guest",
  title: "Guest",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
  ],
});
