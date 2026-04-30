// การใช้งาน callback function

function calculate(x,y,callback) {
    setTimeout(()=>{
        const sum = x+y
        callback(sum)
    },3000)
}

// เก็บ function ไว้ใน parameter callback
calculate(100,50,function(result){
    console.log(`ผลบวก = ${result}`)
})


//  ตัวอย่างการใชเงาน callback function 
// การเขียน program downloadfile

const url1 ="tod"
const url2 ="tod2"
const url3 ="tod3"

function downloading(url,callback){
    setTimeout(() => {
        console.log(`กำลังโหลดจากไฟล์ ${url}`)
        callback(url)
    }, 2000);

}

downloading(url1,function complete(result){
    console.log(`ดาวโหลด ${result}  เรียนร้อย!`)

    downloading(url2,function complete(result){
    console.log(`ดาวโหลด ${result}  เรียนร้อย!`)

        downloading(url1,function complete(result){
        console.log(`ดาวโหลด ${result}  เรียนร้อย!`)
        })

    })

})
