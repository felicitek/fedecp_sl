import type { CollectionConfig } from 'payload'
import { mechanism } from './mechanism'
import { relationship } from 'payload/shared'
import { Calibers } from './caliber'

export const firearms: CollectionConfig = {
  slug: 'firearms',
  admin: {
    useAsTitle: 'name', // Set which field to use as the title in the admin UI
  },

  fields: [
    {
      name: 'name',
      type: 'text',

    },
    {
        name: 'description',
        type: 'text',
    },
   /* {name: 'type',
      type: 'relationship',
      relationTo: ['calibers', 'mechanism', 'proprietaire', 'conditions', 'classe', 'coups', 'frame',],
    },*/

    {
        name: 'list',
        type: 'join',
        collection: ['calibers', 'mechanism', 'proprietaire', 'conditions', 'classe', 'coups', 'frame',],
        on: 'type',
        admin: {
          defaultColumns:['name', 'status', 'updated at']
        },
    },

  ],
}
