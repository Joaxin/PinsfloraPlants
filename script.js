const NeteaseMusic = {
  // Plugin name
  name: 'NeteaseMusic',
  extend(api) {
    api.processMarkdown(text => {
      let musicbox = text.match(/\{N\d+\}/g);
      const player_pre = "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width=100% height=86 src='//music.163.com/outchain/player?type=2&id=";
      let player_after = "";
      if (musicbox) {
        musicbox.forEach(function (item, idx) {
          player_after = item.replace(/(^\s*)|(\s*$)/g, "").replace(/[{N}]/g, '') + "&auto=1&height=66'></iframe>"
          text = text.replace(item, player_pre + player_after)
        })
      }
      return text
    })
  }
}


new Docute({
  title: 'PinsfloraPlants',
  target: '#docute',
  sourcePath: './',
  layout: 'wide',
  plugins: [
    NeteaseMusic
  ],
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Docute',
      link: '/docute'
    },
  ],
  sidebar: [
    {
      title: '网站',
      link: '/web/websites'
    },
       {
      title: '作物',
      children: [
        {
          title: '陆地棉',
          link: '/docs/crop/陆地棉'
        },
        {
          title: '棉花',
          link: '/docs/crop/棉花'
        },
  ]
},
    {
      title: '树木',
      children: [
        {
          title: '木棉',
          link: '/docs/tree/木棉'
        },
        {
          title: '棉花',
          link: '/docs/crop/棉花'
        },
  ]
},
    {
      title: '花卉',
      children: [
        {
          title: '木棉',
          link: '/docs/tree/木棉'
        },
        {
          title: '棉花',
          link: '/docs/crop/棉花'
        },
  ]
},
    {
      title: '蔬菜',
      children: [
        {
          title: '木棉',
          link: '/docs/tree/木棉'
        },
        {
          title: '棉花',
          link: '/docs/crop/棉花'
        },
  ]
},
    {
      title: '水果',
      children: [
        {
          title: '木棉',
          link: '/docs/tree/木棉'
        },
        {
          title: '棉花',
          link: '/docs/crop/棉花'
        },
  ]
},
    // An external link
    {
      title: 'GitHub',
      link: 'https://github.com/Joaxin'
    }
  ],
})