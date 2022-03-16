<template>
  <div>
      <h1>자식</h1>
      {{food}}
    <AboutGrandChild v-bind:food="food"></AboutGrandChild>
  </div>
</template>

<script>
import AboutGrandChild from "./AboutGrandChild.vue"

export default {
    components:{
        AboutGrandChild
    },
    props:['food'],
}
</script>

<style>

</style>