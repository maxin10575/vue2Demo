const  unix2hm = (v) =>{
    if (/^(-)?\d{1,10}$/.test(v)) {
        v = v * 1000
    } else if (/^(-)?\d{1,13}$/.test(v)) {
        v = v * 1000
    } else if (/^(-)?\d{1,14}$/.test(v)) {
        v = v * 100
    } else if (/^(-)?\d{1,15}$/.test(v)) {
        v = v * 10
    } else if (/^(-)?\d{1,16}$/.test(v)) {
        v = v * 1
    } else {
        alert('时间戳格式不正确')
        return
    }
    const dateObj = new Date(v)
    const hours = dateObj.getHours() > 10 ? dateObj.getHours() : '0' + dateObj.getHours()
    const minutes = dateObj.getMinutes() < 10 ? dateObj.getMinutes() + '0' : dateObj.getMinutes()
    const UnixTimeToDate = hours + ':' + minutes
    return UnixTimeToDate
};


const getOnOffBed = function (params) {
    if (params.value[2] == 0) {
        return "在床"
    } else {
        return "离床"
    }
}



const  millToSecond = (time) => {
    return Math.round(time / 1000)
};

var util = module.exports = {
    unix2hm: unix2hm,
    millToSecond: millToSecond,
    getOnOffBed: getOnOffBed
}