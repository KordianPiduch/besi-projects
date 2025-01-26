function label1_onDataUpdate(me, eventInfo)
{
    var sysVar = project.getWidget( "_SysPropMgr" );
    var current_user = sysVar.getProperty("This Client User-Name")
    
    var usrDetails = JSON.parse(project.getUserDetails());
    var num_of_users = usrDetails["users"].length;
    
    for(var i=0; i<num_of_users; i++){
        if(usrDetails["users"][i]["name"] == current_user){
            if(usrDetails["users"][i]["logOffTime"]==0){
                project.setTag("timer_user_logout_box_visibility", false)
            } else {
                project.setTag("timer_user_logout_box_visibility", true)
            }
            
            project.setTag("seconds_counter_for_current_user",usrDetails["users"][i]["logOffTime"]*60);
            project.setTag("seconds_counter",project.getTag("seconds_counter_for_current_user"));
        }
    }
    project.closeDialog("switch_user.jmx");
    return false; 
}
