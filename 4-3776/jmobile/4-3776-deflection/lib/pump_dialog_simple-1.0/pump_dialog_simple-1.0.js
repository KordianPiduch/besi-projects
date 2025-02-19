/*!
javascript module: pump_dialog_simple-1.0.js
javascript source file path: lib\pump_dialog_simple-1.0\pump_dialog_simple-1.0.js
*/
this.wgtPump = wgt.getWidget(wgt.id)
var _pump_id = this.wgtPump.getProperty("pump_prefix");
var _hide_name_bar = this.wgtPump.getProperty("hide_name_bar");
this.wgtPressName = wgt.getWidget(wgt.id + ".field_title")
this.wgtSaveButton = wgt.getWidget(wgt.id + ".save_button")

if (_hide_name_bar === "true"){
    this.wgtPressName.setProperty("visibility", false);
    this.wgtSaveButton.setProperty("visibility", false);
}else{
    this.wgtPressName.setProperty("visibility", true);
    this.wgtSaveButton.setProperty("visibility", true);
}
