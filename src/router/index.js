import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ReviewsNew from '../views/ReviewsNew.vue';
import ReviewsShow from '../views/ReviewsShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reviews/new',
    name: 'reviews-new',
    component: ReviewsNew
  },
  {
    path: '/reviews/:id',
    name: 'reviews-show',
    component: ReviewsShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
