// ES6 = MODULE = AN EXTERNAL FILE THAT CONTAINS REUSABLE CODE THAT CAN BE IMPORTED INTO OTHER JAVASCRIPT FILES.
//                WRITE REUSABLE CODE FOR MANY DIFFERENT APPS.
//                CAN CONTAIN VARIABLES, CLASSES, FUNCTIONS ... AND MORE INTRODUCES AS PART OF ECMAscript 2015 UPDATE

import { PI, getCircumference, getArea, getVolume } from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`); 