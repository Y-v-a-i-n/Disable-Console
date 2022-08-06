# Disable-Console Module

✅  console.log() </br>
✅  console.error() </br>
✅  console.warn() </br>
✅  console.info() </br>
✅  console.debug() </br>
✅  console.assert() </br>
✅  console.clear() </br>
✅  console.count() </br>
✅  console.countReset() </br>
✅  console.dir() </br>
✅  console.dirxml() </br>
✅  console.group() </br>
✅  console.table() </br>
✅  console.time() </br>
✅  console.timeEnd() </br>
✅  console.timeLog() </br>
✅  console.timeStamp() </br>
✅  console.trace() </br>
✅  console.groupEnd() </br>
✅  console.groupCollapsed() </br>

How to use the module :

* example 1 : 
```js
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
```

* example 2 : 

```js
const Console=require("../index.js"),
    code="Q29uc29sZS5lbmFibGUoKSxjb25zb2xlLmxvZygnSGVsbG8gV29ybGQgIScpLENvbnNvbGUuZGlzYWJsZSgp";
/*
atob("Q29uc29sZS5lbmFibGUoKSxjb25zb2xlLmxvZygnSGVsbG8gV29ybGQgIScpLENvbnNvbGUuZGlzYWJsZSgp") = "Console.enable(),console.log('Hello World !'),Console.disable()"
*/
Console.disable();
eval(atob(code));
//output : Hello World !
console.log(atob(code));
//output : he console has been disabled
```