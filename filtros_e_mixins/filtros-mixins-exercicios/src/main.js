import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('inverter', function(valor){
	return valor.split('').reverse().join('');
})
Vue.mixin({
	data(){
		return{
			global: 'Estou no mixin global'
		}
	},
	created(){
		console.log('mixin global')
	}
})
new Vue({
	render: h => h(App),
	created(){
		console.log('Instancia VuE MIXIN')
	}
}).$mount('#app')
