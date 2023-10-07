import { defineField, defineType } from "sanity";

export default defineType({
  title: "Address",
  name: "address",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "street", type: "string", title: "Street address" }),
    defineField({ name: "city", type: "string", title: "City" }),
    defineField({ name: "state", type: "string", title: "State" }),
    defineField({ name: "zip", type: "string", title: "Zip code" }),
  ],
});
