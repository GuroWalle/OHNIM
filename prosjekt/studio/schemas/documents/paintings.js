export default {
   title: 'Paintings',
   name: 'paintings',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'string',
         validation: Rule => Rule.required()
      },
      {
         title: 'Size',
         name: 'size',
         type: 'string',
         validation: Rule => Rule.required()
      },
      {
         title: 'Year',
         name: 'year',
         type: 'string',
         validation: Rule => Rule.required()
      },
      {
         title: 'Painting',
         name: 'painting',
         type: 'image',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Painting caption',
         name: 'caption',
         type: 'text',
         validation: Rule => Rule.required(),
      }
   ]
}
