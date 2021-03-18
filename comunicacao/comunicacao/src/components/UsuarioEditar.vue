<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
         <p>Idade eh {{idade}}</p>
         <button @click="alterarIdade">alterar Idade</button>
         <button @click="alterarId">Alterar Idade (Callback)</button>
    </div>
</template>

<script>

import barramento from '@/barramento'
export default {
    props:{
        idade: Number,
        alterarId: Function,
    },
    methods:{
        alterarIdade(){
            this.idade = 22
           barramento.$emit('idadeMudou', this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
