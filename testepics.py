# -*-coding:utf-8 -*-
import epics
import time
import sys
import os
# print sys.argv[0]
# print sys.argv[1]
pv1=epics.PV(sys.argv[1])
# pv1=epics.PV('hadoop1:ai1')
# write=sys.stdout.write
# all_pv=[]
# all_information=[]
def mkdir(path):
    folder=os.path.exists(path)
    if not folder:
        os.makedirs(path)
        print 'ok'
    else:
        print 'no need'
path='/opt/WriteProgram2/'
mkdir(path)
  
def onChanges(pvname=None,value=None,timestamp=None,status=None,severity=None,**kw):
    file1=open(path+'test'+'.txt','w')   
    # print pvname,value,timestamp,status,severity
    #print pvname+','+repr(value)+','+repr(timestamp)+','+repr(status)+','+repr(severity)+'\n'
    file1.write(pvname+','+repr(value)+','+repr(timestamp)+','+repr(status)+','+repr(severity)+'\n')
    # file1.flush()
    file1.close()
    file2=open(path+'test2'+'.txt','a+')
    file2.write(pvname+','+repr(value)+','+repr(timestamp)+','+repr(status)+','+repr(severity)+'\n')
    file2.close()
    # write(pvname+','+repr(value)+','+repr(timestamp)+','+repr(status)+','+repr(severity)+'\n')
    # sys.stdout.flush()

pv1.add_callback(onChanges)
# print onChanges()

t0=time.time()
while time.time(): #-t0<3: 
    time.sleep(1.e-3)

