const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    const secondDegree = ((seconds / 60) * 360) + 90;
    const minDegree = ((min / 60) * 360) + 90;
    const hourDegree = ((hour / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(seconds);
    console.log(minHand);
    console.log(hourHand);
}

setInterval(setDate, 1000);