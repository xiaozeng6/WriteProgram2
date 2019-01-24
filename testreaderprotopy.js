
var pvProto=require('./test_pb.js');
var fs=require('fs');
var readline=require('readline');
var information;

// var rl=readline.createInterface({
//     input:fs.createReadStream('./testproto.txt','UTF-8')
// });
// rl.on('line',(line)=>{
//     EachLine=line.split(',');
// //    console.log(EachLine);
//     information=pvProto.FieldValue.deserializeBinary(new Uint8Array(EachLine));
//     console.log(information.getName(),information.getVal(),information.getTime());
// });
var data=fs.readFileSync('./testproto.txt')//,'UTF-8')
var information=pvProto.Hello.deserializeBinary(new Uint8Array(data))
console.log(information)
console.log(information.getValue())//,information.getValue());