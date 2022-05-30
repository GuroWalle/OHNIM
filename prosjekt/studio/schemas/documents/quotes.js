export default {
   title: 'Quotes',
   name: 'quotes',
   type: 'document',
   fields: [
      {
         title: 'Quote',
         name: 'quote',
         type: 'text',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Author',
         name: 'author',
         type: 'string',
         validation: Rule => Rule.required(),
      }

   ]
}
