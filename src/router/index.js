import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
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
        path: "/",
        name: "dashboard",
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () =>
              import(
                /* webpackChunkName: "layout" */ "../views/Dashboard/Analysis"
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
          import(/* webpackChunkName: "layout" */ "../views/Forms/BasicForm"),
      },
      {
        path: "/form/step-form",
        name: "stepform",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/Forms/StepForm"),
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
                /* webpackChunkName: "layout" */ "../views/Forms/StepForm/Step1"
              ),
          },
          {
            path: "/form/step-form/confirm",
            name: "confirm",
            component: () =>
              import(
                /* webpackChunkName: "layout" */ "../views/Forms/StepForm/Step2"
              ),
          },
          {
            path: "/form/step-form/result",
            name: "result",
            component: () =>
              import(
                /* webpackChunkName: "layout" */ "../views/Forms/StepForm/Step3"
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
    path: "/",
    name: "Home",
    component: Home,
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
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
