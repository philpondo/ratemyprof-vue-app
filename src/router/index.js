import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProfessorsNew from "../views/ProfessorsNew.vue";
import ProfessorsShow from "../views/ProfessorsShow.vue";
import ProfessorsEdit from "../views/ProfessorsEdit.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
