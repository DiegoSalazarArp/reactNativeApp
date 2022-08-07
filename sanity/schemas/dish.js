export default {
  name: 'dish',
  title: 'Plato',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del plato',
      validation: (Rule) => Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Descripción",
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "price",
      type: "number",
      title: "Precio del plato"
    },
    {
      name: "image",
      type: "image",
      title: "Imagen del plato"
    }
  ]
  
}
