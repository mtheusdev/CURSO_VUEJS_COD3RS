<template>
  <div>
      <ul>
          <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
      </ul>
      <input v-model=fruta @keydown.enter="add" type="text">
      <p>{{global}}</p>
  </div>
</template>

<script>

import FrutasMixin from './FrutasMixin'
import usuarioMixin from './usuarioMixin'
export default {
    mixins: [FrutasMixin, usuarioMixin],
    created(){
        console.log('Created - Futas Vue')
    }
}
</script>

<style>

</style>