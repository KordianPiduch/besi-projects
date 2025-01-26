/*!
javascript module: pump_base_dialog-1.0.js
javascript source file path: lib\pump_base_dialog-1.0\pump_base_dialog-1.0.js
*/
this.settings_btn_onMouseClick = function(me,eventInfo)
{
    var use_simple_setting = project.getTag("pump_dialog_simple");
    if (use_simple_setting){
        project.showDialog("pump_settings_simple.jmx")
    }else{
        project.showDialog("pump_settings.jmx")
    }
}