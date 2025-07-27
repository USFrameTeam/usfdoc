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
          { text: '问题Q&A', link: '/other.html' },
          { text: '手动适配USF插件', link: '/sdgx.html' },
          { text: '手动导入usf（服务器）', link: '/daoru.html' }
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
      copyright: '<font _mstmutation="1" _msttexthash="147502745" _msthash="1114"><a href="https://github.com/USFrameTeam" _mstmutation="1" _istranslated="1">USFrameTeam</a> 的 <a href="https://github.com/USFrameTeam" _mstmutation="1" _istranslated="1">Unkonw-Server-Framework-Docs</a> © 2025 根据 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" _mstmutation="1" _istranslated="1">CC BY-NC-SA 4.0</a> 获得许可</font><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">'
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
