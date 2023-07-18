const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    layout: "default",
    component: () => import("@/views/pages/dashboards/DashBoardSelector.vue"),
    meta: {
      pageTitle: "Dashboard",
      icon: 'tabler-home',
      layout: "default",
      breadcrumb: [
        {
          text: "Dashboard",
          active: true,
        },
      ],
    },
  },
]

export default dashboardRoutes
