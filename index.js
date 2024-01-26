function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const mese = currentTime.getMonth() + 1;
    const giorno = currentTime.getDate();
    const anno = currentTime.getFullYear();
    
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = daysOfWeek[currentTime.getDay()];

    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    const dateString = `${dayOfWeek.toUpperCase()} ${formatTime(giorno)}/${formatTime(mese)}/${anno}`;


    document.getElementById('time').innerText = timeString;
    document.getElementById('data').innerText = dateString;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Aggiorna l'orologio ogni secondo
setInterval(updateClock, 1000);

// Chiamata iniziale per evitare il ritardo di un secondo all'inizio
updateClock();
