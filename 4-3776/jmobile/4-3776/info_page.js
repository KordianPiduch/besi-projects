
function btnProjectSettings_btn_onMouseClick(me, eventInfo)
{
    var user = project.getTag("HMI_USER")
    if (user == "admin"){
        project.showDialog("project_config_all.jmx")
    }
    else {
        project.showDialog("project_config_base.jmx")
    }
}