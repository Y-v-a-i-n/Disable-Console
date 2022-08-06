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