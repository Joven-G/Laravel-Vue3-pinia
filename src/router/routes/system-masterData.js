const systemMasterDataRoutes = [
 
  {
    //MASTER PRODUCT

    path: "/masterdata/product",
    name: "master_product_container",
    component: () => import("@/views/pages/system-master-settings/master-product/IndexContainer.vue"),
    meta: {
      pageTitle: "Master Industry Container",
      breadcrumb: [
        {
          text: "Master Industry",
          active: true,
        },
      ],
    },
    children: [
      {
        alias: "/",
        path: "industry",
        name: "master_industry",
        component: () => import("@/views/pages/system-master-settings/master-product/Industry.vue"),
        meta: {
          pageTitle: "Master Industry",
          icon: 'tabler-building-factory-2',
          breadcrumb: [
            {
              text: "Master Product",
              active: true,
            },
            {
              text: "Industry",
              active: true,
            },
          ],
        },
      },
      {
        path: "brand",
        name: "master_brand",
        component: () => import("@/views/pages/system-master-settings/master-product/Brand.vue"),
        meta: {
          pageTitle: "Master Brand",
          icon: 'tabler-badge-tm',
          breadcrumb: [
            {
              text: "Master Product",
              active: true,
            },
            {
              text: "Brand",
              active: true,
            },
          ],
        },
      },
      {
        path: "product",
        name: "master_product",
        component: () => import("@/views/pages/system-master-settings/master-product/Product.vue"),
        meta: {
          pageTitle: "Master Product",
          icon: 'tabler-flask',
          breadcrumb: [
            {
              text: "Master Product",
              active: true,
            },
            {
              text: "Product",
              active: true,
            },
          ],
        },
      },
      {
        path: "uom",
        name: "master_uom",
        component: () => import("@/views/pages/system-master-settings/master-product/UoM.vue"),
        meta: {
          pageTitle: "Product",
          icon: 'tabler-package',
          breadcrumb: [
            {
              text: "Master Product",
              active: true,
            },
            {
              text: "Units of Measurement",
              active: true,
            },
          ],
        },
      },
    ],
  },

  // MASTER COUNTRY

  {
    path: "/masterdata/mastercountry",
    name: "master_country",
    component: () => import("@/views/pages/system-master-settings/master-country/MasterCountry.vue"),
    meta: {
      pageTitle: "Master Country",
      icon: 'tabler-world-check',
      breadcrumb: [
        {
          text: "Master Data",
          active: true,
        },
        {
          text: "Country",
          active: true,
        },
      ],
    },
  },

  // MASTER CONTRACTS

  {
    path: "/masterdata/mastercontracts",
    name: "master_contracts",
    component: () => import("@/views/pages/system-master-settings/master-contract/MasterContracts.vue"),
    meta: {
      pageTitle: "Master Contracts",
      icon: 'tabler-license',
      breadcrumb: [
        {
          text: "Master Data",
          active: true,
        },
        {
          text: "Contracts",
          active: true,
        },
      ],
    },
  },

  // MASTER ACCOUNT TYPES & PERMISSIONS

  {
    path: "/masterdata/master-roles",
    name: "master_roles_container",
    component: () => import("@/views/pages/system-master-settings/master-roles/IndexContainer.vue"),
    children: [
      {
        path: "roles",
        name: "Master Roles",
        component: () => import("@/views/pages/system-master-settings/master-roles/Roles.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Master Roles",
          icon: 'tabler-user-plus',
          breadcrumb: [
            {
              text: "Master Data",
              active: true,
            },
            {
              text: "Roles",
              active: true,
            },
          ],
        },
      },
      {
        path: "permissions",
        name: "Master Permissions",
        component: () => import("@/views/pages/system-master-settings/master-roles/Permissions.vue"),
        meta: {
          contentClass: "ecommerce-application",
          pageTitle: "Master Permissions",
          icon: 'tabler-lock',
          breadcrumb: [
            {
              text: "Master Data",
              active: true,
            },
            {
              text: "Permissions",
              active: true,
            },
          ],
        },
      },
    ],
  }, 
  
  // DEFAULT VARIABLES

  {
    path: "/masterdata/variables",
    name: "defaultvariables",
    component: () => import("@/views/pages/system-master-settings/master-defaults/DefaultVariables.vue"),
    meta: {
      pageTitle: "Default Variables",
      icon: 'tabler-adjustments-alt',
      breadcrumb: [
        {
          text: "Master Data",
          active: true,
        },
        {
          text: "Variables",
          active: true,
        },
      ],
    },
  },
]

export default systemMasterDataRoutes
