# 3802


## Changes 

2.0.1
    Initial Version

2.0.2   
    [kpiduch] Fixes:  
        - updated valves ID on visu (remove duplicated CS98 and CS88)  
        - fix bit numbers for inputs/outputs, incorrect bit order (missing .13 and there was 2x .12 bit used (typo))  
        - restored original password for service user   
        - fix Context Menu button in project settigs (change in project setting to "onAction")  
        - fixed password for admin user   
  
2.0.3 
    [kpiduch] Fixes:  
        - fix to date format in alarm list (dd/mm/yyy - hh:mm:ss)  
        - fix voltage alarm (PLC3 and PLC4 resets was assign to signle GVL.reset, now signalas are assign to reset_plc3, reset_plc4 and reset input to alarm_monitoring fb was updated)  
    [kpiduch] Updates:
        - restet all values at once with single button
    