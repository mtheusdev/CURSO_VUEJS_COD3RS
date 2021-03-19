<template>
  <div class="usuario-detalhe">
      <h3>Usuário detalhe</h3>
      <p><strong>Código: </strong>{{id}}</p>
      <!-- :to="`/usuario/${$route.params.id}/editar`" -->
      <router-link tag="button" margin-bottom-10 primario :to="{name: 'editarUsuario', params:{id},
        query:{completo: true, lingua:'pt'},
        hash:'#rodape' }">
          Editar
      </router-link>
  </div>
</template>

<script>
export default {
    props: ['id'] ,
    // beforeRouteEnter(to, from, next){
    //     next(vm => {
    //       console.log(vm)
    //     })
    // }

    // data(){
    //   return10{
    //     id: this.$route.params.id
    //   }
    // },
    // watch:{
    //   $route(to, from){
    //     from
    //     this.id = to.params.id
    //   }
    // },
}
</script>

<style>

</style>