const timeContainer = document.querySelector('.time');
const startTime = Date.now();

function updateTime() {
    const currentTime = Date.now();
    const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
    timeContainer.textContent = elapsedSeconds;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to set the time immediately
updateTime();