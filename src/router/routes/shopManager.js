const shopManagerRoutes = [
  {
    // SALES MANAGER

    path: "/sales-manager",
    name: "Sales Manager",
    component: () =>
      import("@/views/pages/shop-manager/sales-manager/Index.vue"),
    redirect: "sales-manager/actions",
    children: [
      {
        alias: "/",
        path: "actions",
        name: "SM Actions",
        component: () =>
          import("@/views/pages/shop-manager/sales-manager/Actions.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Actions Manager",
          icon: 'tabler-alert-circle',
          breadcrumb: [
            {
              text: "Actions Manager",
              active: true,
            },
          ],
        },
      },
      {
        path: "payments",
        name: "SM Payments",
        component: () =>
          import("@/views/pages/shop-manager/sales-manager/Payments.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Sales Manager",
          icon: 'tabler-cash',
          breadcrumb: [
            {
              text: "Payments",
              active: true,
            },
          ],
        },
      },
      {
        path: "my-stock",
        name: "SM MyStock",
        component: () =>
          import("@/views/pages/shop-manager/sales-manager/MyStock.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Sales Manager",
          icon: 'tabler-packages',
          breadcrumb: [
            {
              text: "My Stock",
              active: true,
            },
          ],
        },
      },
    ],
  },
  {
    // ADD MANAGE

    path: "/shop-manager",
    name: "Shop Manager",
    redirect: '/shop-manager/addmanage',
    children: [
      {
        path: "addmange",
        alias: "/",
        name: "SM AddManage",
        component: () =>
          import("@/views/pages/shop-manager/add-manage/AddManage.vue"),
        meta: {
          pageTitle: "Shop Manager",
          icon: 'tabler-building-store',
          breadcrumb: [
            {
              text: "Manage",
              active: true,
            },
          ],
        },
      },
      {
        path: "create",
        name: "SM CreateShop",
        component: () =>
          import("@/views/pages/shop-manager/add-manage/AddShop.vue"),
        meta: {
          pageTitle: "Shop Manager",
          icon: 'tabler-building-store',
          breadcrumb: [
            {
              text: "Manage",
              active: false,
              to: "/shop-manager",
            },
            {
              text: "Create",
              active: true,
            },
          ],
        },
      },

      //   {
      //     path: "",
      //     alias: "/",
      //     name: "shop_liability",
      //     component: Liability,
      //     children: [
      //       {
      //         path: "",
      //         name: "shop_liability_list",
      //         component: LiabilityList,
      //       },
      //     ],
      //   },

      {
        path: "/viewshop/:id",
        name: "shop_view",
        component: () =>
          import("@/views/pages/shop-manager/add-manage/ShopDetails.vue"),
        meta: {
          pageTitle: "Detail Shop",
          icon: 'tabler-building-store',
          breadcrumb: [
            {
              text: "Manage",
              active: false,
              to: "/shop-manager",
            },
            {
              text: "Shop Detail",
              active: true,
            },
          ],
        },
        children: [
          //   {
          //     path: "details",
          //     name: "shop_details",
          //     component: ShopDetails,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "key-person",
          //     name: "shop_key_person",
          //     component: KeyPerson,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "liability",
          //     name: "shop_detail_liability",
          //     component: ShopLiability,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "trading",
          //     name: "shop_detail_trading",
          //     component: ShopTrading,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "activity",
          //     name: "shop_detail_activity",
          //     component: ShopActivity,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "agents",
          //     name: "shop_detail_agents",
          //     component: ShopAgents,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
          //   {
          //     path: "google",
          //     name: "shop_detail_google",
          //     component: ShopGoogle,
          //     meta: {
          //       contentClass: "ecommerce-application",
          //     },
          //   },
        ],
      },
    ],
  },
  {
    // CONSIGNMENT

    path: "/consignment",
    redirect: "/consignment/request",
    component: () =>
      import("@/views/pages/shop-manager/consignment/IndexContainer.vue"),
    children: [
      {
        path: "request",
        alias: "/",
        name: "Consignment Request",
        component: () =>
          import("@/views/pages/shop-manager/consignment/Request.vue"),
        meta: {
          pageTitle: "Requests",
          icon: 'tabler-building-bank',
          breadcrumb: [
            {
              text: "Request",
              active: true,
            },
          ],
        },
      },
      {
        path: "offer",
        alias: "/",
        name: "Consignment Offer",
        component: () =>
          import("@/views/pages/shop-manager/consignment/Offer.vue"),
        meta: {
          pageTitle: "Offers",
          icon: 'tabler-receipt-refund',
          breadcrumb: [
            {
              text: "Consignment Offer",
              active: true,
            },
          ],
        },
      },
      {
        path: "open",
        alias: "/",
        name: "Consignment Open",
        component: () =>
          import("@/views/pages/shop-manager/consignment/Open.vue"),
        meta: {
          pageTitle: "Open",
          icon: 'tabler-file-invoice',
          breadcrumb: [
            {
              text: "Consignment Open",
              active: true,
            },
          ],
        },
      },
      {
        path: "completed",
        alias: "/",
        name: "Consignment Completed",
        component: () =>
          import("@/views/pages/shop-manager/consignment/Completed.vue"),
        meta: {
          pageTitle: "Completed",
          icon: 'tabler-certificate',
          breadcrumb: [
            {
              text: "Completed",
              active: true,
            },
          ],
        },
      },
    ],
  },
  {
    // CREDIT SCORE

    path: "/credit-score",
    name: "SM CreditScore",
    component: () =>
      import("@/views/pages/shop-manager/credit-score/CreditScore.vue"),
    meta: {
      contentClass: "ecommerce-application",
      pageTitle: "Credit Score",
      icon: "tabler-star",
      breadcrumb: [
        {
          text: "Credit Score",
          active: true,
        },
      ],
    },
  },
]

export default shopManagerRoutes
