// LocalStorage -> Stores data in browser which does not gets deleted even if the browser is closed
// SessionStorage -> Stores data temporarily, if the browser or tab is closed data gets deleted
// Cookies -> Stores data in browser's cookies property, it was developed to handle light data

/* // localStorage

// how to store
localStorage.setItem("name", "rahul");
console.log(localStorage);
// how to fetch
let val = localStorage.getItem("name");
console.log(val);
// how to remove
localStorage.removeItem("name");
// how to update
localStorage.setItem("name", "rehan");
console.log(localStorage);
// clear
localStorage.clear(); */

/* localStorage.setItem("friends", JSON.stringify(["rahul", "rehan"]));
let fr = JSON.parse(localStorage.getItem("friends"));
console.log(localStorage);
console.log(fr); */


/* // SessionStorage

sessionStorage.setItem("name", "rahul");
// how to fetch
let val = sessionStorage.getItem("name");
// how to remove
sessionStorage.removeItem("name");
// how to update
sessionStorage.setItem("name", "rehan");
// clear
sessionStorage.clear(); */

// Cookies -> to store small data in browser
//            around 4kb data in cookies and 5mb in local and session storage
//            on reloading the page the data will be sent to the server

document.cookie = "email = rahul@gmail.com";
document.cookie;

