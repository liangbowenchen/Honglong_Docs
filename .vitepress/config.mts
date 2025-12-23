import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head : [["link", { rel: 'icon', href: '/honglong.png' }]],
  srcDir: "docs",
  title: "Honglong Docs",
  description: "西南石油大学RoboMaster泓龙战队文档站",
  //base: "/Honglong_Docs/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/honglong.png',
    outline: 'deep',
    outlineTitle: '目录',
    search: { provider: 'local'},
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
       { text: '机器人', 
        items: [
          { text: '步兵', link: '/Robot/infantry'},
          { text: '英雄', link: '/Robot/hero'},
          { text: '哨兵', link: '/Robot/sentry'},
          { text: '工程', link: '/Robot/engineer'},
          { text: '空中', link: '/Robot/aerial'},
        ]},
      { text: '机械', 
        items: [
          { text: '介绍', link: '/Mech/'},
          { text: '培训文档', link: '/Mech/training'},
          { text: '信息发布', link: '/Mech/news'}
        ]},
      { text: '电控', 
        items: [
          { text: '介绍', link: '/ElecCtrl/'},
          { text: '培训文档', link: '/ElecCtrl/training'},
          { text: '信息发布', link: '/ElecCtrl/news'}
        ]},
      { text: '视觉', 
        items: [
          { text: '介绍', link: '/Vision/'},
          { text: '培训文档', link: '/Vision/training'},
          { text: '信息发布', link: '/Vision/news'}
        ]},
      { text: '运营', 
        items: [
          { text: '介绍', link: '/Operation/'},
          { text: '培训文档', link: '/Operation/training'},
          { text: '信息发布', link: '/Operation/news'}
        ]},
      { text: '关于泓龙', 
        items: [
          { text: '首页', link: '/'},
          { text: '关于我们', link: ' /Honglong'},
          { text: '招新信息', link: ' /Honglong/hl_news'}, 
        ]},
    ],

    sidebar: {
      'ElecCtrl/': [
       {
        text: '导航',
        items: [
          { text: '介绍', link: '/ElecCtrl/'},
          { text: '信息发布', link: '/ElecCtrl/news'},
          { text: '培训文档', link: '/ElecCtrl/training'},
          { text: '回到首页', link: '/'}
        ]
       }
      ],
      '/ElecCtrl/training': [
      {
        text: '第0章 你缺的那门机器人课',
        collapsed: true,
        items: [
          { text: '计算机篇',
            link: '/ElecCtrl/training/00_robotics_basic/computer',
            collapsed: true,
            items: [ // 二级嵌套
              {
                text: '软件',
                link: '/ElecCtrl/training/00_robotics_basic/computer/software'
              },
              {
                text: '硬件',
                link: '/ElecCtrl/training/00_robotics_basic/computer/hardware'
              },
              {
                text: '网络',
                link: '/ElecCtrl/training/00_robotics_basic/computer/network'
              }
            ]},
          { text: '机器人篇',
            link: '/ElecCtrl/training/00_robotics_basic/robotics',
          },
          { text: '开发工具篇',
            link: '/ElecCtrl/training/00_robotics_basic/tools',
            collapsed: true,
            items: [ // 二级嵌套
              {
                text: 'C/C++与CMake',
                link: '/guide/advanced/theming'
              },
              {
                text: 'VSCode与Ozone',
                link: '/guide/advanced/performance'
              },
              {
                text: 'Git与GitHub',
                link: '/guide/advanced/performance'
              },
              {
                text: 'Linux常识与基础',
                link: '/guide/advanced/performance'
              }
            ]
          }
        ]},
      {
        text: '第1章 嵌入式',
        collapsed: true,
        items: [
          { text: '基础篇',
            link: '/api-examples' 
          },
          { text: '通信篇',
            collapsed: true,
            items: [ // 二级嵌套
              {
                text: '串口',
                link: '/guide/advanced/theming'
              },
              {
                text: 'can/fdcan',
                link: '/guide/advanced/performance'
              },
              {
                text: 'USB',
                link: '/guide/advanced/performance'
              }
            ]},
          { text: 'DMA篇',
            link: '/api-examples' 
          },
          { text: 'Linux篇',
            link: '/api-examples' ,
            items: [ // 二级嵌套
              {
                text: '内核基础',
                link: '/guide/advanced/theming'
              },
              {
                text: '设备树',
                link: '/guide/advanced/performance'
              },
              {
                text: 'Linux驱动',
                link: '/guide/advanced/performance'
              }
            ]
          },
        ]
      },
       {
        text: '第2章 算法与程序设计',
        collapsed: true,
        items: [
          { text: '控制篇',
            collapsed: true,
            items: [ // 二级嵌套
              {
                text: '普通反馈控制',
                link: '/guide/advanced/theming'
              },
              {
                text: '最优控制',
                link: '/guide/advanced/performance'
              },
              {
                text: '滤波器与观测器',
                link: '/guide/advanced/performance'
              }
            ]},
          { text: '框架篇',
            link: '/api-examples' ,
            collapsed: true,
             items: [ // 二级嵌套
              {
                text: '数据结构',
                link: '/guide/advanced/theming'
              },
            ]
          }
        ]
      },
       {
        text: '第3章 进阶，超级电控！',
        collapsed: true,
        items: [
          { text: '轮腿机器人篇',
            link: '/api-examples' ,
            collapsed: true,
            items: [ // 二级嵌套
              {
                text: '运动学解算与VMC',
                link: '/guide/advanced/theming'
              },
              {
                text: 'LQR系统建模',
                link: '/guide/advanced/performance'
              },
              {
                text: '唱,跳,rap,篮球(bushi)',  
                link: '/guide/advanced/performance'
              }
            ]
          },
          { text: '仿真篇',
            collapsed: true,
            items: [ 
              {
                text: 'Webots',
                link: '/guide/advanced/theming'
              },
              {
                text: 'MuJoCo',
                link: '/guide/advanced/performance'
              },
              {
                text: 'Issac',
                link: '/guide/advanced/performance'
              },
            ]},
          { text: '强化学习篇',
            link: '/api-examples' 
          },
        ]
      },
       {
        text: '番外',
        collapsed: true,
        items: [
          { text: '通信篇',
            collapsed: true,
            items: [ // 二级嵌套
              {
                text: '串口',
                link: '/guide/advanced/theming'
              },
              {
                text: 'can/fdcan',
                link: '/guide/advanced/performance'
              },
              {
                text: 'USB',
                link: '/guide/advanced/performance'
              }
            ]},
          { text: 'DMA篇',
            link: '/api-examples' 
          },
          { text: '框架篇',
            link: '/api-examples' 
          }
        ]
      },
      { text: '返回上级', link: '/ElecCtrl/' },
      ],
      'Mech/': [
       {
        text: '导航',
        items: [
          { text: '介绍', link: '/Mech/'},
          { text: '信息发布', link: '/Mech//news'},
          { text: '培训文档', link: '/Mech/training'},
          { text: '回到首页', link: '/'}

        ]
       }
      ],
       'Vision/': [
       {
        text: '导航',
        items: [
          { text: '介绍', link: '/Vision/'},
          { text: '信息发布', link: '/Vision/news'},
          { text: '培训文档', link: '/Vision/training'},         
          { text: '回到首页', link: '/'}
        ]
       }
      ],
       'Operation/': [
       {
        text: '导航',
        items: [
          { text: '介绍', link: '/Operation/'},
          { text: '信息发布', link: '/Operation/news'},
          { text: '培训文档', link: '/Operation/training'},
          { text: '回到首页', link: '/'}

        ]
       }
      ],
  },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liangbowenchen/Honglong_Docs' }
    ],
    footer: {
      copyright: 'Copyright © 2024-present honglong'
    },
  }   
})
