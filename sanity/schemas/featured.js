export default {
  name: "featured",
  title: "Categorias destacadas menú",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nombre categoria destacada",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Descripción",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
