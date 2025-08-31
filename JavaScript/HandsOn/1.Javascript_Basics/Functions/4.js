function f() {
    let message = 'Hello,David';
    console.log(message);
}
f();
var uname = 'Jeson'
function Message1() {
    uname = 'Tim';
    console.log("Hello " + uname);
}
console.log(uname);
Message1();
console.log(uname);
uname = 'Jeson' //global variable re-assigned
function Message2() {
    let uname = 'Tim';
    console.log("Hello " + uname);
}
console.log(uname);
Message2();
console.log(uname);
