/*!
javascript module: valve_stepless-1.0.js
javascript source file path: lib\valve_stepless-1.0\valve_stepless-1.0.js
*/
this.wgtValve = wgt.getWidget(wgt.id)
this.wgtValveSymbol = wgt.getWidget(wgt.id + ".valve_symbol")
this.wgtValveTriangleBottom = wgt.getWidget(wgt.id + ".valve_symbol.triangle_bottom")
this.wgtValveTriangleUpper = wgt.getWidget(wgt.id + ".valve_symbol.triangle_upper")
var _valve_nr = this.wgtValve.getProperty("ValveID");
var _valve_id = "OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|GlobalVars|GVL|valves|valves["+_valve_nr.toString()+"]|sttValve"
var _system_id = this.wgtValve.getProperty("SYSTEM_ID");

var gray = "rgb(237,237,237)"
var red = "rgb(220,0,0)"
var green = "rgb(0,200,0)"
var yellow = "rgb(170,170,127)"  // default color 

this.button_onMouseClick = function(me,eventInfo)
{
    var remote_mode = project.getTag(_valve_id + "\|remote_mode")
    var hmi_id = project.getTag("HMI_ID")
    var in_control_path = "OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|Programs|control|system_control|system_control["+_system_id.toString()+"]|system_control["+_system_id.toString()+"]["+hmi_id.toString()+"]|in_control"
    var in_control = project.getTag(in_control_path)
    if (_system_id == "-1"){  // system_id set to -1 means disable control via take control button
        in_control = true;
    }

    if (!remote_mode && in_control == 1){
        project.setTag("valve_prefix", _valve_id);
        project.setTag("valve_dialog_base_x", this.wgtValve.getProperty("x"));
        project.setTag("valve_dialog_base_y", this.wgtValve.getProperty("y")-20);
        project.showDialog("valve_stepless.jmx");
    }
    
}
this.valve_per_onDataUpdate = function(me,eventInfo)
{
    var color = yellow;
    var pos_per = project.getTag(_valve_id + "\|stepless\|position_per")
    var pos_open = project.getTag(_valve_id + "\|position_open")
    var pos_close = project.getTag(_valve_id + "\|position_close")
    if (pos_per >= 100 && pos_open){
        pos_per = 100;
        color = green;
    }
    if (pos_per <= 0 && pos_close){
        pos_per = 0
        color = gray
    }
    var angle = 90 / 100 * pos_per;
    
    this.wgtValveSymbol.setProperty("rot", angle);
    this.wgtValveTriangleBottom.setProperty("fill", color);
    this.wgtValveTriangleUpper.setProperty("fill", color);
    return false; 
}
this.button_onMouseHold = function(me,eventInfo)
{
    var hmi_id = project.getTag("HMI_ID")
    var in_control_path = "OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|Programs|control|system_control|system_control["+_system_id.toString()+"]|system_control["+_system_id.toString()+"]["+hmi_id.toString()+"]|in_control"
    var in_control = project.getTag(in_control_path)
    if (_system_id == "-1"){  // system_id set to -1 means disable control via take control button
        in_control = true;
    }
    
    var simulation_mode = project.getTag("OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|GlobalVars|GVL|simulation_mode");
    if (simulation_mode && in_control){
        project.setTag("valve_prefix", _valve_id);
        project.showDialog("simulation_valve.jmx");
    }
}


