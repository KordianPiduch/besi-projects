
function btn_restart_project1_btn_onMouseClick(me, eventInfo)
{
    if (project.getTag("theme") === true){
        // light mode
        project.setTag("background_color", "rgb(250,250,250)") 
        project.setTag("bar_color", "rgb(200,200,200)") 
        project.setTag("text_color", "rgb(0,0,0)")
        project.setTag("frame_color", "rgb(102,102,102)") 
        
    }else{
        // dark mode
        project.setTag("background_color", "rgb(127,127,127)")
        project.setTag("bar_color", "rgb(102,102,102)")
        project.setTag("text_color", "rgb(255,255,255)")
        project.setTag("frame_color", "rgb(200,200,200)")
    }
}
function btn_user_settings(me, eventInfo)
{
    var user = project.getTag("HMI_USER")
    if (user == "operator"){
        project.showDialog("user_management_operator.jmx")
    }
    else if (user == "service"){
        project.showDialog("user_management_service.jmx")
    }
    else {
        project.showDialog("user_management_base.jmx")
    }
}
