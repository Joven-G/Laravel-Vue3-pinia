const systemWharehouseRoutes = [
  {
    // SYSTEM WAREHOUSE ROUTES

    path: "/warehouse/",
    redirect: "warehouse/manage",
    children: [
      {
        path: "manage",
        name: "warehouse_manage",
        component: () => import("@/views/pages/system-warehouse/Manage.vue"),
        meta: {
          pageTitle: 'Manage Warehouses',
          icon: 'tabler-building-warehouse',
          breadcrumb: [
            {
              text: 'Warehouse',
              active: true,
            },
            {
              text: 'Manage',
              active: true,
            },
          ],
        },
      },
      {
        path: "stockmanager",
        name: "warehouse_stockmanager",
        component: () => import("@/views/pages/system-warehouse/StockManager.vue"),
        meta: {
          pageTitle: 'Stock Manager',
          icon: 'tabler-forklift',
          breadcrumb: [
            {
              text: 'Warehouse',
              active: true,
            },
            {
              text: 'Stock Manager',
              active: true,
            },
          ],
        },
      },
      {
        path: "transactions",
        name: "warehouse_transactions",
        component: () => import("@/views/pages/system-warehouse/TransactionHistory.vue"),
        meta: {
          pageTitle: 'Stock Manager',
          icon: 'tabler-receipt-2',
          breadcrumb: [
            {
              text: 'Warehouse',
              active: true,
            },
            {
              text: 'Transactions',
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default systemWharehouseRoutes
