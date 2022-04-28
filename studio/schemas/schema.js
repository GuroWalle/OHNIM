import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import contact from './documents/contact.js'
import biography from './documents/biography.js'
import exhibitions from './documents/exhibitions.js'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    exhibitions,
    biography,
    contact,
  ]),
})
