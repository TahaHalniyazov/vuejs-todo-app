// import { createRouter, createWebHistory } from 'vue-router';
// import Todo from './components/Todo.vue';

// const routes = [
//   { path: '/todo', component: Todo }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });

// export default router;
import { createRouter, createWebHistory } from 'vue-router';
import Todo from './components/Todo.vue';
import Main from './components/Main.vue';

const routes = [
  { 
    path: '/vuejs-todo-app', 
    component: Main
   },
   {
    path: '/todo',
    component: Todo
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
