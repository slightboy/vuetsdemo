<template>
<div id="app-4">
	<input type="text" @keyup.enter="add" />
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }} <a v-on:click="del(todo.text)" style="  cursor: pointer">x</a>
    </li>
  </ol>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';


@Component
export default class Todos extends Vue {

	todos = [{ text: 'Learn JavaScript' }, { text: 'Learn Vue' }, { text: 'Build something awesome' } ];

	add (event) {
		if (!event.target.value) return;
		this.todos.push({text: event.target.value});
		event.target.value = '';
	}

	del (msg: string) {
		let index = this.todos.findIndex(e => e.text === msg);
		this.todos.splice(index, 1);
	}

}


/*
export default {
  name: 'todos',
  methods: {
	del: function (msg) {
		let index = this.todos.findIndex(e => e.text === msg);
		delete this.todos.splice(index, 1);
	}
  },
  data () {
    return {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
    }
  }
}

*/
</script>