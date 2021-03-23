import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      //dashboard
      {
        path: "/",
        redirect: "/dashborad/analysis",
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "analysis",
            name: "analysis",
            component: () =>
              import(
                /* webpackChunkName: "analysis" */ "../views/Dashboard/Analysis"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/form",
    name: "form",
    component: { render: (h) => h("router-view") },
    children: [
      {
        path: "/form",
        redirect: "/form/basic-form",
      },
      {
        path: "/form/basic-form",
        name: "basicform",
        component: () =>
          import(
            /* webpackChunkName: "basicform" */ "../views/Forms/BasicForm"
          ),
      },
      {
        path: "/form/step-form",
        name: "stepform",
        component: () =>
          import(/* webpackChunkName: "stepform" */ "../views/Forms/StepForm"),
        children: [
          {
            path: "/form/step-form",
            redirect: "/form/step-form/info",
          },
          {
            path: "/form/step-form/info",
            name: "info",
            component: () =>
              import(
                /* webpackChunkName: "info" */ "../views/Forms/StepForm/Step1"
              ),
          },
          {
            path: "/form/step-form/confirm",
            name: "confirm",
            component: () =>
              import(
                /* webpackChunkName: "confirm" */ "../views/Forms/StepForm/Step2"
              ),
          },
          {
            path: "/form/step-form/result",
            name: "result",
            component: () =>
              import(
                /* webpackChunkName: "result" */ "../views/Forms/StepForm/Step3"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
    children: [
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register"),
      },
    ],
  },

  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 加判断，如果同一页面不显示
  if (to.path != from.path) {
    NProgress.start();
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
