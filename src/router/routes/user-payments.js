const userPaymentRoutes = [
  {
    path: '/my-payment',
    name: 'my-payment',
    component: () => import("@/views/pages/user-payments/IndexContainer.vue"),
    children: [
      {
        path: 'pending',
        alias: '/',
        name: 'my-payment-pending',
        component: () => import("@/views/pages/user-payments/Pending.vue"),
        meta: {
          contentClass: 'ecommerce-application',
          pageTitle: 'My Payment',
          breadcrumb: [
            {
              text: 'My Payment',
            },
            {
              text: 'Pending',
              active: true,
            },
          ],
        },
      },
      {
        path: 'shipping',
        name: 'my-payment-shipping',
        component: () => import("@/views/pages/user-payments/Shipping.vue"),
        meta: {
          contentClass: 'ecommerce-application',
          pageTitle: 'My Payment',
          breadcrumb: [
            {
              text: 'My Payment',
            },
            {
              text: 'Shipping',
              active: true,
            },
          ],
        },
      },
      {
        path: 'consignment',
        name: 'my-payment-consignment',
        component: () => import("@/views/pages/user-payments/Consignment.vue"),
        meta: {
          contentClass: 'ecommerce-application',
          pageTitle: 'My Payment',
          breadcrumb: [
            {
              text: 'My Payment',
            },
            {
              text: 'Consignment',
              active: true,
            },
          ],
        },
      },
      {
        path: 'commission',
        name: 'my-payment-commission',
        component: () => import("@/views/pages/user-payments/Commission.vue"),
        meta: {
          contentClass: 'ecommerce-application',
          pageTitle: 'My Payment',
          breadcrumb: [
            {
              text: 'My Payment',
            },
            {
              text: 'Commission',
              active: true,
            },
          ],
        },
      },
      {
        path: 'bank-information',
        name: 'my-payment-bank-information',
        component: () => import("@/views/pages/user-payments/BankInformation.vue"),
        meta: {
          contentClass: 'ecommerce-application',
          pageTitle: 'My Payment',
          breadcrumb: [
            {
              text: 'My Payment',
            },
            {
              text: 'Bank Information',
              active: true,
            },
          ],
        },
      },
    ],
    meta: {
      pageTitle: 'My Payment',
      breadcrumb: [
        {
          text: 'My Payment',
          active: true,
        },
      ],
    },
  },
]

export default userPaymentRoutes
