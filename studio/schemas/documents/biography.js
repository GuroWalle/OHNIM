export default {
   title: 'Biography',
   name: 'biography',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'string',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Description',
         name: 'description',
         type: 'text',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Quote',
         name: 'quote',
         type: 'text',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Image',
         name: 'image',
         type: 'image',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Image caption',
         name: 'caption',
         type: 'text',
         validation: Rule => Rule.required(),
      }
   ]
}