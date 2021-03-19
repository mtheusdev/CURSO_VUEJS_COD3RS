<template>
  <div class="usuario-editar">
      <h3>Usuário Editar</h3>
      <p><strong>Código: </strong>{{id}} / {{$route.params.id}}</p>
      <p><strong>Completo: </strong>{{$route.query.completo ? 'Sim' : 'Não'}}</p>
      <button @click="confirmado" primario>Confirmar</button>
      
      <p><strong>Língua: </strong>{{$route.query.lingua}}</p>
      <div id="rodape">
        <h3>Curso Vue</h3>
      </div>
  </div>
</template>

<script>
export default {
  props: ['id'] ,
  data(){
    return {
      confirmou: false
    }
  },
  beforeRouteLeave(to, from, next){
    if(this.confirmou){
      next()
     } else{
        console.log(this.confirmou)
        if(confirm('Tem certeza?')){
          next()
        }else{
          next(false)
        }
      
    }
  },
  methods:{
    confirmado(){
      console.log(this.confirmou)
      this.confirmou = true
      console.log(this.confirmou)
    }
  }
}
</script>

<style>
    #rodape{
      margin-top: 1000px;
    }
</style>