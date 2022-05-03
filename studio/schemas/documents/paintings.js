export default {
   title: 'Paintings',
   name: 'paintings',
   type: 'document',
   fields: [
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
