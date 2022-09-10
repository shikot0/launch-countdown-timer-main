const daysOutput = document.getElementById('dayOutput');
const hoursOutput = document.getElementById('hourOutput');
const minutesOutput = document.getElementById('minuteOutput');
const secondsOutput = document.getElementById('secondOutput');
const outputs = document.querySelectorAll('.output')

const daysOutputLabel = document.getElementById('dayOutput').parentElement.parentElement.lastElementChild;
const hoursOutputLabel = document.getElementById('hourOutput').parentElement.parentElement.lastElementChild;
const minutesOutputLabel = document.getElementById('minuteOutput').parentElement.parentElement.lastElementChild;
const secondsOutputLabel = document.getElementById('secondOutput').parentElement.parentElement.lastElementChild;  


// const dateSet = new Date(JSON.parse(localStorage.getItem('dateSet'))) || new Date(09/09/2022)

const dateSet = new Date(new Date().setDate(new Date().getDate() + 14));     

function countdown() {
    let currentDate = new Date();
    const difference = new Date (Math.abs(dateSet - currentDate));
    const daysRemaining = difference.getDate() -1 ;
    const hoursRemaining = difference.getHours(); 
    const minutesRemaining = difference.getMinutes();
    const secondsRemaining = difference.getSeconds();
    daysOutput.innerText = daysRemaining;
    hoursOutput.innerText = hoursRemaining;
    minutesOutput.innerText = minutesRemaining;
    secondsOutput.innerText = secondsRemaining;

    if(daysOutput.innerText == 1) {
        daysOutputLabel.innerText = 'day';
    }else { 
        daysOutputLabel.innerText = 'days';
    }

    if(hoursOutput.innerText == 1) {
        hoursOutputLabel.innerText = 'hour'; 
    }else {
        hoursOutputLabel.innerText = 'hours';
    }

    if(minutesOutput.innerText == 1) {
        minutesOutputLabel.innerText = 'minute';
    }else {
        minutesOutputLabel.innerText = 'minutes';
    }
 
    if(secondsOutput.innerText == 1) {
        secondsOutputLabel.innerText = 'second';
    }else { 
        secondsOutputLabel.innerText = 'seconds';
    }
}
setInterval(countdown, 1000);
