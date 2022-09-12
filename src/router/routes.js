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
        component: () => import("pages/Education.vue")
      },
      {
        path: "experience",
        component: () => import("pages/Experience.vue")
      },
      {
        path: "skills",
        component: () => import("pages/Skills.vue")
      },
      {
        path: "courses",
        component: () => import("pages/Courses.vue")
      },
      {
        path: "contact_me",
        component: () => import("pages/Contact.vue")
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
