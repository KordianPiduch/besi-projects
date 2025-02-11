# 4-3782

This project is based on the template repository `besi-template`  
Tag: 1.1.0  
Commit: f8549a5154698bd65773c00689f9d91c88c0bb35  

Software for projects: 4-3782-85

## Description
Shipyard: New Dayang Shipbuilding Co.  
Hull: NDY1284/NDY1285/NDY1286/NDY1288  
Type: CROWN82 - 82000 DWT Bulk Carrier  

### Main partuculars of vessel
Length: <TODO>  
Width: <TODO>

## Project design sources
| data               | version                                        |
|--------------------|------------------------------------------------|
| electrical drawing | 4-3782-3j Rev. 1 Electrical Drawing 21.11.2024 |
| valve list         | 4-3782-85 valve list rev. c 08.11.24           |
| sensor list        | 4-3782-85 sensor list rev. b 09.09.24          |

## Project include:
- 53 valves 
- 28 tanks
- 4 drafts
- 6 pumps
    - 2 pumps with start permission
    - 4 standard pumps 
- HMI: 2 Touchscreens + 1 PC
- atmospheric sensor
- inclinometer trim
- inclinometer heel

## Project specific requirements:
- ballast pump control with permission signal

## External communication
### RS485
- AMS 
### TCP/IP
- Loading Computer

## Requirements 
- Codesys v3.5 SP20 Patch 5
- jMobile Studio 4.5.1 (523)

## Functional Description

### Voltage supervision alarms
All alarms are connected to master unit (PLC1), in case of main unit failure alarm monitoring will be disabled.

### Pump Control 
```
SHIPYARD REQUEST:
About the overload inquiry interface between the valve remote control and the switchboard.
BESI needs to modify the drawing, that is, a start button needs to be pressed twice: 
press the first time for the heavy load request signal, press the second time for the pump signal.
There are a total of 4 interface signals between the starter and the valve remote control. 
The signals sent to the starter by remote control of the valve are start (potential free normal open) and stop (passive normally open); 
The signals sent by the starter to the remote control of the valve are operation (potential free normal open) and power permissible (potential free normal open).
```

## Special requests
- pump control (specification in Functional Description / Pump Control)
- UREA TK has additional LOW LOW LEVEL alarm 


## Project History
### 1.0.0
init version 

### 1.0.1
bump codesys project version to SP20 Patch5