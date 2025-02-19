
function user_settings(me, eventInfo)
{
    var user = project.getTag("HMI_USER")
    if (user == "operator"){
        project.showDialog("user_management_operator.jmx")
    }
    else if (user == "service"){
        project.showDialog("user_management_service.jmx")
    }
    else if (user == "admin"){
        project.showDialog("user_management_service.jmx")
    }
    else {
        project.showDialog("user_management_base.jmx")
    }
}