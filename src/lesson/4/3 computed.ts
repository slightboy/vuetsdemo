
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Lesson43 extends Vue {
	get msg () {
		return Date.now()
	}

}