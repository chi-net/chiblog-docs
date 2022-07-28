export default {
  title: 'chiblog',
  description: 'A light, concise and pluggable blogging platform',
  themeConfig:{
    sidebar: [
      {
        text: 'Get started',
        items: [{ text: 'Get started', link: 'get-started' }]
      },
      {
        text: 'Get started with chiblog',
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
        ]
      }
    ]
  }
}