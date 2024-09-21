import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import _26 from '../views/26.vue';
import _186 from '../views/186.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  {
    path: '/26',
    component: _26,
    name: '26',
  },
  { path: '/186', component: _186, name: '186' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
