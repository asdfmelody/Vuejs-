<template>
  <div class="home">
    <h1>NASA</h1>
    
  <el-row>
   <el-col :span="8" v-for="(item, index) in items" :key="item.id" :offset="index=2">
    <el-card :body-style="{ padding: '0px' }" >
      <img :src="item['links'][0]['href']" class="image">
      <div style="padding: 14px;">
        <span>{{item['data'][0]["title"]}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ item['data'][0]["date_created"] }}</time>
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Home",
  data(){
    return{
      items:[],
    }
  },
  async created(){
    try{
      const response = await axios.get("https://images-api.nasa.gov/search?q=star");
      this.items = response.data.collection.items;
    }catch(error){
      console.log(error);
    }
  },
  methods: {
    start(){
      
      console.log()
    }
  },
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    height: 300px;;
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>