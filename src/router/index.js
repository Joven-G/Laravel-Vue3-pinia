import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from './routes/auth'
import catalogueRoutes from './routes/catalogue'
import commissionManagerRoutes from './routes/comissionManager'
import dashboardRoutes from './routes/dashboards'
import errorRoutes from './routes/errors'
import mediaCenterRoutes from './routes/mediaCenter'
import memberManagementRoutes from './routes/memberManager'
import notifacationRoutes from './routes/notifacations'
import publicRoutes from './routes/publicRoutes'
import shopManagerRoutes from './routes/shopManager'
import systemCommunicationRoutes from './routes/system-communication'
import systemMasterDataRoutes from './routes/system-masterData'
import systemAccountRoutes from './routes/system-systemAccounts'
import systemTransactionRoutes from './routes/system-transactions'
import systemWharehouseRoutes from './routes/system-warehouse'
import userPaymentRoutes from './routes/user-payments'
import userSettingsRoutes from './routes/user-settings'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    { path: '/', redirect: '/dashboard' },

    ...publicRoutes,
    ...authRoutes,
    ...errorRoutes,
    ...setupLayouts(dashboardRoutes),
    ...setupLayouts(memberManagementRoutes),
    ...setupLayouts(commissionManagerRoutes),
    ...setupLayouts(catalogueRoutes),
    ...setupLayouts(shopManagerRoutes),
    ...setupLayouts(mediaCenterRoutes),
    ...setupLayouts(notifacationRoutes),
    ...setupLayouts(systemMasterDataRoutes),
    ...setupLayouts(systemCommunicationRoutes),
    ...setupLayouts(systemAccountRoutes),
    ...setupLayouts(systemWharehouseRoutes),
    ...setupLayouts(systemTransactionRoutes),
    ...setupLayouts(userSettingsRoutes),
    ...setupLayouts(userPaymentRoutes),

    // Add the error routes
    { path: '/:pathMatch(.*)*', redirect: 'error-404' }, // Wildcard route for unknown routes
  ],
})

export default router
