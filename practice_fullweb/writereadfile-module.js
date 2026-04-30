// Blocking
const fs=require('fs')                  // import module/packet 

// อ่านไฟล์ input.txt
const data = fs.readFileSync('myfile/input.txt','utf-8')            // utf-8 การถอดรหัสเพื่ออ่านภาษาไทย
console.log(data)

// เขียนไฟล์
const outputText = `Hello node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync("myfile/output.txt",outputText)
console.log("เขียนไฟล์เรียนร้อนแล้ว")


// non-blocking
const fs=require('fs')

// อ่าานไฟล์ inout.txt
fs.readFile("myfile/input.txt",'utf-8',(err,data)=>{
    if(err) return console.log("เกิดข้อผิดพลาด ", err)
    const outputText = `Hello node-tod.js\n${data}\nไฟล์นี้ถูกเขียนเมื่อ${new Date()}`
    fs.writeFile("myfile/output.txt",outputText,err=>{
        if(err) return console.log("เกิดข้อผิดพลาด ", err)
        console.log("เขียนไฟล์เรียบร้อย!")
    })
})

