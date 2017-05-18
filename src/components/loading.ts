import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
	props: {
		loading: {
			default: true
		}
	}
})
export default class Loading extends Vue {

}