const countdown = document.querySelector('.countdown');

//Set launch date (ms)
const launchDate = new Date('Jan 1, 2021 13:00:00').getTime();

console.log(launchDate)

// Update every second
const intvl = setInterval(() => {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Distance from now to the launch date
    const distance = launchDate - now;

    console.log(distance);

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    //Display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    // If launch date is past
    if(distance < 0) {
        //Stop countdown
        clearInterval(intvl);
        //Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!'
    }

}, 1000);