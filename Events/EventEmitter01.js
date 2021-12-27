
const EventEmitter = require("events");
let elem = new EventEmitter();

elem.on('newListener', (event, listener) => {
   console.log(event, listener);
})
elem.on("hello", (data) => {
    console.log("say hello to ~ " + data);
});



elem.emit("hello", "yeeyan")
elem.emit("hello", "george")



// elem.on("a", function a(){});
// elem.on("b", function b(){});
// elem.on("c", function c(){});

// console.log(elem.eventNames());
// // ['a', 'b', 'c']