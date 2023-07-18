const systemCommunicationRoutes = [
  {
    path: "/communication",
    redirect: "communication/announcements",
    children: [
      {
        path: "announcements",
        name: "announcements",
        component: () => import("@/views/pages/system-communication/Annoucements.vue"),
        meta: {
          pageTitle: "Announcements",
          icon: 'tabler-bell',
          breadcrumb: [
            {
              text: "Announcements",
              active: true,
            },
          ],
        },
      },
      {
        path: "whatsapp",
        name: "whatsapp",
        component: () => import("@/views/pages/system-communication/WhatsApp.vue"),
        meta: {
          pageTitle: "Whatsapp",
          icon: 'tabler-brand-whatsapp',
          breadcrumb: [
            {
              text: "Announcements",
              active: true,
            },
            {
              text: "Whatsapp",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default systemCommunicationRoutes
