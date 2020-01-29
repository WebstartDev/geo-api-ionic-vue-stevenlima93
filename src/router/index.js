import Vue from 'vue';
import Home from '../views/Home.vue';
import {IonicVueRouter} from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/departement',
      name: 'departement',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Departement.vue')
    },
    {
      path: '/region',
      name: 'region',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Region.vue')
    }
  ]
});
