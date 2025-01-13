/*!
javascript module: tank-1.0.js
javascript source file path: lib\tank-1.0\tank-1.0.js
*/
this.wgtTank = wgt.getWidget(wgt.id)
this.wgtVolumePer = wgt.getWidget(wgt.id + ".field_per.value")
this.wgtVolumeWeight = wgt.getWidget(wgt.id + ".field_weight.value")
this.wgtWarningIcon = wgt.getWidget(wgt.id + ".WarningIcon")
var _tank_nr = this.wgtTank.getProperty("TankID");
var _tank_id = "OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|GlobalVars|GVL|tanks|tanks["+_tank_nr.toString()+"]|sttTank"

var red = "rgb(240,0,0)"
var orange = "rgb(255,104,32)"

this.field_volume_value_onDataUpdate = function(me,eventInfo)
{
    var volume = project.getTag(_tank_id + "\|volume");
    var density = project.getTag(_tank_id + "\|density");
    var max_volume = project.getTag(_tank_id + "\|tank_max_volume");
    var volume_per = volume / max_volume * 100;
    var volume_weight = volume * density / 1000;
    
    // measurements 
    this.wgtVolumePer.setProperty("value", volume_per)
    this.wgtVolumeWeight.setProperty("value", volume_weight)
    this.wgtTank.setProperty("*.bargraph.bar.value", volume_per)
 
    return false; 
}
this.help_label_status_onDataUpdate = function(me,eventInfo)
{
    // failure / warn color indication
    var status = project.getTag(_tank_id + "\|status");
    if (status == 1 || status == 2 || status == 3){
        this.wgtWarningIcon.setProperty("stroke", orange)
    }
    else{
        this.wgtWarningIcon.setProperty("stroke", red)
    }
    return false; 
}
this.setting_button_btn_onMouseClick = function(me,eventInfo)
{
    project.setTag("tank_prefix", _tank_id);
    project.showDialog("tank_settings.jmx");
}