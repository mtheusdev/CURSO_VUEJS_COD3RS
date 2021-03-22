<template>
  <div class="calculator">
      <Display value="1000"/>
      <Button label="AC" triple @onCalcButtonClick="clearMemory"/>
      <Button label="/" operation @onCalcButtonClick="SetOperation"/>
      <Button label="7" @onCalcButtonClick="addDigit"/>
      <Button label="8" @onCalcButtonClick="addDigit"/>
      <Button label="9" @onCalcButtonClick="addDigit"/>
      <Button label="*" operation @onCalcButtonClick="SetOperation"/>
      <Button label="4" @onCalcButtonClick="addDigit"/>
      <Button label="5" @onCalcButtonClick="addDigit"/>
      <Button label="6" @onCalcButtonClick="addDigit"/>
      <Button label="-" operation @onCalcButtonClick="SetOperation"/>
      <Button label="1" @onCalcButtonClick="addDigit"/>
      <Button label="2" @onCalcButtonClick="addDigit"/>
      <Button label="3" @onCalcButtonClick="addDigit"/>
      <Button label="+" operation @onCalcButtonClick="SetOperation"/>
      <Button label="0" double @onCalcButtonClick="addDigit"/>
      <Button label="." @onCalcButtonClick="addDigit"/>
      <Button label="=" operation @onCalcButtonClick="SetOperation"/>
  </div>
</template>

<script>

import Button from '../components/Button'
import Display from '../components/Display'

export default {
    components: {Display, Button},
    methods: {
        clearMemory(){

        },
        setOperation(operation){

        },
        addDigit(n){

        }
    }
}
</script>

<style>
    .calculator{
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px
    }
</style>