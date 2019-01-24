// hadoop1:xxxExample
// hadoop1:test:version
// hadoop1:compressExample
// hadoop1:calcExample
// hadoop1:calcExample1
// hadoop1:calc1
// hadoop1:calcExample2
// hadoop1:calc2
// hadoop1:calcExample3
// hadoop1:calc3
// hadoop1:aSubExample
// hadoop1:subExample
// hadoop1:aiExample
// hadoop1:aiExample1
// hadoop1:ai1
// hadoop1:aiExample2
// hadoop1:ai2
// hadoop1:aiExample3
// hadoop1:ai3


async= require('async');
epics=require('epics');
var pvs={ai:[{pvname:"hadoop1:calc3"},{pvname:"hadoop1:ai1"}]
}

function connect_pvs(pvs,callback){
    async.map(pvs, function(item, callback) {
        // console.log(item.pvname+" is connect*");
       var pv = new epics.Channel(item.pvname);
       pv.connect(function(err) {
       if(pv.state())
       {
          pv.monitor('value', function(data) {
            console.log('Value:',item.pvName,data);
        })
          callback(null,pv);
        //   console.log(item.pvname+" is connected*");
      }}
      );
    }, function(err,results){
         callback(err,results); 
  });
};

connect_pvs(pvs.ai,function(err,results){
    
    async.map(results,function(item){
        //console.log(err,results)
      item.on('value', function(data) {
      console.log('Value:',item.pvName,data);
//      socket.emit(item.pvName, data);
    //console.log(data);
      console.log(item.pvName+" value change socket evnet emit")
      });  
    })
});
