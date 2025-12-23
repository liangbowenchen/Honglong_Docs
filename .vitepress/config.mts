import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head : [["link", { rel: 'icon', href: '/honglong.png' }]],
  srcDir: "docs",
  title: "Honglong Docs",
  description: "A VitePress Site",
 // base: "/Honglong_Docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/honglong.png',
    outline: 'deep',
    outlineTitle: 'On this page',
    search: {
      provider: 'local'
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
          { text: '培训文档', link: '/Mech/docs/training'},
          { text: '信息发布', link: '/Mech/docs/news'}
        ]},
      { text: '电控', 
        items: [
          { text: '介绍', link: '/ElecCtrl/'},
          { text: '培训文档', link: '/ElecCtrl/docs/training'},
          { text: '信息发布', link: '/ElecCtrl/docs/news'}
        ]},
      { text: '视觉', 
        items: [
          { text: '介绍', link: '/Vision/'},
          { text: '培训文档', link: '/Vision/docs/training'},
          { text: '信息发布', link: '/Vision/docs/news'}
        ]},
      { text: '运营', 
        items: [
          { text: '介绍', link: '/Operation/'},
          { text: '培训文档', link: '/Operation/docs/training'},
          { text: '信息发布', link: '/Operation/docs/news'}
        ]},
      { text: '关于泓龙', 
        items: [
          { text: '首页', link: '/'},
          { text: '关于我们', link: ' /honglong'},
          { text: '招新信息', link: ' /honglong/hl_news'}, 
        ]},
    ],

    sidebar: {
      'ElecCtrl/': [
       {
        text: '导航',
        items: [
          { text: '介绍', link: '/ElecCtrl/'},
          { text: '信息发布', link: '/ElecCtrl/docs/news'},
          { text: '培训文档', link: '/ElecCtrl/docs/training'},
          { text: '回到首页', link: '/'}
        ]
       }
      ],
      '/ElecCtrl/docs/training': [
      {
        text: '第0章 你缺的那门机器人课',
        collapsed: true,
        items: [
          { text: '计算机篇',
            collapsed: true,
            items: [ // 二级嵌套
              {
                text: '软件',
                link: '/guide/advanced/theming'
              },
              {
                text: '硬件',
                link: '/guide/advanced/performance'
              },
              {
                text: '网络',
                link: '/guide/advanced/performance'
              }
            ]},
          { text: '机器人篇',
            link: '/api-examples' 
          },
          { text: '开发工具篇',
            link: '/api-examples' ,
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
                text: 'Linux与ROS基础',
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
                text: 'Gazebo',
                link: '/guide/advanced/performance'
              },
              {
                text: 'Webots',
                link: '/guide/advanced/theming'
              },
              {
                text: 'MuJoCo',
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
          { text: '信息发布', link: '/Mech/docs/news'},
          { text: '培训文档', link: '/Mech/docs/training'},
          { text: '回到首页', link: '/'}

        ]
       }
      ],
       'Vision/': [
       {
        text: '导航',
        items: [
          { text: '介绍', link: '/Vision/'},
          { text: '信息发布', link: '/Vision/docs/news'},
          { text: '培训文档', link: '/Vision/docs/training'},         
          { text: '回到首页', link: '/'}
        ]
       }
      ],
       'Operation/': [
       {
        text: '导航',
        items: [
          { text: '介绍', link: '/Operation/'},
          { text: '信息发布', link: '/Operation/docs/news'},
          { text: '培训文档', link: '/Operation/docs/training'},
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
