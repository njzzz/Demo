// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [
  {
    path: '/customerManage',
    name: '客户管理中心',
    icon: 'el-icon-menu',
    children: [
      {
        path: '/manage',
        name: '客户管理中心',
      },
     /*  {
        path: '/myInfo',
        name: '我的信息',
      },
      {
        path: '/orderCenter',
        name: '订单中心',
      },
      {
        path: '/prodInfo',
        name: '产品信息',
      },
      {
        path: '/locationInfo',
        name: '地标信息',
      },
      {
        path: '/cityInfo',
        name: '城市信息',
      },
      {
        path: '/expCenter',
        name: '案例中心',
      },
      {
        path: 'realTimeDynamic',
        name: '实时动态',
      }, */
    ],
  },
  {
    path: '/customerInfoManage',
    name: '客户信息管理',
    icon: 'el-icon-date',
    children: [
      {
        path: '/customerInfo',
        name: '客服信息',
      },
      {
        path: '/customerStatistics',
        name: '客服统计',
      },
    ],
  },
  {
    path: '/userManage',
    name: 'C端用户管理',
    icon: 'el-icon-edit-outline',
    children: [
      {
        path: '/userInfo',
        name: '客户信息',
      },
      {
        path: '/userStatistics',
        name: '客户统计',
      },
    ],
  },
  {
    path: '/cityManage',
    name: '城市信息管理',
    icon: 'el-icon-picture-outline',
    children: [
      {
        path: '/cityInfo',
        name: '城市信息',
      },
      {
        path: '/cityDataStatistics',
        name: '城市数据统计',
      },
    ],
  },
  {
    path: '/landmarkManage',
    name: '地标信息管理',
    icon: 'el-icon-tickets',
    children: [
      {
        path: '/landmarkInfo',
        name: '地标信息',
      },
      {
        path: '/landmarkDataStatistics',
        name: '地标数据统计',
      },
    ],
  },
  {
    path: '/prodManage',
    name: '产品管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/prodInfo',
        name: '产品信息',
      },
      {
        path: '/prodInfoDataStatistics',
        name: '失败',
      },
    ],
  },
  {
    path: '/saleManage',
    name: '销售管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/saleDemands',
        name: '销售需求单',
      },
      {
        path: '/saleContract',
        name: '销售合同',
      },
      {
        path: '/makeContract',
        name: '制作需求单',
      },
      {
        path: '/saleStatistics',
        name: '销售统计',
      },
    ],
  },
  {
    path: '/mediaManage',
    name: '媒体库管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '媒体库信息',
      },
      {
        path: '/materialStatistics',
        name: '素材统计',
      }
    ],
  },
  /* ---------------- 以下路由未取名 ---------------- */
  {
    path: '/mediaManage',
    name: '案例库管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '投放案例信息',
      },
      {
        path: '/materialStatistics',
        name: '投放案例统计',
      }
    ],
  },
  {
    path: '/mediaManage',
    name: '投放内容制作管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '需求单查询',
      },
      {
        path: '/materialStatistics',
        name: '投放制作单',
      },
      {
        path: '/materialStatistics',
        name: '统计数据',
      }
    ],
  },
  {
    path: '/mediaManage',
    name: '投放成果管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '投放成果信息',
      },
      {
        path: '/materialStatistics',
        name: '投放成果统计',
      }
    ],
  },
  {
    path: '/mediaManage',
    name: '播控管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '播放发布',
      },
      {
        path: '/materialStatistics',
        name: '播放列表',
      },
      {
        path: '/materialStatistics',
        name: '统计播放数据',
      }
    ],
  },
  {
    path: '/mediaManage',
    name: '监播管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '实时监控',
      },
      {
        path: '/materialStatistics',
        name: '监控录像',
      },
      {
        path: '/materialStatistics',
        name: '⼈流量分析',
      },
      {
        path: '/materialStatistics',
        name: '⼆次曝光分析',
      },
      {
        path: '/materialStatistics',
        name: '数据统计',
      },
    ],
  },
  {
    path: '/mediaManage',
    name: '移动端管理中⼼(小程序端)',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '首页',
      },
      {
        path: '/materialStatistics',
        name: '照⽚墙',
      },
      {
        path: '/materialStatistics',
        name: '发现',
      },
      {
        path: '/materialStatistics',
        name: '免费拿',
      },
      {
        path: '/materialStatistics',
        name: '我的',
      },
    ],
  },
  {
    path: '/mediaManage',
    name: '审批中⼼管理',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '审核单据',
      },
      {
        path: '/materialStatistics',
        name: '撤销已审核单据',
      },
      {
        path: '/materialStatistics',
        name: '查询是审核记录',
      },
      {
        path: '/materialStatistics',
        name: '审核数据统计',
      },
    ],
  },
  {
    path: '/mediaManage',
    name: '智能报告⽣成',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '客户报告',
      },
      {
        path: '/materialStatistics',
        name: '移动⽤户报告',
      },
      {
        path: '/materialStatistics',
        name: '城市信息报告',
      },
      {
        path: '/materialStatistics',
        name: '产品信息报告',
      },
      {
        path: '/materialStatistics',
        name: '销售管理报告',
      },
      {
        path: '/materialStatistics',
        name: '审批中⼼报告',
      },
      {
        path: '/materialStatistics',
        name: '投放内容报告',
      },
      {
        path: '/materialStatistics',
        name: '媒体库报告',
      },
      {
        path: '/materialStatistics',
        name: '移动管理中⼼报告',
      },
      {
        path: '/materialStatistics',
        name: '智慧屏报告稿',
      },
      {
        path: '/materialStatistics',
        name: '监播管理报告',
      },
      {
        path: '/materialStatistics',
        name: '播控管理报告',
      },
      {
        path: '/materialStatistics',
        name: '案例库报告',
      },
      {
        path: '/materialStatistics',
        name: '投放成果报告',
      },
    ],
  },
  {
    path: '/mediaManage',
    name: '系统设置',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/mediaInfo',
        name: '客户中⼼管理设置',
      },
      {
        path: '/materialStatistics',
        name: '客户信息设置',
      },
      {
        path: '/materialStatistics',
        name: 'C⽤户信息设置',
      },
      {
        path: '/materialStatistics',
        name: '城市信息设置',
      },
      {
        path: '/materialStatistics',
        name: '地标信息设置',
      },
      {
        path: '/materialStatistics',
        name: '产品信息设置',
      },
      {
        path: '/materialStatistics',
        name: '销售管理设置',
      },
      {
        path: '/materialStatistics',
        name: '审批中⼼设置',
      },
      {
        path: '/materialStatistics',
        name: '投放内容制作设置',
      },
      {
        path: '/materialStatistics',
        name: '审批中⼼设置',
      },
      {
        path: '/materialStatistics',
        name: '智能报告设置',
      },
      {
        path: '/materialStatistics',
        name: '移动端设置',
      },
      {
        path: '/materialStatistics',
        name: '智慧屏设置',
      },
      {
        path: '/materialStatistics',
        name: '监播管理设置',
      },
      {
        path: '/materialStatistics',
        name: '播控管理设置',
      },
      {
        path: '/materialStatistics',
        name: '案例库设置',
      },
      {
        path: '/materialStatistics',
        name: '投放成果设置',
      },
      {
        path: '/materialStatistics',
        name: '企业信息设置',
      },
      {
        path: '/materialStatistics',
        name: '系统设置',
      },

    ],
  }
];

export { headerMenuConfig, asideMenuConfig };
