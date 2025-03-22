import {defineType} from 'sanity'

export default defineType({
  name: 'competence',
  type: 'document',
  title: 'Home Page Competences',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Icone',
      name: 'icon',
      type: 'image',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
  ],
})
