function username_btn(me, eventInfo)
{
    var user = project.getTag("HMI_USER")
    if (user == "guest"){
        project.showDialog("switch_user.jmx")
    }
    else {
        project.showDialog("user_management.jmx")
    }
}
function touch_detected_onDataUpdate(me, eventInfo)
{
    project.setTag("seconds_counter",project.getTag("seconds_counter_for_current_user"));
    return false; 
}
function user_name_onDataUpdate(me, eventInfo)
{
    project.closeDialog("switch_user.jmx");
    return false; 
}
function simulation_indication_hotspotbtn_onMouseClick(me, eventInfo)
{
    alert("Life is a simulation, like all inputs currently.")
}