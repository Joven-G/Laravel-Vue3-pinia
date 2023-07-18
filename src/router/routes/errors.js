const errorRoutes = [
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/pages/error404/Error404.vue"),
    meta: {
      pageTitle: "Error 404",
      layout: 'full',
      breadcrumb: [
        {
          text: "Error 404",
          active: true,
        },
      ],
    },
  },
]

export default errorRoutes
