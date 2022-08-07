export default {
  name: 'category',
  title: 'Menu Categoría',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre categoría',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagen de Categoría',
    },
  ],
}
