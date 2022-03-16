<template>
  <div>
      치킨
    <div v-if="show"> 
        {{salt}}
        {{title}}
        {{test}}
    </div>
    <button @click="printShow">보이는 버튼</button>
  </div>
</template>

<script>
export default {
    props:['title', 'salt','test'],
    data(){
        return{
            show: false
        }
    },
    methods:{
        printShow(){
            this.show=true
        }
    }
}
</script>

<style>

</style>