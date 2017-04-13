import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/hello.vue';
import Todos from '@/components/todos.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Hello },
	{path: '/todos', component: Todos}
  ]
})
