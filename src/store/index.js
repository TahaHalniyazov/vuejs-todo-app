import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
        todos: [],
        name: ''
        }
    },
    mutations: {
        setTodos(state, todos) {
        state.todos = todos
        },
        setName(state, name) {
        state.name = name
        },
        addTodo(state, todo) {
        state.todos.push(todo)
        },
        removeTodo(state, todo) {
        state.todos = state.todos.filter(t => t !== todo)
        }
    },
    actions: {
        fetchTodos({ commit }) {
        const todos = JSON.parse(localStorage.getItem('todos')) || []
        commit('setTodos', todos)
        },
        saveName({ commit }, name) {
        commit('setName', name)
        localStorage.setItem('name', name)
        },
        addTodo({ commit, state }, todo) {
        commit('addTodo', todo)
        localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo({ commit, state }, todo) {
        commit('removeTodo', todo)
        localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    },
    getters: {
        sortedTodos(state) {
        return state.todos.sort((a, b) => a.createdAt - b.createdAt)
        }
    }
})

export default store
