/*!
javascript module: pump_dialog_simple-1.0.js
javascript source file path: lib\pump_dialog_simple-1.0\pump_dialog_simple-1.0.js
*/
this.wgtPump = wgt.getWidget(wgt.id)
var _pump_id = this.wgtPump.getProperty("pump_prefix");
var _sensor = this.wgtPump.getProperty("sensor");
this.wgtPressName = wgt.getWidget(wgt.id + ".field_title.label1")

var name = _sensor + " sensor"
this.wgtPressName.setProperty("text", name)