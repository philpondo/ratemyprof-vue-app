import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProfessorsNew from "../views/ProfessorsNew.vue";
import ProfessorsShow from "../views/ProfessorsShow.vue";
import ProfessorsEdit from "../views/ProfessorsEdit.vue";
import ReviewsNew from "../views/ReviewsNew.vue";
import ReviewsShow from "../views/ReviewsShow.vue";
import ReviewsEdit from "../views/ReviewsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/professors/new",
    name: "professors-new",
    component: ProfessorsNew,
  },
  {
    path: "/professors/:id",
    name: "professors-show",
    component: ProfessorsShow,
  },
  {
    path: "/professors/:id/edit",
    name: "professors-edit",
    component: ProfessorsEdit,
  },
  {
    path: "/reviews/new",
    name: "reviews-new",
    component: ReviewsNew,
  },
  {
    path: "/reviews/:id",
    name: "reviews-show",
    component: ReviewsShow,
  },
  {
    path: "/reviews/:id/edit",
    name: "reviews-edit",
    component: ReviewsEdit,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
