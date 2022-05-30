export default {
   title: 'Exhibitions',
   name: 'exhibitions',
   type: 'document',
   fields: [
      {
         title: 'Exhibition name',
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
         title: 'Image',
         name: 'image',
         type: 'image',
      },
      {
         title: 'Image caption',
         name: 'caption',
         type: 'text',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Start date of exhibition',
         name: 'year',
         type: 'date',
         options: {
            dateFormat: 'MMM YYYY',
         },
      }
   ]
}
