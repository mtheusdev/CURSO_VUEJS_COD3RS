<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Riniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
        <p>Idade eh {{idade}}</p>
    </div>
</template>

<script>

import barramento from '@/barramento'
export default {
    props:{
        nome: {
            type: String,
        //    default: function(){
        //        return Array(10).fill(0).join(',')
        //    }
            //required: true
           default: 'Anonimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            const antigo = this.nome
            this.nome = 'Ana'
            this.$emit('nomeMudou', {
                novo: this.nome,
                 antigo
            })
        }
    },
    created(){
        barramento.$on('idadeMudou', idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
