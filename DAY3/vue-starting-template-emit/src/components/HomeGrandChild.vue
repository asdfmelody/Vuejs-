<template>
  <div>
      손자
      <button @click="changeFood">changeFood</button>
  </div>
</template>

<script>
export default {
    props:['food'],
    methods:{
        changeFood(){
            this.$emit("changeFood","사탕")
        }
    }
}
</script>

<style>

</style>