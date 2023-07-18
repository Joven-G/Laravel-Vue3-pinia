const authRoutes = [
  {
    path: '/login',
    name: '',
    redirect: '/auth/login',
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/authentication/Login.vue'),
        meta: {
          layout: "full",
        },
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('@/views/pages/authentication/ForgotPassword.vue'),
        meta: {
          layout: "full",
        },
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: () => import('@/views/pages/authentication/PasswordReset.vue'),
        meta: {
          layout: "full",
        },
      },
    ],
  },
  
]

export default authRoutes
