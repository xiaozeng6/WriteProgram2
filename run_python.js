var exec=require('child_process').exec;
// var arg1='hadoop1:ai1';
var pvname=['hadoop1:ai1','hadoop1:ai2']
var async=require('async')
var epics=require('epics')

// exec('python testepics.py '+arg1,function(error,stdout,stderr){
    
//     if(error){
//         console.info(stderr);
//     }
//     console.log(stdout);
// });

async.map(pvname,function(item,callback){
    exec('python testepics.py '+item,function(error,stdout,stderr){
    
        if(error){
            console.info(stderr);
        }
        // console.log(stdout);

    });
},
function(err,results){
    console.log('map:'+results);
})


// async.whilst(
//     function(){
//         return true
//     },
//     function(test){
//         async.map(pvname,function(item,callback){
//             exec('python testpymonitor.py '+item,function(error,stdout,stderr){
            
//                 if(error){
//                     console.info(stderr);
//                 }
//                 console.log(stdout);        
//             });
//         test()
//         },
//         function(err,results){
//             console.log('map:'+results);
//         })
//     },
//     function(err){
//         console.log('error')
//     }
// )
