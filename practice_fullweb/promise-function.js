// สร้าง promise 

const connect = true
let url1 = "tod"
const url2 ="tod2"
const url3 ="tod3"
const url4 ="tod4"
const url5 ="tod5"

function download(url) {
    return new Promise(function(resolve,reject) {
        console.log("กำลังโหลดไฟล์จาก url")
        setTimeout(() => {
            if(connect){
            resolve(`ดาวโหลด ${url}  เรียนร้อย!`)         // ถ้้าทำงานสำเร็จจะเป็นสถานะ resolve
        }else {
            reject("เกิดขข้อผิดพลาด")                     // ถ้าทำงานไม่สำเร็จจะเป้นสถานะ reject
        }
        }, 1000);
    })
}

// ตัวอย่างการใช้ then catch finally 

// download(url1).then(result=>{             // then ใช้ร่วมกับ resolve เมื่อการทำงานสำเร็จ
//     console.log(result);
// }).catch(err=>{                           // catch ใช้ร่วมกับ reject เมื่อการทำงานผิดพลาด
//     console.log(err)
// }).finally(()=>{                          // finally ต่องานต่อจากส่วนนั้นโดยไม่สนผลลัพ
//     console.log("จบการทำงาน")
// })

// download(url1).then(function(result){
//     console.log(result)
//     download(url2).then(function(result){
//         console.log(result)
//         download(url3).then(function(result){
//             console.log(result)
//             download(url4).then(function(result){
//                 console.log(result)
//                 download(url5).then(function(result){
//                     console.log(result)
//                 })
//             })
//         })
//     })
// })

// download(url1).then(function(result){
//     console.log(result)
//     return download(url2)
// }).then(function(result){
//     console.log(result)
//     return download(url3)
// }).then(function(result){
//     console.log(result)
//     return download(url4)
// }).then(function(result){
//     console.log(result)
//     return download(url5)
// }).then(function(result){
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("จบการทำงาน")
// })

// ============================================================================== //

// Async & Await 

async function start() {                                        // async  ใช้เมื่อเริ่มการใช้งาน
    console.log(await download(url1))
    console.log(await download(url2))                           // await  คือการให้รอการทำงานบรรทัดที่มี await เสร็จก่อน
    console.log(await download(url3))
    console.log(await download(url4))
    console.log(await download(url5))
}

start()

// ============================================================================== //