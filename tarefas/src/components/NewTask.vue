<template>
  <div class="new-task">
      <input placeholder="Nova Tarefa?" @keydown.enter="add" v-model="name" type="text" class="form-element">
     
      <button class="form-element" @click="add">+</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name: ''
        }
    },
    methods:{
        add(){
            this.$emit('taskAdded', {name: this.name})
            this.name = ''
        }
    }
}
</script>

<style>
    .new-task{
        margin: 35px;
    }
    .form-element{
        outline: none;
        font-size: 2rem;
        border: 1px solid white;
        padding: 5px 10px 8px;
        color: white;
    }

    input.form-element {
        width: 500px;
        background: #fff2;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    button.form-element {
        border-left: none;
        background-color: aqua;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
</style>