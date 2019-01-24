var fs=require('fs')
// function sleep(time=0){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve();
//         },time);
//     })
// }
path='/opt/WriteProgram2/'
var i=1
var j=0
var staticline='null'
while(i<30){
// var x=1
// function r(x){
//     
//     fs.readFile(path+'test.txt',function(err,data){
//         var dystr=data.toString();
//         //console.log(data);
//         j=staticline.localeCompare(dystr);
//         if (j==0){
//             console.log(dystr);
//             staticline=dystr;
//             fs.appendFileSync('./test3.txt',dystr)
//         }
        
//     })}
// while (i<20){r(1);i=i+1}

    //console.log(dystr);
    // console.log(staticline);
    //var dystr=data.toString();

    var dystr=fs.readFileSync(path+'test.txt','UTF-8');
  

    //j=dystr.localeCompare(staticline);
   //console.log(dystr);
    // // console.log(j);
    // // if (j==0){
    // //     j=j+100
    // // }
    // //console.log(typeof(j),j)
    if (dystr===staticline){continue}
    else{
        console.log(dystr)
        console.log(staticline)
        staticline=dystr.toString()
        //fs.appendFileSync('./test3.txt',dystr)
    }
    i=i+1;
    // // var j=0
    // fs.readFile(path+'test.txt','UTF-8',function(err,data){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         var j=staticline.localeCompare(data);
    //         if (j==0){
    //         j=j+100
    //         }
    //         if (j<10){
    //         console.log(data);
    //         staticline=data;
    //         }
    //     }

    // })
}

