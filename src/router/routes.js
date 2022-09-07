const routes = [
  {
    path: "/",
    redirect: '/about',
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "about",
        component: () => import("pages/Index.vue")
      },
      {
        path: "education",
        component: () => import("pages/education")
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
