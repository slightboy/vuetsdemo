
import Vue from 'vue';
import Component from 'vue-class-component';


@Component
export default class Todos extends Vue {
	isIndeterminate: boolean = false;
	checkAll = false;
	todos = [{ text: 'Learn JavaScript' }, { text: 'Learn Vue' }, { text: 'Build something awesome' } ];
	input: string = '';
	checked: number[] = [];

	checkAllChange (ev) {
		this.checked = ev.target.checked ? Array.from(Array(this.todos.length).keys()) : [];
		this.isIndeterminate = false;
	}

	checkeChange (value) {
		this.checkAll = this.todos.length === value.length;
		  this.isIndeterminate = value.length > 0 && value.length < this.todos.length;
	}

	add () {
		if (!this.input) return;
		this.todos.push({text: this.input});
		this.input = '';
	}

	del (index: number) {
		this.todos.splice(index, 1);
	}

}