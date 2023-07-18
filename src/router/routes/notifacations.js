const notifacationRoutes = [
  {
    path: "/notifcations",
    name: "Notifcations",
    component: () => import("@/views/pages/notifications/Notifications.vue"),
    meta: {
      pageTitle: "Notifacation Feed",
      icon: 'tabler-bell-plus',
      breadcrumb: [
        {
          text: "Notifcation Feed",
          active: true,
        },
      ],
    },
  },
]

export default notifacationRoutes
