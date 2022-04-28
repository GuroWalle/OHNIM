export default {
   title: 'Contact',
   name: 'contact',
   type: 'document',
   fields: [
      {
         title: 'Gallery name',
         name: 'title',
         type: 'string',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Phone number',
         name: 'number',
         type: 'string',
         validation: Rule => Rule.required(),
      },
      {
         title: 'email',
         name: 'email',
         type: 'string',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Artist name',
         name: 'name',
         type: 'string',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Instagram link',
         name: 'link',
         type: 'url',
         validation: Rule => Rule.required(),
      }
   ]
}