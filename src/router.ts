import Vue from 'vue';
import Router from 'vue-router';
import lesson4 from '@/lesson/4/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
	{ path: '/4', component: lesson4 }
  ]
});
