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
    ],
    footer: {
      message: 'chiblog was released under GPL-3.0 licnese.',
      copyright: 'Powered by <a href="https://im.chihuo2104.dev/" target="_blank">chihuo2104</a> & <a href="https://chinet.work/" target="_blank">chi Network</a> ©2022-<span id="now">now</span><script>document.getElementById("now").innerHTML=(new Date()).getFullYear();</script>'
    }
  }
}