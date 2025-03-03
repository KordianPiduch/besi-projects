/*!
javascript module: draft-1.0.js
javascript source file path: lib\draft-1.0\draft-1.0.js
*/
this.wgtDeflection = wgt.getWidget(wgt.id)
var _deflection_nr = this.wgtDeflection.getProperty("DeflectionID");
var _deflection_id = "OPCUAServer@BESI-7|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|GlobalVars|GVL|deflections|deflections["+_deflection_nr.toString()+"]|sttDeflection"

this.hotspotbtn_onMouseClick = function(me,eventInfo)
{
    // use the same pop up as draft sensor
    project.setTag("draft_prefix", _deflection_id);
    project.setTag("sensor_bargraph_reverse", false);
    project.showDialog("draft_settings.jmx");
}