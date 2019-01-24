var path=require('path')
var chokidar=require('chokidar');
var fs=require('fs')
var testfile=path='/opt/WriteProgram2/test.txt'
chokidar.watch(testfile,{
    persistent: true,
    depth:0
}).on('all',(event)=>{
    // console.log(event);
    var content=fs.readFile(path,'utf-8',function(err,data){
        console.log(data);
    })
    // console.log(content)

})
