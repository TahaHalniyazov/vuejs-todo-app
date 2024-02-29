import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    component: () => import('./components/Main.vue')
  },

  { 
    path: '/todo', 
    component: () => import('./components/Todo.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
