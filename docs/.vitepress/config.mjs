import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "USF官方文档站",
  description: "基于原版SAPI的无名氏服务器管理框架",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档首页', link: '/' },
      { text: '开发团队', link: '/team.html' },
      {
        text: '项目文档',
        items: [
          { text: '快速开始', link: '/quick-use.html' },
          { text: '手动导入', link: '/daoru.html' },
          { text: '领地使用方法', link: '/fief.html' },
          { text: '常见问题', link: '/faq.html' }
        ]
      },
      { text: '官方下载站', link: 'https://usfdown.zuyst.top' },
      { text: 'USFLog-Plus日志', link: 'https://usflogplus.zuyst.top/' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '快速开始', link: '/quick-use.html' },
          { text: '使用问题解答', link: '/faq.html' },
          { text: '更新日志', link: '/change-log.html' },
          { text: '版本对应表', link: '/edition.html' },
        ]
      },
     {
        text: '详细文档',
        items: [
         { text: '如何使用领地', link: '/fief.html' },
          { text: '如何使用商店', link: '/shop.html' },
          { text: '自定义菜单', link: '/menu.html' },
          { text: '问题Q&A', link: '/other.html' }
          { text: '手动适配USF插件', link: '/sdgx.html' },
          { text: '手动导入usf（服务器）', link: '/daoru.html' },
        ]
      },
      {
        text: '关于我们',
        items: [
          { text: '维护团队', link: '/team.html' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EarthDLL/Unknown-Server-Framework' }
    ],
    
    footer: {
      message: '全站使用署名-非商业使用许可协议协议授权.',
      copyright: 'Copyright © 2024-2025 <a href="https://www.usfpack.site">USF Team</a>'
    },
    
    editLink: {
      pattern: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=IzHiT0hbY4KuL28MOLIHKH1DcSq2Jnde&authKey=O7WwQ4UOKe0d%2BY25voz3S4wGNxYj6YQcZ0%2BuW4zo6L%2FnZI%2BBUOWCYD4UEIGzBoGq&noverify=0&group_code=118123500',
      text: '想参与编辑？有错误？联系我们！'
    },
    
    search: {
      provider: 'local',
    }
  }
})
