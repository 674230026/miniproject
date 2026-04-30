const express = require('express') // นำ express เข้ามาทำงาน
const app = express()   // เรียกฝช้งาน express และเก็บลงในตัวแปร app
const path = require('path')

 // อ้้างอิงตำแหน่่งไฟล์ด้วยตัวแปล path
const indexPage = path.join(__dirname,"/../templates/index.html")    
const ProductPage1 = path.join(__dirname,"/../templates/product1.html")    
const ProductPage2 = path.join(__dirname,"/../templates/product2.html")    
const ProductPage3 = path.join(__dirname,"/../templates/product3.html")    

app.get("/",(req,res)=>{                    // ระบุ path เริ่มต้นใช้งาน
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"/../templates/index.html") )
    // res.sendFile(indexPage)
})

app.get("/product",(req,res)=>{
    res.sendFile(ProductPage1)
})

app.listen(8080,()=> {
    console.log("รัน server ที่ port 8080")
})