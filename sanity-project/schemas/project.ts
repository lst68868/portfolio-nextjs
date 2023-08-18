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
      title: 'Small Overview',
    },
    {
      name: 'paragraph1',
      type: 'text',
      title: 'Paragraph 1',
    },
    {
      name: 'paragraph2',
      type: 'text',
      title: 'Paragraph 2',
    },
    {
      name: 'paragraph3',
      type: 'text',
      title: 'Paragraph 3',
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
