<template>
  <el-form :model="form" label-width="120px">
      
        <!-- 키워드 리스트 생성 -->
      <div class="groups-wrapper">
        <el-form-item style="width:500px;" label="키워드">
            <el-input v-model="form.keyword"></el-input>
            <el-button @click="saveKeyword">키워드 추가</el-button>
        </el-form-item>
            <!-- 키워드 추가했으니 해당 부분을 보여주는 부분 -->
        <div v-if="keywords" class="tag-wrapper">
            <el-tag @click="removeKeyword(keyword)" v-for="keyword in keywords" :key="keyword" class="group-tag">
                {{keyword}}
            </el-tag>
        </div>
          <!-- 키워드를 배열로 그룹을 만든다. -->
      <el-form-item style="width:500px;" label="주제">
          <el-input v-model="form.groupName"></el-input>
      </el-form-item>
      
      <el-button v-if="keywordGroups" class="tag-wrapper">
          <el-tag @click="removeGroup(group.groupName)" v-for="(group,index) in keywordGroups" :key="index" type="success" class="group-tag">
              {{group.groupName}}
          </el-tag>
      </el-button>

        <el-button @click="saveGroup" class="create-button" type="primary">주제생성하기</el-button>
      </div>

      <!-- 옵션 -->
      <div class="groups-wrapper">
          <el-form-item label="시간대별 설정">
              <el-col :span="11">
                  <el-date-picker type="date" placeholder="Pick a date" v-model="form.startDate" style="width:100%"/>
              </el-col>
              <el-col :span="2"> - </el-col>
              <el-col :span="11">
                  <el-date-picker type="date" placeholder="Pick a date" v-model="form.endDate" style="width:100%"/>
              </el-col>
          </el-form-item>

            <!-- 구간 단위 date,week,month -->
              <el-form-item label="구간단위">
                <el-radio-group v-model="form.timeUnit">
                    <!-- ctrl+알트 방향키 위 or 아래 -->
                    <el-radio label="date"></el-radio>
                    <el-radio label="week"></el-radio>
                    <el-radio label="month"></el-radio>
                </el-radio-group>
                </el-form-item>
                    <el-form-item label="디바이스">
                <el-radio-group v-model="form.device">
                <el-radio label="all"></el-radio>
                <el-radio label="pc">pc</el-radio>
                <el-radio label="mo">모바일</el-radio>
                </el-radio-group>
            </el-form-item>
                <!-- gender 성별 남, 녀 -->
            <el-form-item label="성별">
                <el-radio-group v-model="form.gender">
                <el-radio label="all">모두</el-radio>
                <el-radio label="m">남</el-radio>
                <el-radio label="f">녀</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="나이">
                <el-checkbox-group v-model="form.ages">
                <el-checkbox label="all">모두</el-checkbox>
                <el-checkbox label="1">0~12세</el-checkbox>
                <el-checkbox label="2">13~18세</el-checkbox>
                <el-checkbox label="3">19∼24세</el-checkbox>
                <el-checkbox label="4">25∼29세</el-checkbox>
                <el-checkbox label="5">30∼34세</el-checkbox>
                <el-checkbox label="6">35∼39세</el-checkbox>
                <el-checkbox label="7">40∼44세</el-checkbox>
                <el-checkbox label="8">45∼49세</el-checkbox>
                <el-checkbox label="9">50∼54세</el-checkbox>
                <el-checkbox label="10">55∼59세</el-checkbox>
                <el-checkbox label="11">60세 이상</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
      </div>

  <el-form-item>
      <el-button @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
  </el-form-item>
  </el-form>
</template>

<script>
import {dataLap} from "../utils/axios"
import moment from "moment" //날짜 파싱 라이브러리
export default {
    data(){
        return{
            form:{
                keyword: "",
                groupName: "",
                startDate: null,
                endDate:null,
                timeUnit:"month",
                device: 'all',
                gender: 'all',
                ages: [],

            },
            keywordGroups:[],
            keywords:[]
        }
    },
    methods:{
        saveKeyword(){
            if(this.form.keyword){
                this.keywords.push(this.form.keyword);
            }
            this.form.keyword="";
        }
        ,removeKeyword(keyword){
            // this.keywords.pop(keyword);
            this.keywords = this.keywords.filter(el => el != keyword);
        },
        saveGroup(){
            if(this.form.groupName){
                this.keywordGroups.push({
                    groupName: this.form.groupName,
                    keywords: this.keywords
                })
                this.form.groupName="",
                this.keywords=[]
            }
        },
        removeGroup(groupName){
            this.keywordGroups = this.keywordGroups.filter(el => el.groupName != groupName )
        },
        async onSubmit(){
           const {startDate,endDate,timeUnit,device,gender,ages} = this.form;
            console.log(this.form);
            //moment: 날짜 format 형식을 맞추기 위해서 사용함.
            console.log(moment(this.form.startDate).format('YYYY-MM-DD'));
            if(
                this.keywordGroups.length &&
                startDate && endDate && timeUnit && device && gender && ages
            ){
                const data={
                    keywordGroups : this.keywordGroups,
                    startDate : moment(startDate).format('YYYY-MM-DD'),
                    endDate: moment(endDate).format('YYYY-MM-DD'),
                    timeUnit,
                    device,
                    gender,
                    ages,

                }
                const result = await dataLap.post(data);
                console.log(result)

                if(result.data.status === "OK"){
                    this.$store.dispatch('generateChartData')
                }
                
            }else{
                alert("빈 값을 입력해주세요")
            }
        }
    }
}
</script>

<style>
.groups-wrapper{
  display: flex;
  flex-direction:column;
  border : 1px solid #dddddd;
  padding:30px;
  margin-bottom:30px;
  align-items: stretch;
}
.tag-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 12px;
}
.group-tag{
  width:80px;
  font-size: 11px;
  margin:3px;
  overflow: hidden;
  text-overflow: hidden;
  white-space: nowrap;
}
.create-button{
  width:31%;
  margin-top:30px !important;
  margin-left:120px !important;
}
</style>