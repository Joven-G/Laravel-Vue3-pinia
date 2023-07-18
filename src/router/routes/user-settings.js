const userSettingsRoutes = [
  {
    path: "/settings/",
    redirect: "settings/account",
    meta: {
      layout: "full",
    },
    children: [
      {
        path: "account",
        name: "settings_account",
        component: () => import("@/views/pages/user-settings/Account.vue"),
        meta: {
          pageTitle: "Account Information",
          breadcrumb: [
            {
              text: "Account Information",
              active: true,
            },
          ],
        },
      },
      {
        path: "personal",
        name: "settings_personal",
        component: () => import("@/views/pages/user-settings/Personal.vue"),
        meta: {
          pageTitle: "Personal Information",
          breadcrumb: [
            {
              text: "Personal Information",
              active: true,
            },
          ],
        },
      },
      {
        path: "shipping",
        name: "settings_shipping",
        component: () => import("@/views/pages/user-settings/Shipping.vue"),
        meta: {
          pageTitle: "Shipping Information",
          breadcrumb: [
            {
              text: "Shipping Information",
              active: true,
            },
          ],
        },
      },
      {
        path: "password",
        name: "settings_password",
        component: () => import("@/views/pages/user-settings/ChangePassword.vue"),
        meta: {
          pageTitle: "Change Password",
          breadcrumb: [
            {
              text: "Change Password",
              active: true,
            },
          ],
        },
      },
      {
        path: "notifacations",
        name: "settings_notifacations",
        component: () => import("@/views/pages/user-settings/Notifications.vue"),
        meta: {
          pageTitle: "Notifacations",
          breadcrumb: [
            {
              text: "Notifcations",
              active: true,
            },
          ],
        },
      },
      {
        path: "marketsocial",
        name: "settings_marketsocial",
        component: () => import("@/views/pages/user-settings/MarketSocial.vue"),
        meta: {
          pageTitle: "Marketplace & Social",
          breadcrumb: [
            {
              text: "Marketplace & Social",
              active: true,
            },
          ],
        },
      },
      {
        path: "account",
        name: "settings_buissnessvalue",
        component: () => import("@/views/pages/user-settings/BusinessValue.vue"),
        meta: {
          pageTitle: "Buisness Value",
          breadcrumb: [
            {
              text: "Buisness Value",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default userSettingsRoutes
