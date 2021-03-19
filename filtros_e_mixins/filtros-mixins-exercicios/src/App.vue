<template>
	<div id="app">
		<h1>Filtros e Mixins</h1>
		<hr>
		<p>{{cpf | cpf | inverter}}</p>
		<input type="text" :value="cpf | cpf | inverter">
		<Frutas/>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
			</ul>
			<input v-model=fruta @keydown.enter="add" type="text">
		</div>
		<p>{{usuarioLogado}}</p>
	</div>
</template>

<script>

import Frutas from './Frutas.vue'
import FrutasMixin from './FrutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
	components:{
		Frutas
	},
	mixins:[FrutasMixin, usuarioMixin],
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data(){
		return {
			cpf: '08990349931',
		}
	},
	created(){
        console.log('Created - App Vue')
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
