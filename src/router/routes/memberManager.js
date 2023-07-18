const memberManagementRoutes = [
  {
    path: "/accounts",
    redirect: "/accounts/members",
    children: [
      {
        path: "members",
        name: "View Members",
        component: () => import("@/views/pages/member-manager/Members.vue"),
        meta: {
          pageTitle: "Member Management",
          icon: 'tabler-users',
          breadcrumb: [
            {
              text: "Member Management",
              active: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "Create Member",
        component: () => import("@/views/pages/member-manager/CreateMember.vue"),
        meta: {
          pageTitle: "Member Management",
          icon: 'tabler-user-plus',
          breadcrumb: [
            {
              text: "Create Member",
              active: true,
            },
          ],
        },
      },
      {
        path: "geoplotter",
        name: "Geoplotter",
        component: () => import("@/views/pages/member-manager/Geoplotter.vue"),
        meta: {
          pageTitle: "Geoplotter",
          icon: 'tabler-brand-google-maps',
          breadcrumb: [
            {
              text: "Geoplotter",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default memberManagementRoutes
