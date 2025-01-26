# 4-3776

This project is based on the template repository `besi-template`  
Tag: 1.1.2  
Commit: 874e40268ed8630df52b5ccf4786e702bc134243 

Software for projects: 4-3776


## Description
Shipyard: Goa SY  
Hull: Y-1279  
Type: Floating Dry Dock

### Main partuculars of Floating Dry Dock
Length of Pontoon : 120 m  
Breadth between outer walls (Top deck level) : 25 m  
Breadth between inner walls : 18 m  
Moulded depth (To top of walls) : 13 m  
Depth of Pontoon at C/L : 4.5 m  
Max Immersed Draft  : 11 m  
Lifting capacity : 4000 MT  

## Project design sources
| data               | version                                        |
|--------------------|------------------------------------------------|
| electrical drawing | 4-3776-3a Rev. 1 Electrical Drawing 14.06.2024 |
| valve list         | 4-3776 Valve list rev. a 14.06.2024            |
| sensor list        | 4-3776 sensor list 13.06.24                    |

## Project include:
- 33 valves (31 controls + 2 indications)
- 30 tanks
- 10 deflections
- 6 drafts
- 8 pumps
- HMI: 2 Touchscreens + 1 mimics for valve control
- 2 HPU 
- atmospheric sensor
- inclinometer trim
- inclinometer heel

## External communication
### RS485
 - IMPS (data + control)
### TCP/IP 
 - Loading Computer (data)


## Requirements 
- Codesys v3.5 SP20
- jMobile Studio 4.5.1 (523)

## Functional Description   

### Network Variables Lists

| list            | port | id |
|-----------------|------|----|
| master_to_slave | 1202 | 1  |
| slave_to_master | 1202 | 2  |
| master_to_mimic | 1203 | 3  |
| mimic_to_master | 1203 | 4  |
| slave_to_mimic  | 1204 | 5  |
| mimic_to_slave  | 1204 | 6  |
