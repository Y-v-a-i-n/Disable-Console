const Console=require("../index.js"),
    message="Hello World !";
console.log(message);
//output : Hello World !
Console.disable();
console.log(message);
//output : The console has been disabled
console.clear();
//output : The console has been disabled
console.error(message);
//output : The console has been disabled
Console.enable();
console.log(message);
//output : Hello World !
console.error(message);
//output : Hello World ! 