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
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Small Overview',
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
    {
      name: 'priority',
      type: 'number',
      title: 'Priority',
      description: 'Enter a number to prioritize this project. Lower numbers will appear first.'
    }
  ],
}
