function createTimer(time, timerId) {
        console.log("Creating a new timer with id", timerId);
        setTimeout(() => {
            console.log(`Timer with id ${timerId} is done`);
        }, time);  
        console.log("Successfully created a new timer id",timerId);
}
console.log("Starting the code");
createTimer(2000,1);
createTimer(0,2);
console.log("Starting a loops");
for(let i = 0 ; i<10000000000; i++){

}
console.log("Loop is done");
console.log("Last line of code done");
console.log("hello");
