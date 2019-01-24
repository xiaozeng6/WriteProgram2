import happybase
import epics
import time
import sys
import os
pv1=epics.PV('hadoop1:ai1')
connection=happybase.Connection('hadoop1')
table=connection.table('PVSimulator_test')
# ,PVSimulator_test
def onChanges(pvname=None,value=None,timestamp=None,status=None,severity=None,type=None,**kw):
    print pvname,value,timestamp,status,severity,type
    table.put(pvname+'_'+str(timestamp),{'PV:val':str(value),'PV:status':str(status),'PV:severity':str(severity)},timestamp=int(timestamp))



pv1.add_callback(onChanges)
# print onChanges()

t0=time.time()
while time.time(): #-t0<3: 
    time.sleep(1.e-3)