import epics
# import time
import sys
print sys.argv[0]
print sys.argv[1]
pv1=epics.PV(sys.argv[1])
# pv1=epics.PV('hadoop1:ai1')
def onChanges(pvname=None,value=None,timestamp=None,status=None,severity=None,**kw):
    # file1=open(path+'test'+'.txt','w')
    print pvname,value,timestamp,status,severity
pv1.add_callback(onChanges)