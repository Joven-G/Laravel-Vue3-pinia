const PublicRoutes = [
  {
    // INVITE USER ROUTES

    path: "/inviteuser/",
    redirect: "/",
    meta: {
      layout: "full",
    },
    children: [
      {
        path: ":agentId",
        name: "inviteuser",
        component: () =>
          import("@/views/pages/public-routes/invite/LandingPage.vue"),
        meta: {
          layout: "full",
        },
      },
      {
        path: ":agentId/register",
        name: "inviteuser register",
        component: () =>
          import("@/views/pages/public-routes/invite/Registration.vue"),
        meta: {
          layout: "full",
        },
      },
      {
        path: "expired",
        name: "invite_expired",
        component: () =>import("@/views/pages/public-routes/invite/InviteExpired.vue"),
        meta: {
          layout: "full",
        },
      },
    ],
  },
  {
    // AGENT CHECK ROUTES

    path: "/agentcheck/",
    name: "search_agent",
    component: () =>import("@/views/pages/public-routes/agent-check/SearchAgent.vue"),
    meta: {
      layout: "full",
    },
    children: [
      {
        path: ":agentUUID",
        name: "agent_profile",
        component: () =>import("@/views/pages/public-routes/agent-check/AgentProfile.vue"),
        meta: {
          layout: "full",
        },
      },
      {
        path: "notfound",
        name: "agent_not_found",
        component: () =>import("@/views/pages/public-routes/agent-check/NotFound.vue"),
        meta: {
          layout: "full",
        },
      }, 
    ],
  },
]

export default PublicRoutes
