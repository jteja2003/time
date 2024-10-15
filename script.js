function updateTime(){
    var currentTime=new Date();
    var dat=currentTime.getDate();
    var day = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
    day2=day+" , "+dat
    document.getElementById('day').innerHTML=day2;

var hr=currentTime.getHours();
var min=currentTime.getMinutes();
var sec=currentTime.getSeconds();
    hr = (hr < 10 ? "0" : "") + hr;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    var tiempo= hr + " : " + min + " : " + sec;
document.getElementById('tiempo').innerHTML=tiempo;

}
updateTime()
setInterval(updateTime,1000);

const select = document.getElementById('timezone-select');
const timeDisplay = document.getElementById('dynamic-time');

function updateDynamicTime() {
    const selectedTimeZone = select.value;
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const time = new Date().toLocaleString('en-US', { timeZone: selectedTimeZone, ...options });
    timeDisplay.textContent = time;
}
select.addEventListener('change', updateDynamicTime);
setInterval(updateTime, 1000); // Update local time every second
setInterval(updateDynamicTime, 1000); // Update world time every second
updateTime(); // Initial call to display local time
updateDynamicTime();