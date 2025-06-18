<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1390909155&spec=640&img_type=jpg',
    name: 'EarthDLL',
    title: '维护/编辑/主程序/领导者',
    links: [
      { icon: 'github', link: 'https://github.com/EarthDLL' },
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3295999260&spec=640&img_type=jpg',
    name: 'cw1551',
    title: '维护/编辑/主程序',
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1003725607&spec=640&img_type=jpg',
    name: 'qcbby',
    title: '维护/编辑',
    links: [
      { icon: 'github', link: 'https://github.com/mcqcbby' },
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=251273640&spec=640&img_type=jpg',
    name: 'dyf189',
    title: '维护/编辑',
    links: [
      { icon: 'github', link: 'https://github.com/dyf189' },
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2629213042&spec=640&img_type=jpg',
    name: 'YYTZ666',
    title: '编辑/下载站',
    links: [
      { icon: 'github', link: 'https://github.com/YYTZ666' },
    ]
  },
    {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3028251364&spec=640&img_type=jpg',
    name: 'XiaoXiaoYang',
    title: '维护',
    links: [
      { icon: 'github', link: 'https://github.com/XiaoXiaoYang233' },
    ]
  },
    {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=100&spec=640&img_type=jpg',
    name: 'Antonbin ',
    title: '维护',
    links: [
      { icon: 'github', link: 'https://github.com/' },
    ]
  },
  {
    avatar: 'https://mirror.mengze2.cn/proxy/github.com/MengZe2l.png',
    name: 'MengZe2l',
    title: '维护/编辑(退出成员)',
    links: [
      { icon: 'github', link: 'https://github.com/MengZe2l' },
      { icon: 'x', link: 'https://x.com/MengZe2' }
    ]
  },
]
</script>

# USF维护团队

我们的插件/文档/官网维护团队

<VPTeamMembers size="small" :members="members" />
