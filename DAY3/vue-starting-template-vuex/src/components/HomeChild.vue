<template>
  <div>
      자식
    {{$store.state.myName}}
    {{$store.state.myAge}}
      <HomeGrandChild></HomeGrandChild>
  </div>
</template>

<script>
import HomeGrandChild from "./HomeGrandChild.vue"
export default {
    components:{
        HomeGrandChild
    }
}
</script>

<style>

</style>