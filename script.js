function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes / 2);
    const minuteDeg = (minutes * 6);
    const secondDeg = (seconds * 6);

    document.querySelector(".hour-hand").style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector(".minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector(".second-hand").style.transform = `rotate(${secondDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
