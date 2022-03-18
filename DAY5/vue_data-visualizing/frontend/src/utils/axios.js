const axios = require('axios');

const api=axios.create({
    baseURL:"http://localhost:8000"
});

export const dataLap ={
    //데이터 가져오기
    get:() =>{
        return api.get('/data')
    },
    //데이터 생성 요청
    post:(data)=>{
        console.log(data);
        return api.post('/data',data)
    }
}