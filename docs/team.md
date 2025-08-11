<script setup>
import { VPTeamPageTitle, 
         VPTeamPageSection,
         VPTeamMembers,
         VPTeamPage
} from 'vitepress/theme'

const USFrameTeam = [
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
    title: '维护/编辑/主程序/V3领导者',
    links: [
      { icon: 'github', link: 'https://github.com/commandwither' },
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1003725607&spec=640&img_type=jpg',
    name: 'qcbby',
    title: '维护/编辑/下载站',
    links: [
      { icon: 'github', link: 'https://github.com/mcqcbby' },
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=251273640&spec=640&img_type=jpg',
    name: 'dyf189',
    title: '维护/编辑/下载站/主程序',
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
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3342493690&spec=640&img_type=jpg',
    name: '兰那木涵',
    title: '维护/主程序',
    links: [
      { icon: 'github', link: 'https://github.com/MinecraftFish' },
    ]
  },
]

const Community = [
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3028251364&spec=640&img_type=jpg',
    name: 'XiaoXiaoYang',
    title: 'USF主程序维护',
    links: [
      { icon: 'github', link: 'https://github.com/XiaoXiaoYang233' },
    ]
  },
    {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=100&spec=640&img_type=jpg',
    name: 'Antonbin ',
    title: 'USF主程序维护',
  },
    {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2191695710&spec=640&img_type=jpg',
    name: '至尊版',
    title: 'USFV1第三方分支',
  },
  {
    avatar: 'https://mirror.mengze2.cn/proxy/github.com/MengZe2l.png',
    name: 'MengZe2l',
    title: '维护/编辑(退出成员)',
  },
]
</script>

# USF维护团队

我们的插件/文档/官网维护团队
<VPTeamPage>
  <VPTeamPageSection>
    <template #title> USF维护团队(USFrameTeam)</template>
    <template #members>
      <VPTeamMembers size="small" :members="USFrameTeam" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>USF社区贡献者</template>
    <template #members>
      <VPTeamMembers size="small" :members="Community" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>