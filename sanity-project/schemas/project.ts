export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Before You Click',
    },
    {
      name: 'instructions',
      type: 'array',
      title: 'Instructions',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      name: 'githubRepo',
      type: 'string',
      title: 'GitHub Repo',
    },
    {
      name: 'backendRepo',
      type: 'string',
      title: 'Backend Repo',
    },
  ],
}
