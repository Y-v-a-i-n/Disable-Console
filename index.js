var _0x65=["log","error","warn","info","debug","assert","clear","count","countReset","dir","dirxml","group","table","time","timeEnd","timeLog","timeStamp","trace","groupEnd","groupCollapsed"],
    _0x61=[],
    _0x62=console.log;
exports.disable=function(){_0x61=![]}
exports.enable=function(){_0x61=[]}
_0x65.forEach(_0x63=>{
    let _0x64=console[""+_0x63];console[""+_0x63]=function(){_0x61?_0x64.apply(this, arguments):_0x62("The console has been disabled")}
});