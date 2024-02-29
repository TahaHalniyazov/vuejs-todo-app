<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isTodoPage = () => route.path === '/todo';
</script>

<template>
  <div>
    <div class="main-text" v-if="!isTodoPage()">
      <h1>Добро пожаловать в мое приложение Todo!</h1>
      <p>Начните свой день с создания плана и списком дел - <span>это ключ к эффективности!</span></p>
    </div>
    <div class="router-link-wrapper">
      <router-link v-if="!isTodoPage()" to="/todo" exact class="nav-link">Открыть список дел</router-link>    
    <router-view></router-view>
    </div>
    
    
  </div>
</template>

<style scoped>

.main-text{
  margin: 180px auto;
  text-align: center;
}
h1 {
  font-size: 46px;
  color: var(--dark);
  max-width: 90%;
}
p{
  font-size: 26px;
  margin-top: 50px;
  max-width: 90%;
}
span{
  color: red;
}

.router-link-wrapper{
  text-align: center;
  width: 90%;
}
.nav-link {
  font-size: 20px;
  color: var(--light);
  text-decoration: none;
  outline: none;
  background: var(--dark);
  padding: 20px 50px;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-in-out
}

/* Скрываем ссылку, если текущая страница - /todo */
.nav-link[v-if] {
  display: none;
}
</style>