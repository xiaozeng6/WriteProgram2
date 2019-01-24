var epics=require('epics');
var pv=new epics.Channel('hadoop1:calc3');


for(var i=0;1<1000;i++)
{
    console.log(pv.state());
    pv.connect(function(){
    
        pv.monitor();
        pv.on('value',function(data){
            console.log(data);
            
        });
    });
    }
    