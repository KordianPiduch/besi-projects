$hmi.addPagesScript({// ------------------------------------  4-3802  ------------------------------ 

"p0_page0": function(){
// ------------------------------------  Header ------------------------------
var $=null;var jQuery=null;
$hmi.getActiveProject().__eval__=function(a){return eval(a);}
var project=$hmi.getProjectInterface();
var page=project;
page.__eval__=$hmi.getActiveProject().__eval__;
var Group = $hmi.getJSModule('Group');var State = $hmi.getJSModule('State');
// --------------------------------------User code -------------------------------

function startup_setup_OnAction(me, eventInfo)
{
    project.setTag("shipyard_name", "Akdeniz Gemi Insa Sanayi Ticaret A.S.");
    project.setTag("besi_no", "4-3802");
    project.setTag("hull_no", "NB 36");
    
    // default to black theme
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
        hmi_id = 2;
    }
    project.setTag("HMI_ID", hmi_id)
}
function redundancy_OnAction(me, eventInfo)
{
    var addr = [192,168,10,10]
    
    if (project.getTag("ping_status_slave")) {
        if (project.getTag("slave/OPCUAServer@BESI-2|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|GlobalVars|slave_to_master|slave_plc_in_control")){
            addr = [192,168,10,20]
        }
    }
    project.setTag("ip_address", addr, -1);
}
function login_time_OnAction(me, eventInfo)
{
    var counter_value = project.getTag("seconds_counter");
    if (counter_value > 0) {
        var reminder = counter_value % 60;
        var quotient = (counter_value - reminder) / 60
        project.setTag("seconds_counter", counter_value - 1);
        project.setTag("counter_time_string", quotient+"m "+reminder+"s")
    }
}// ------------------------------------  Footer  ------------------------------
page.bindJSCallback(false);

}
});