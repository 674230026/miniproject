const express = require('express') // นำ express เข้ามาทำงาน
const path = require('path')
const app = express()   // เรียกฝช้งาน express และเก็บลงในตัวแปร app
app.use(express.static(path.join(__dirname,'../public')))

app.listen(8080,()=> {
    console.log("รัน server ที่ port 8080")
    console.log(path.join(__dirname,'../public'))
})