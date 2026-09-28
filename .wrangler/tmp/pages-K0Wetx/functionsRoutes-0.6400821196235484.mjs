import { onRequestPost as __api_contact_ts_onRequestPost } from "/home/user/FranciscoCunha.ai/functions/api/contact.ts"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_contact_ts_onRequestPost],
    },
  ]