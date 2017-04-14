import Vue from 'vue';
import Router from 'vue-router';
import Todos from '@/components/todos.vue';

Vue.use(Router);

export default new Router({
  routes: [
	{ path: '/', component: Todos }
  ]
});
