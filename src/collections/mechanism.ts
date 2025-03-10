import type { CollectionConfig } from 'payload'

export const mechanism: CollectionConfig = {
  slug: 'mechanism',
  admin: {
    useAsTitle: 'name', // Set which field to use as the title in the admin UI
    hidden: true,
  },

  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
        name: 'status',
        type: 'select',
        options: [
            {
              label: 'active',
              value: 'active',
            },
            {
              label: 'inactive',
              value: 'inactive',
            },
           
          ],
      },
      {
        name: 'type',
        type: 'relationship',
       relationTo: 'firearms',
       
      },
   
  ],
}
