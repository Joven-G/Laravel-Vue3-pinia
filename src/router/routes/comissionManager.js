const commissionManagerRoutes = [
  {
    path: "/commission",
    redirect: "/commission/agent_manager",
    children: [
      {
        path: "rates_libary",
        name: "Rates Libary",
        component: () => import("@/views/pages/commission-manager/RatesLibary.vue"),
        meta: {
          pageTitle: 'Rates Libary',
          icon: 'tabler-businessplan',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Rates Libary',
              active: true,
            },
          ],
        },
      },
      {
        path: "default_rates",
        name: "Default Rates",
        component: () => import("@/views/pages/commission-manager/DefaultRates.vue"),
        meta: {
          pageTitle: 'Default Rates',
          icon: 'tabler-receipt-tax',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Default Rates',
              active: true,
            },
          ],
        },
      },
    ],
  },    
  {
    path: "/agent_manager",
    name: "Agent Manager",
    component: () => import("@/views/pages/commission-manager/AgentManager.vue"),
    children: [
      {
        path: "late_actions",
        name: "AM Late Actions",
        component: () => import("@/views/pages/commission-manager/agent-manager/LateActions.vue"),
        meta: {
          pageTitle: 'Late Actions',
          icon: 'tabler-zoom-exclamation',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Agent Manager',
              active: true,
            },
            {
              text: 'late Actions',
              active: true,
            },
          ],
        },
      },
      {
        path: "agents",
        name: "AM Agents",
        component: () => import("@/views/pages/commission-manager/agent-manager/Agents.vue"),
        meta: {
          pageTitle: 'My Agents',
          icon: 'tabler-users-group',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Agent Manager',
              active: true,
            },
            {
              text: 'My Agents',
              active: true,
            },
          ],
        },
      },
      {
        path: "shops",
        name: "AM Shops",
        component: () => import("@/views/pages/commission-manager/agent-manager/Shops.vue"),
        meta: {
          pageTitle: 'Shops',
          icon: 'tabler-building-store',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Agent Manager',
              active: true,
            },
            {
              text: 'Shops',
              active: true,
            },
          ],
        },
      },
    ],
  },

  {
    path: "/payments",
    name: "Commission Payments",
    component: () => import("@/views/pages/commission-manager/Payments.vue"),
    children: [
      {
        path: "commissions",
        name: "CP Commissions",
        component: () => import("@/views/pages/commission-manager/payments/Commissions.vue"),
        meta: {
          pageTitle: 'Commissions',
          icon: 'tabler-mood-dollar',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Payments',
              active: true,
            },
            {
              text: 'Commissions',
              active: true,
            },
          ],
        },
      },
      {
        path: "agentpurchases",
        name: "CP AgentPurchase",
        component: () => import("@/views/pages/commission-manager/payments/AgentPurchases.vue"),
        meta: {
          pageTitle: 'Agent Purchases',
          icon: 'tabler-receipt',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Payments',
              active: true,
            },
            {
              text: 'Purchases',
              active: true,
            },
          ],
        },
      },
      {
        path: "transactionhistory",
        alias: "",
        name: "CP TransactionHistory",
        component: () => import("@/views/pages/commission-manager/payments/TransactionHistory.vue"),
        meta: {
          pageTitle: 'Agent Purchases',
          icon: 'tabler-receipt-2',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Payments',
              active: true,
            },
            {
              text: 'Purchases',
              active: true,
            },
          ],
        },
      },
      {
        path: "admin",
        alias: "",
        name: "CP Admin",
        component: () => import("@/views/pages/commission-manager/payments/Admin.vue"),
        meta: {
          pageTitle: 'Admin',
          icon: 'tabler-lock',
          breadcrumb: [
            {
              text: 'Commission Manager',
              active: true,
            },
            {
              text: 'Payments',
              active: true,
            },
            {
              text: 'Admin',
              active: true,
            },
          ],
        },
      },
    ],
  },
]
  
      

export default commissionManagerRoutes
