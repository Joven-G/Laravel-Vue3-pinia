const systemAccountRoutes = [
  {
    path: '/system/accounts',
    name: 'system_accounts',
    component: () => import("@/views/pages/system-system-accounts/SystemAccounts.vue"),
    meta: {
      pageTitle: 'System Accounts',
      icon: 'tabler-user',
      breadcrumb: [
        {
          text: 'Master Data',
          active: true,
        },
        {
          text: 'System Accounts',
          active: true,
        },
      ],
    },
  },
]

export default systemAccountRoutes
