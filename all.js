const country = ["NEW YORK", "LONDON", "BANGKOK", "TAIWAN", "SYDNEY"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July",
 "Aug", "Sep", "Oct", "Nov", "Dec"];

const clock = document.querySelector('.clock_body')


function update(){
    let today = new Date()
    let NEWYORK_Time = new Date().toLocaleString('en-us', {timeZone: 'America/New_York', hour12: false});
    let LONDON_Time = new Date().toLocaleString('en-us', {timeZone: 'Europe/London', hour12: false});
    let BANGKOK_Time = new Date().toLocaleString('en-us', {timeZone: 'Asia/Bangkok', hour12: false});
    let TAIWAN_Time = new Date().toLocaleString('en-us', {timeZone: 'Asia/Taipei', hour12: false});
    let SYDNEY_Time = new Date().toLocaleString('en-us', {timeZone: 'Australia/Sydney', hour12: false});
    let timeAry = [NEWYORK_Time, LONDON_Time, BANGKOK_Time, TAIWAN_Time, SYDNEY_Time];
    
    let displaytime = [] 
    let displayMonth = []
    let displayYear = []
    let displayDate = []
    let str = ''
    for (let i = 0 ;i < timeAry.length;i++){
       var getTime = timeAry[i].split(',').slice(1) + ''
       displaytime.push(getTime.split(':').splice(0,2).join(':'))
       var getDate = timeAry[i].split(',').slice(0,-1) + ''
       displayYear.push(getDate.split('/').slice(2)+'')
       displayDate.push(getDate.split('/').slice(0,-2)+'' )
       var getMonth = monthNames[today.getMonth()]
       displayMonth.push(getMonth)
       str += 
       `<div class="item">
          <div class="item-wrap">
            <div class="font-md">${country[i]}</div>
            <div class="font-sm">${displayDate[i]} ${displayMonth[i]} , ${displayYear[i]}</div>
        </div>
        <div class="font-lg">${displaytime[i]}</div>
        </div>`
    }
 clock.innerHTML = str
}
update()
setInterval(function(){
    
    update()},1000)