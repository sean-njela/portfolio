// @ts-nocheck
/* eslint-disable */

export default {
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Technology Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'logoUrl',
      title: 'Logo URL',
      type: 'url',
      description: 'Paste the direct link to the logo image (e.g. SVG or PNG)',
    },
    {
      name: 'color',
      title: 'Brand Color',
      type: 'string',
      description: 'Use hex format (e.g., #61DBFB)',
    },
  ],
};
