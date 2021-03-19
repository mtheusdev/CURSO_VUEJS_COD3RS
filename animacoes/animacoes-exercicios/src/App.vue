<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<!-- <hr> -->
		<!-- <b-button class="mb-4 mt-2" variant="primary"
			@click="exibir = !exibir">Mostrar mensagem
		</b-button> -->
		<!--<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>
		<transition name="slide" type="transition" appear>
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>
		<transition 
			enter-active-class="animated bounce"
			leave-active-class="animated shake" >
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition> -->
		
		<!-- <hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{msg}}</b-alert>
		</transition> -->
		<hr>
		<b-button variant="info" @click="exibir2 = !exibir2">Alternar</b-button>
		<transition
			:css="false" 
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		>
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button class="mr-2" variant="primary" @click="componenteSelecionado='Alertainfo'">Info</b-button>
			<b-button variant="sencondary" @click="componenteSelecionado='AlertaAdvertencia'">Advertência</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>

	
		<hr>
		<b-button class="mb-4" @click="adicionarAluno">Adicionar Aluno</b-button>
		<transition-group tag="div" name="slide">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)" >{{aluno}}</b-list-group-item>
			</b-list-group>
		</transition-group>


	</div>
</template>

<script>

import AlertaAdvertencia from './AlertaAdvertencia.vue'
import Alertainfo from './AlertaInfo.vue'

export default {
	components: {
		AlertaAdvertencia,
		Alertainfo
	},
	data(){
		return {
			msg: 'Uma mensagem para o usuário',
			exibir: true,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'Alertainfo',
			alunos: ['Roberto', 'Julia', 'Tereza', 'Paulo']
		}
	},
	methods: {
		adicionarAluno(){
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},

		removerAluno(indice){
			this.alunos.splice(indice, 1)
		},

		animar(el, done, negativo){
			
			let rodada = 1
			const temporizador = setInterval(()=>{
				const novaLargura = this.larguraBase + (negativo? -rodada * 10 : rodada * 10) 
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30){
					clearInterval((temporizador))
					done()
				}
			}, 20)
			},

		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el,done,false)
		},
		// afterEnter(el){
			
		// },
		// enterCancelled(){

		// },

		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el,done,true)
		},
		// afterLeave(el){

		// },
		// leaveCancelled(){

		// },
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
	font-size: 1.5rem;
}

.caixa{
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}


.fade-enter-active{
	
	transition: opacity 2s;
}
.fade-leave-active{
	
	transition: opacity 2s;
}

.fade-enter, .fade-leave-to{
	opacity: 0;
}


@keyframes slide-in{
	from { transform: translateY(40px);}
	to { transform: translateY(0px);}
}

@keyframes slide-out{
	from { transform: translateY(0px);}
	to { transform: translateY(40px);}
}
.slide-enter-active{
	animation: slide-in 2s ease;
	transition: opacity 2s;
}
.slide-leave-active{
	position: absolute;
	width: 100%;
	display: none;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}

.slide-move{ 
	transition: transform 1s
}

/* slide-move serve para transicionar os outros elementos afetados por outro */

</style>
