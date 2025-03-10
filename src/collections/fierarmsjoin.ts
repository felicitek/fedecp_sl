import type { CollectionConfig } from 'payload'
import { Calibers } from './caliber'
import { mechanism } from './mechanism'

export const firearmsjoin: CollectionConfig = {
  slug: 'firearmsjoin',
  admin: {
    useAsTitle: 'tag', // Set which field to use as the title in the admin UI
    hidden: true,
  },

  fields: [
    {
      name: 'tag',
      type: 'relationship',
      relationTo: 'firearms',
    },
    
    {
        name: 'definitiontype',
        type: 'relationship',
        relationTo: ['calibers', 'mechanism'
          ],
      }
      
   
  ],
}
