const catalogueRoutes = [
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: () => import('@/views/pages/catalogue/Catalogue.vue'),
    children: [
      {
        path: 'details/:productId',
        name: 'Product Details',
        component: () => import('@/views/pages/catalogue/ProductDetails.vue'),
        meta: {
          contentClass: 'ecommerce-application',
          pageTitle: 'Product Details',
          icon: 'tabler-book',
          breadcrumb: [
            {
              text: 'Catalogue',
              active: false,
              to: '/catalogue',
            },
            {
              text: 'Product Details',
              active: true,
            },
          ],
        },
      },
    ],
  },
  {
    path: '/cart',
    component: () => import('@/views/pages/catalogue/Cart.vue'),
    children: [
      {
        path: '',
        name: 'Cart',
        component: () => import('@/views/pages/catalogue/Cart.vue'),
        meta: {
          icon: 'tabler-shopping-cart',
          pageTitle: 'Cart',
          breadcrumb: [
            {
              text: 'Catalogue',
              active: true,
              to: '/catalogue',
            },
            {
              text: 'Cart',
              active: true,
            },
          ],
        },
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('@/views/pages/catalogue/Cart.vue'),
        meta: {
          pageTitle: 'Checkout',
          icon: 'tabler-shopping-cart',
          breadcrumb: [
            {
              text: 'Catalogue',
              active: true,
              to: '/catalogue',
            },
            {
              text: 'Checkout',
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default catalogueRoutes
