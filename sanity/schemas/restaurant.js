export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nombre de restaurant",
      validation: (Rule) => Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Descripción",
      validation: (Rule) => Rule.max(500)
    },
    {
      name: "image",
      type: "image",
      title: "Imagen de restaurant"
    },
    {
      name: "lat",
      type: "number",
      title: "Latitud de restaurant"
    },
    {
      name: "long",
      type: "number",
      title: "Longitud de restaurant"
    },
    {
      name: "address",
      type: "string",
      title: "Dirección restaurant",
      validation: (Rule) => Rule.required()
    },
    {
      name: "rating",
      type: "number",
      title: "Ingresa rating (1-5 estrella)",
      validation: (Rule) =>
        Rule.required()
        .min(1)
        .max(5)
        .error("Ingresar un valor válido de 1 a 5")
    },
    {
      name: "type",
      title: "Categoria",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category"}]
      
    },
    {
      name:"dishes",
      type:"array",
      title:"Platos",
      of:[{type: "reference", to:[{type:"dish"}]}]
    }

  ],

  
}
