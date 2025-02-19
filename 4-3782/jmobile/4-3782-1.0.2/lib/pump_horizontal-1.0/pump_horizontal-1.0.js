/*!
javascript module: pump_horizontal-1.0.js
javascript source file path: lib\pump_horizontal-1.0\pump_horizontal-1.0.js
*/
this.wgtPump = wgt.getWidget(wgt.id)
this.wgtPumpSymbol = wgt.getWidget(wgt.id + ".pump_symbol")
this.wgtPumpLeftPressValue = wgt.getWidget(wgt.id + ".pressure_sensor_left.numeric1")
this.wgtPumpRightPressValue = wgt.getWidget(wgt.id + ".pressure_sensor_right.numeric1")
this.wgtPumpLeftWarn = wgt.getWidget(wgt.id + ".pressure_sensor_left.warn_sign")
this.wgtPumpRightWarn = wgt.getWidget(wgt.id + ".pressure_sensor_right.warn_sign")

var _pump_nr = this.wgtPump.getProperty("PumpID");
var _pump_id = "OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|GlobalVars|GVL|pumps|pumps["+_pump_nr.toString()+"]|sttPump"
var _direction = this.wgtPump.getProperty("direction");
var _simple_settings = this.wgtPump.getProperty("setting_type");
var _system_id = this.wgtPump.getProperty("SYSTEM_ID");

if (_direction == "left"){
    this.wgtPumpSymbol.setProperty("rot", 180)
}else{
    this.wgtPumpSymbol.setProperty("rot", 0)
}

this.help_label_suction_onDataUpdate = function(me,eventInfo)
{
    var suction_pressure = project.getTag(_pump_id + "\|suction_sensor\|pressure")
    if (_direction == "left"){
        this.wgtPumpRightPressValue.setProperty("value", suction_pressure)
    }else{
        this.wgtPumpLeftPressValue.setProperty("value", suction_pressure)
    }
    return false; 
}

this.help_label_discharge_onDataUpdate = function(me,eventInfo)
{
    var discharge_pressure = project.getTag(_pump_id + "\|discharge_sensor\|pressure")
    if (_direction == "left"){
        this.wgtPumpLeftPressValue.setProperty("value", discharge_pressure)
    }else{
        this.wgtPumpRightPressValue.setProperty("value", discharge_pressure)
    }
    return false;  
}
this.help_label_suction_warning_onDataUpdate = function(me,eventInfo)
{
    var suction_failure = project.getTag(_pump_id + "\|suction_sensor\|failure")
    if (_direction == "left"){
        this.wgtPumpRightWarn.setProperty("visibility", suction_failure)
    }else{
        this.wgtPumpLeftWarn.setProperty("visibility", suction_failure)
    }
    return false;  
}

this.help_label_discharge_warning_onDataUpdate = function(me,eventInfo)
{
    var discharge_failure = project.getTag(_pump_id + "\|discharge_sensor\|failure")
    if (_direction == "left"){
        this.wgtPumpLeftWarn.setProperty("visibility", discharge_failure)
    }else{
        this.wgtPumpRightWarn.setProperty("visibility", discharge_failure)
    }
    return false;
}
this.button_onMouseClick = function(me,eventInfo)
{
    var hmi_id = project.getTag("HMI_ID")
    var in_control_path = "OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|Programs|control|system_control|system_control["+_system_id.toString()+"]|system_control["+_system_id.toString()+"]["+hmi_id.toString()+"]|in_control"    
    var in_control = project.getTag(in_control_path)
    if (_system_id == "-1"){  // system_id set to -1 means disable control via take control button
        in_control = true;
    }
    project.setTag("pump_prefix", _pump_id);
    if (_simple_settings == "simple"){
        project.setTag("pump_dialog_simple", true);
    }else{
        project.setTag("pump_dialog_simple", false);
    }
    project.setTag("pump_dialog_x", this.wgtPump.getProperty("x")+15);
    project.setTag("pump_dialog_y", this.wgtPump.getProperty("y")-30);
    if (in_control == 1){
        project.showDialog("pump_base.jmx");
    }
}