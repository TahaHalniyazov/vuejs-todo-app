import { createRouter, createWebHistory } from 'vue-router';
import Todo from './components/Todo.vue';

const routes = [
  { path: '/vuejs-todo-app/todo', component: Todo }
];

const router = createRouter({
  history: createWebHistory('/vuejs-todo-app/'),
  routes
});

export default router;
