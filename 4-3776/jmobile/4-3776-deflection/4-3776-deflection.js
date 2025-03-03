
function startup_setup_OnAction(me, eventInfo)
{
    project.setTag("shipyard_name", "Shipyard");
    project.setTag("besi_no", "Project");
    project.setTag("hull_no", "Hull");
    
    // default to black theme
    if (project.getTag("theme") === true){
        // light mode
        project.setTag("background_color", "rgb(250,250,250)") 
        project.setTag("bar_color", "rgb(200,200,200)") 
        project.setTag("text_color", "rgb(0,0,0)")
        project.setTag("frame_color", "rgb(102,102,102)") 
        project.setTag("stroke_color", "rgb(0,0,0)")
    }else{
        // dark mode
        project.setTag("background_color", "rgb(127,127,127)")
        project.setTag("bar_color", "rgb(102,102,102)")
        project.setTag("text_color", "rgb(255,255,255)")
        project.setTag("frame_color", "rgb(200,200,200)")
        project.setTag("stroke_color", "rgb(255,255,255)")
    }
    project.setTag("stroke_width", 2);
    
    // set HMI ID
    var hmi_ip = project.getTag("HMI_IP");
    var hmi_id = 0;
    if (hmi_ip == "192.168.10.15"){
        hmi_id = 1;
    }
    if (hmi_ip == "192.168.10.25"){
        hmi_id = 2;
    }
    if (hmi_ip == "192.168.10.35"){
        hmi_id = 3;
    }
    // for test purposes only!!
    if (hmi_ip == "10.211.55.6"){
        hmi_id = 3;
    }
    project.setTag("HMI_ID", hmi_id)
    
    // set HMI OS (BSP) 
    var main_os = project.getTag("MainOS")
    if (String(main_os).search("UN") < 0){
        project.setTag("HMI_OS", main_os)
    } else {
        project.setTag("HMI_OS", String(main_os).substring(0,4))
    }
}
//function redundancy_OnAction(me, eventInfo)
//{
//    var addr = [192,168,10,10]
    
//    if (project.getTag("ping_status_slave")) {
//        if (project.getTag("slave/OPCUAServer@BESI-2|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|GlobalVars|slave_to_master|slave_plc_in_control")){
//            addr = [192,168,10,20]
//        }
//    }
//    project.setTag("ip_address", addr, -1);
//}
function login_time_OnAction(me, eventInfo)
{
    var counter_value = project.getTag("seconds_counter");
    if (counter_value > 0) {
        var reminder = counter_value % 60;
        var quotient = (counter_value - reminder) / 60
        project.setTag("seconds_counter", counter_value - 1);
        project.setTag("counter_time_string", quotient+"m "+reminder+"s")
    }
}