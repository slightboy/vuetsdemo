
import Vue from 'vue';
import Component from 'vue-class-component';
import Loading from '@/components/loading.vue';


@Component({
	components: {
		Loading
	}
})
export default class App extends Vue {

	activeIndex = '1'
	loading = true


	mounted () {
		setTimeout(() => {
			this.loading = false
		}, 2000)
	}
}