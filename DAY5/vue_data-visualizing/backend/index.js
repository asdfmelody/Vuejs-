//노출시키면 안되는 것을 .env에 저장
//dotenv를 이용해 .env파일 읽음

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
//cors추가 -> app.use 로 사용
//cors(Cross Origin Resource Sharing : 정책에 대한 위반)
// 교차 출처 정책 (다른 출처) : 양쪽 서버 다 localhost사용중 but 포츠가 다르다.
// 같은 IP에 포트까지 같아야 다른 출처. 보안때문이다. 아무 제약 안걸고 통신하면 보안에 이슈 생길수 있어서
// 기본적으로 cors정핵에서 통신을 하지 않도록 기본적으로 막아준다.
// https://www.npmjs.com/package/cors 참고 //특정 주소만 허용
const cors=require('cors');
const fs = require('fs');
const PORT = 8000;
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.json({ test: "HELLO" })
})

app.get("/data", (req, res) => {
  try{
    res.set('Content-Type', 'application/json; charset=utf-8');
    const tempFile = fs.createReadStream('uploads/chart.json');
    return tempFile.pipe(res);
  } catch(error){
    console.log(error);
    return res.json(error);
  }

})

app.post('/data', async (req, res) => {
  try {
    console.log(req.body);
    const {startDate, endDate, timeUnit, keywordGroups, device, gender,ages} = req.body;
    const request_body = {
      // startDate: startDate,
      startDate,
      endDate,
      timeUnit,
      keywordGroups,
      device: device ==="all" ? "" : device,
      gender: gender === "all" ? "" :gender,
      ages: ages[0] === "all" ? [] :ages,
    }
    // const request_body = {
    //   //조회기간 시작날짜
    //   startDate: "2017-10-01",
    //   //조회기간 종료날짜
    //   endDate: "2020-10-30",
    //   timeUnit: "month",
    //   //요청에 실을값
    //   keywordGroups: [
    //     {
    //       groupName: "iPhone_4",
    //       keywords: ["아이폰4", "iphone4"]
    //     },
    //     {
    //       groupName: "iPhone_5",
    //       keywords: ["아이폰5", "아이폰5se", "iphone5"]
    //     },
    //     {
    //       groupName: "iPhone_6",
    //       keywords: ["아이폰6", "iphone6"]
    //     }
    //   ]
    // }
    const URL = "https://openapi.naver.com/v1/datalab/search"
    const headers = {
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': process.env.CLIENT_ID,
      'X-Naver-Client-Secret': process.env.CLIENT_SECRET
    }
    const result = await axios.post(URL, request_body, {
      headers
    })
    console.log(result.data);

fs.writeFile("./uploads/chart.json", JSON.stringify(result.data['results']), function(error){
  console.log(error);
}  );

return res.json({ status: "OK"});
  } catch (error) {
    console.log(error);
  }
})
app.listen(PORT, () => console.log(`${PORT} 서버 가동중`))