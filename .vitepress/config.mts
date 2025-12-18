import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "Honglong Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    outline: 'deep',
    outlineTitle: 'On this page',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '电控', 
        items: [
          { text: '介绍', link: '/ElecCtrl/'},
          { text: '文档', link: '/ElecCtrl/'},
          { text: '项目', link: '/ElecCtrl/projects'}
        ]},
      { text: '视觉', link: '/api-examples' },
      { text: '机械', link: '/guide/getting-started' },
      { text: '其他', link: '/guide/advanced/performance' }
    ],

    sidebar: {
      '/ElecCtrl': [
      {
        text: '第0章 你缺的那门机器人课',
        collapsed: false,
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
        collapsed: false,
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
        collapsed: false,
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
        collapsed: false,
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
        collapsed: false,
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
      }
    ],
  },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: 'Copyright © 2024-present honglong'
    },
  }   
})
