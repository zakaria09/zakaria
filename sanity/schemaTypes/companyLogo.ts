import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logo',
  title: 'Company Logo Slider',
  type: 'document',
  fields: [
    defineField({
      title: 'Logo',
      name: 'logo',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      media: 'logo',
    },
  },
})
