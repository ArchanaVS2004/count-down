const datePicker = document.getElementById('date-picker');
let timer;

datePicker.addEventListener('change', () => {
    const target = new Date(datePicker.value).getTime();
    
    // Reset any existing timer
    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
            clearInterval(timer);
            return;
        }

        // The Math
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // Update UI
        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;
    }, 1000);
});
