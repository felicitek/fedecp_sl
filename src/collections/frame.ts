import type { CollectionConfig } from 'payload'

export const frames: CollectionConfig = {
  slug: 'frame',
  admin: {
    useAsTitle: 'nom', // Set which field to use as the title in the admin UI
    hidden: true,
  },

  fields: [
    {
      name: 'nom',
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
