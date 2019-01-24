# -*-coding:utf-8 -*-
import test_pb2
import os
path='/opt/WriteProgram2/'
protobuf=test_pb2.Hello()
protobuf.name='like'
protobuf.value=1
# print protobuf
p=protobuf.SerializeToString()
# with open(path+'testproto'+'.txt','r') as f1:
#     list1=f1.read()
#     print list1
# a=protobuf.ParseFromString(p)
# print a.name
print type(p)
file1=open(path+'testproto'+'.txt','w') 
file1.write(p)
file1.flush()
file1.close()





