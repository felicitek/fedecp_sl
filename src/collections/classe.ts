import type { CollectionConfig } from 'payload'

export const classe: CollectionConfig = {
  slug: 'classe',
  admin: {
    useAsTitle: 'nom', // Set which field to use as the title in the admin UI
    defaultColumns: ['nom', 'type', 'status'],
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
