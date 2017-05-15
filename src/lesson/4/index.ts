
import Vue from 'vue'
import Component from 'vue-class-component'
import lesson41 from './1 data.vue'
import lesson42 from './2 props.vue'
import lesson43 from './3 computed.vue'
import lesson44 from './4 methods.vue'

@Component({
	components: {
		lesson41,
		lesson42,
		lesson43,
		lesson44
	}
})
export default class App extends Vue {

}