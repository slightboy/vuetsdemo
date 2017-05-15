
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Lesson44 extends Vue {

	greet () {
		alert(Date.now())
	}

}