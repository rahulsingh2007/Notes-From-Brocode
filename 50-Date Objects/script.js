// DATE OBJECTS = OBJECTS THAT CONTAIN VALUES THAT REPRESENT DATA AND TIMES
//                THESE DATA OBJECTS CAN BE CHANGES AND FORMATTED

// Date (year, month, day, hour, minute, second, ms)
const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year, month, day, hour, minutes, seconds);

console.log(dayOfWeek);
date.setFullYear(2024);
console.log(date);


/* const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy New Year");
}
else{
    console.log("New Year Eve");
} */