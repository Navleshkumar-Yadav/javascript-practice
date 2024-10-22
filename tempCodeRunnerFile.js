function createTimer(time, timerId) {
        console.log("Creating a new timer with id", timerId);
        setTimeout(() => {
            console.log(`Timer with id ${timerId} is done`);
        }, time);  
        console.log("Successfully created a new timer id",timerId);
}