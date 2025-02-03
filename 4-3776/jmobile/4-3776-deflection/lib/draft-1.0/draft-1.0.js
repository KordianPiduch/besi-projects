/*!
javascript module: draft-1.0.js
javascript source file path: lib\draft-1.0\draft-1.0.js
*/
this.wgtDraft = wgt.getWidget(wgt.id)
var _draft_nr = this.wgtDraft.getProperty("DraftID");
var _draft_id = "OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|GlobalVars|GVL|drafts|drafts["+_draft_nr.toString()+"]|sttDraft"

this.hotspotbtn_onMouseClick = function(me,eventInfo)
{
    project.setTag("draft_prefix", _draft_id);
    project.setTag("sensor_bargraph_reverse", true);
    project.showDialog("draft_settings.jmx");
}