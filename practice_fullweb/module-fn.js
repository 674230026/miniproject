const util = require('./module/Mymodule.js')                            // import all-function เรียกทุก function // this pattern a better 👍
const clocknow = require('./module/Mymodule.js').getCurrenTime          // import some function เรียกเฉพาะบาง function
const sum = require('./module/Mymodule.js').add

const number = 100000000
console.log(util.getCurrenTime()+" is "+util.add(5,10)+' '+util.formatNumber(number))                 // เรียกใช้ function แบบ import all
console.log(clocknow()+" is "+sum(5,10))                                // เรียกใช้ function แบบ import some function

