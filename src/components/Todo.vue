<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('') 

const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a,b) =>{
    return a.createdAt - b.createdAt
}))

watch(name, (newVal) => {
    localStorage.setItem('name', newVal)
})

watch(todos, (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal))
}, {
    deep: true
})

const addTodo = () => {
    if (input_content.value.trim() === '' || input_category.value === null) {
        return
    }

    todos.value.push({
        content: input_content.value,
        category: input_category.value,
        done: false,
        editable: false,
        createdAt: new Date().getTime()
    })
}

const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
    name.value = localStorage.getItem('name') || ''
    todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template>
    <main class="todo-app">
        
        <section class="greeting">
            <h2 class="title">
                Здравствуй, <input type="text" id="name" placeholder="введите имя" v-model="name">
            </h2>
        </section>

        <section class="create-todo">      

            <form id="new-todo-form" @submit.prevent="addTodo">
                <h4>Что у вас в списке дел?</h4>
                <input 
                    type="text" 
                    name="content" 
                    id="content" 
                    placeholder="например: сходить в кино"
                    v-model="input_content" />
                
                <h4>Выберите категорию</h4>
                <div class="options">

                    <label>
                        <input 
                            type="radio" 
                            name="category" 
                            id="category1" 
                            value="business"
                            v-model="input_category" />
                        <span class="bubble business"></span>
                        <div>Работа</div>
                    </label>

                    <label>
                        <input 
                            type="radio" 
                            name="category" 
                            id="category2" 
                            value="personal"
                            v-model="input_category" />
                        <span class="bubble personal"></span>
                        <div>Личное</div>
                    </label>

                </div>

                <input type="submit" value="Добавить задачу" />
            </form>
        </section>

        <section class="todo-list">
            <h3>Список дел</h3>
            <div class="list" id="todo-list">

                <div v-for="todo in todos_asc" :key="todo.id" :class="`todo-item ${todo.done && 'done'}`">
                    <label>
                        <input type="checkbox" v-model="todo.done" />
                        <span :class="`bubble ${
                            todo.category == 'business' 
                                ? 'business' 
                                : 'personal'
                        }`"></span>
                    </label>

                    <div class="todo-content">
                        <input type="text" v-model="todo.content" />
                    </div>

                    <div class="actions">
                        <button class="delete" @click="removeTodo(todo)">Delete</button>
                    </div>
                </div>

            </div>
        </section>

    </main>
</template>

<style scoped>


.todo-app{
	background: var(--light);
	width: 100%;
	padding: 20px;
	margin-top: 20px;
	text-align: left;
	
}
input:not([type="radio"]):not([type="checkbox"]), button {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	cursor: initial;
}



section {
	margin: 20px 0;	
	padding: 0 15px;
	
}

h3 {
	color: var(--grey);
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 10px;
}

h4 {
	color: var(--grey);
	font-size: 14px;
	font-weight: 700;
	margin-bottom: 10px;
}

.greeting .title {
	display: flex;
}

.greeting .title input {
	margin-left: 10px;
	flex: 1 1 0%;
	min-width: 0;
}

.greeting .title,
.greeting .title input {
	color: var(--dark);
	font-size: 26px;
	font-weight: 700;
}

.create-todo input[type="text"] {
	display: block;
	width: 100%;
	font-size: 16px;
	padding: 10px 15px;
	color: var(--dark);
	background-color: #FFF;
	border-radius: 6px;
	box-shadow: var(--shadow);
	margin-bottom: 15px;
}

.create-todo .options {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	margin-bottom: 15px;
}

.create-todo .options label {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15px;
	background-color: #FFF;
	border-radius: 6px;
	box-shadow: var(--shadow);
	cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
	display: none;
}

.bubble {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid var(--business);
	box-shadow: var(--business-glow);
}

.bubble.personal {
	border-color: var(--personal);
	box-shadow: var(--personal-glow);
}

.bubble::after {
	content: "";
	display: block;
	opacity: 0;
	width: 0px;
	height: 0px;
	background-color: var(--business);
	box-shadow: var(--business-glow);
	border-radius: 50%;
	transition: 0.2s ease-in-out;
}

.bubble.personal::after {
	background-color: var(--personal);
	box-shadow: var(--personal-glow);
}

input:checked ~ .bubble::after {
	width: 10px;
	height: 10px;
	opacity: 1;
}

.create-todo .options label div {
	color: var(--dark);
	font-size: 16px;
	margin-top: 10px;
}

.create-todo input[type="submit"] {
	display: block;
	width: 100%;
	font-size: 16px;
	padding: 20px 30px;
	color: #FFF;
	background-color: var(--primary);
	border-radius: 6px;
	box-shadow: var(--personal-glow);
	cursor: pointer;
	transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
	opacity: 0.75;
}

.todo-list .list {
	margin: 10px 0;
} 

.todo-list .todo-item {
	display: flex;
	align-items: center;
	background-color: #FFF;
	padding: 10px;
	border-radius: 6px;
	box-shadow: var(--shadow);
	margin-bottom: 20px;
}

.todo-item label {
	display: block;
	margin-right: 10px;
	cursor: pointer;
}

.todo-item .todo-content {
	flex: 1 1 0%;
    
}

.todo-item .todo-content input {
	color: var(--dark);
	font-size: 18px;
    width: 95%;
}

.todo-item .actions {
	display: flex;
	align-items: center;
}

.todo-item .actions button {
	display: block;
	padding: 10px;
	border-radius: 6px;
	color: #FFF;
	cursor: pointer;
	transition: 0.2s ease-in-out;
}

.todo-item .actions button:hover {
	opacity: 0.75;
}

.todo-item .actions .edit {
	margin-right: 10px;
	background-color: var(--primary);
}

.todo-item .actions .delete {
	background-color: var(--danger);
}

.todo-item.done .todo-content input {
	text-decoration: line-through;
	color: var(--grey);
}
</style>