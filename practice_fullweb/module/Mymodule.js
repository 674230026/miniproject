// ให้บริการเกี่ยวกับการทำงานต่างๆ

function getCurrenTime() {
    return new Date()
}

function add(x,y) {
    return x+y
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
}

// ส่งออกไปใช้งานด้านนอก

module.exports.getCurrenTime = getCurrenTime
module.exports.add = add
module.exports.formatNumber = formatNumber