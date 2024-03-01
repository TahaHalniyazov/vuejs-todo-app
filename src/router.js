// import { createRouter, createWebHistory } from 'vue-router';


// const routes = [
//   {
//     path: '/',
//     component: () => import('./components/Main.vue')
//   },

//   { 
//     path: '/todo', 
//     component: () => import('./components/Todo.vue')
//   }
// ];

// const router = createRouter({
//   history: createWebHistory('/vuejs-todo-app/'),
//   routes
// });

// export default router;


import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './components/Main.vue';
import Todo from './components/Todo.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
