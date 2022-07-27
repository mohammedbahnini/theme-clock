window.addEventListener('load' , ()=>{
    // page elements
    const btn = document.querySelector('main button');
    const niddleSeconds = document.querySelector('.clock .clock__circle-seconds');
    const niddleMinutes = document.querySelector('.clock .clock__circle-minutes');
    const niddleHours = document.querySelector('.clock .clock__circle-hours');


    const hoursDisplay = document.querySelector('.hours');
    const minutesDisplay = document.querySelector('.minutes');
    
    const dayDisplay = document.querySelector('.day-name');
    const monthDisplay = document.querySelector('.month-name');
    const dayNumberDisplay = document.querySelector('.day-number');

    const days = ['Monday' , 'Tuesday' , 'Wednsday' , 'Thursday' , 'Friday' , 'Saturday' ,'Sunday'];
    const months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];

    const isDark = document.body.classList.contains('dark');
    

    function turnOnClock(){
        setInterval(() => {
            const seconds = parseInt(niddleSeconds.dataset.seconds) + 1;
             const minutes = parseInt(niddleMinutes.dataset.minutes) + 1;
             const hours = parseInt(niddleHours.dataset.hours) + 1;

             if( seconds == 60)
             {
                 niddleSeconds.style.transform = `translate(-1px, -1px) rotate(${-90}deg)`;
                 niddleMinutes.style.transform = `translate(-1px, -1px) rotate(${minutes * 6 - 90}deg)`;
                 
                 if( minutes == 60 )
                 {
                     niddleHours.style.transform = `translate(-1px, -1px) rotate(${hours * 30 - 90}deg)`;
                     niddleHours.dataset.hours = hours == 24? 0 : hours;
                     loadClock();
                 }
                 niddleMinutes.dataset.minutes = minutes == 60 ? 0 : minutes;
                 loadClock();
             }
            
             else 
             niddleSeconds.style.transform = `translate(-1px, -1px) rotate(${seconds * 6 - 90}deg)`;
             
             niddleSeconds.dataset.seconds = seconds == 60 ? 0 : seconds; 

            
         }, 1000);
    }

    function loadClock(){
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        // update niddles
        niddleSeconds.dataset.seconds = seconds
        niddleMinutes.dataset.minutes = minutes;
        niddleHours.dataset.hours = hours;


        // update display hours
        hoursDisplay.innerText = hours;
        minutesDisplay.innerText = (minutes<=9 ? '0' : '')+ minutes;
        
        // update display date 
        dayDisplay.innerText = days[date.getDay()-1];
        monthDisplay.innerText = months[date.getMonth()];
        dayNumberDisplay.innerText = date.getDate();

        // set niddles rotation
        niddleSeconds.style.transform = `translate(-1px, -1px) rotate(${seconds * 6 - 90}deg)`;
        niddleMinutes.style.transform = `translate(-1px, -1px) rotate(${minutes * 6 - 90}deg)`;
        niddleHours.style.transform = `translate(-1px, -1px) rotate(${hours * 30 - 90}deg)`;

       
    }
    loadClock();
    turnOnClock();

    btn.addEventListener('click' , ()=>{
        document.body.classList.toggle('dark');
        btn.innerText = document.body.classList.contains('dark') ? 'Light mode' : 'Dark mode';

    });
});