/*!
javascript module: tank_dialog-1.0.js
javascript source file path: lib\tank_dialog-1.0\tank_dialog-1.0.js
*/
this.wgtTank = wgt.getWidget(wgt.id)
this.wgtBarHigh = wgt.getWidget(wgt.id + ".bargraph_alarm_high");
this.wgtBarHighHigh = wgt.getWidget(wgt.id + ".bargraph_alarm_high_high");
this.wgtBarLow = wgt.getWidget(wgt.id + ".bargraph_alarm_low");
var _tank_id = this.wgtTank.getProperty("tank_prefix");

// for some reason, high and high_high bargraph are reseted to 0,0 pos 
//every time dialog is closed in editor
this.wgtBarHigh.setProperty("x", 528);
this.wgtBarHigh.setProperty("y", 44);
this.wgtBarHighHigh.setProperty("x", 528);
this.wgtBarHighHigh.setProperty("y", 44);

var red = "rgb(240,0,0)";
var orange = "rgb(255,104,32)";

// alarm config
var enable_switch_HL = project.getTag(_tank_id + "/alarm/enable_switch_HL")
var enable_switch_LL = project.getTag(_tank_id + "/alarm/enable_switch_LL")
var enableHHL = project.getTag(_tank_id + "/alarm/enable_HHL");

if (enable_switch_HL == true) {
    this.wgtBarHigh.setProperty("visibility", false);
}else{
    this.wgtBarHigh.setProperty("visibility", true);
}
if (enable_switch_LL == true) {
    this.wgtBarLow.setProperty("visibility", false);
}else{
    this.wgtBarLow.setProperty("visibility", true);
}
if (enableHHL == true){
    this.wgtTank.setProperty("*.bargraph_alarm_high.bar.fill", orange)
}else{
    this.wgtTank.setProperty("*.bargraph_alarm_high.bar.fill", red)
}
