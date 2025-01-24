/*!
javascript module: take_control_button-1.0.js
javascript source file path: lib\take_control_button-1.0\take_control_button-1.0.js
*/
this.wgtTakeControlBtn = wgt.getWidget(wgt.id)
this.wgtBtnLabel = wgt.getWidget(wgt.id + ".BtnStd1.lbl")


var _system_id = this.wgtTakeControlBtn.getProperty("SYSTEM_ID");


this.BtnIllum1_ind1_onDataUpdate = function(me,eventInfo)
{
    var hmiid = project.getTag("HMI_ID")
    var _in_control = project.getTag("OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|Programs|control|system_control|system_control["+_system_id.toString()+"]|system_control["+_system_id.toString()+"]["+hmiid.toString()+"]|in_control")
    if (_in_control == true){
        this.wgtBtnLabel.setProperty("text","Release Control")
    }
    else{
        this.wgtBtnLabel.setProperty("text","Take Control")
    }

    return false; 
}
