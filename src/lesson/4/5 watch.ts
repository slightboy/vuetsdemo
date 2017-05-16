
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
	watch: {
		msg: function (val, oldVal) {
			console.log(val, oldVal)
		}
	}
})
export default class Lesson44 extends Vue {

	msg = '5 123'

}