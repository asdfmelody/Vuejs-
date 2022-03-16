<template>
  <div>
      튀긴치킨
  <ChickenChild :title="title" :salt="salt" test="테스트입니다"/>
  </div>
</template>

<script>
import ChickenChild from "./ChickenChild.vue"
export default {
    props:['title', 'salt'],
    components:{
        ChickenChild
    }
}
</script>

<style>

</style>