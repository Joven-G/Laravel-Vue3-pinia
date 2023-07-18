const mediaCenterRoutes = [
  {
    path: '/media-center',
    name: 'Media_Center',
    redirect: '/media-center/gallery',
    children: [
      {
        path: 'gallery',
        name: 'Media Gallery',
        component: () => import('@/views/pages/media-center/MediaGallery.vue'),
        meta: {
          pageTitle: 'Media Center',
          icon: 'tabler-photo',
          breadcrumb: [
            {
              text: 'Media Center',
              active: true,
            },
          ],
        },
      },
      {
        path: 'add',
        name: 'Media Add',
        component: () => import("@/views/pages/media-center/AddMedia.vue"),
        meta: {
          pageTitle: 'Media Center',
          icon: 'tabler-photo-plus',
          breadcrumb: [
            {
              text: 'Media Center',
              to: 'Media Gallery',
              active: true,
            },
            {
              text: 'Add',
              active: true,
            },
          ],
        },
      },
    ],
  },
]



export default mediaCenterRoutes
