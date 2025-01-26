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
| valve list         | 4-3776 Valve list rev. c 28.02.2025            |
| sensor list        | 4-3776 sensor list rev. b 25.10.24             |

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
 - IMPS (AMS related alarms)
### TCP/IP 
 - Loading Computer (data exchange for loading procedure)


## Requirements 
- Codesys v3.5 SP20 Patch 5
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

### Semi-Automatic mode mapping

#### tank to valve
| tank ID | tank name | valve ID | valve name |
|:-------:|:---------:|:--------:|:----------:|
|    1    |    DB1P   |    26    |   BW4.22   |
|    2    |    DB1S   |    27    |   BW4.23   |
|    3    |    DB2P   |    24    |   BW4.19   |
|    4    |    DB2S   |    25    |   BW4.20   |
|    5    |    DB3P   |     9    |    BW4.2   |
|    6    |    DB3S   |    11    |    BW4.4   |
|    7    |    DB4P   |     8    |    BW4.1   |
|    8    |    DB4S   |    10    |    BW4.3   |
|    9    |    DB5P   |    16    |    BW4.9   |
|    10   |    DB5S   |    17    |   BW4.10   |
|    11   |    DB6P   |    18    |   BW4.12   |
|    12   |    DB6S   |    19    |   BW4.13   |
|    13   |    WB1P   |    26    |   BW4.22   |
|    14   |    WB1S   |    27    |   BW4.23   |
|    15   |    WB2P   |    22    |   BW4.17   |
|    16   |    WB2S   |    23    |   BW4.18   |
|    17   |    WB3P   |    20    |   BW4.15   |
|    18   |    WB3S   |    21    |   BW4.16   |
|    19   |    WB4P   |    12    |    BW4.5   |
|    20   |    WB4S   |    13    |    BW4.6   |
|    21   |    WB5P   |    14    |    BW4.7   |
|    22   |    WB5S   |    15    |    BW4.8   |
|    23   |    WB6P   |    18    |   BW4.12   |
|    24   |    WB6S   |    19    |   BW4.13   |

#### pump to valve (deballast)
| pump ID |      pump name     | valve ID suction | valve name | valve ID discharge | valve name |
|:-------:|:------------------:|:----------------:|:----------:|:------------------:|:----------:|
|    5    | Ballast Pump 1 PS  |         4        |    BW2.1   |         28         |    BW5.1   |
|    6    | Ballast Pump 2 PS  |         5        |    BW2.2   |         29         |    BW5.2   |
|    7    |  Ballast Pump 1 SB |         6        |    BW2.3   |         30         |    BW5.3   |
|    8    |  Ballast Pump 2 SB |         7        |    BW2.4   |         31         |    BW5.4   |

#### valves (ballast / filling)
|  valve id  | valve name |            note           |
|:----------:|:----------:|:-------------------------:|
| ps filling |            |                           |
|      1     |    BW1.1   |                           |
|     32     |    BW9.1   | outside / indication only |
| sb filling |            |                           |
|      3     |    BW1.3   |                           |
|     33     |    BW9.2   | outside / indication only |

#### cross section valve
| valve ID | valve name |
|:--------:|:----------:|
|     2    |    BW1.2   |