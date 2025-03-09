
function BtnStd1_btn_onMouseClick(me, eventInfo)
{
    var semi_auto_data_path = "OPCUAServer@BESI-1|Objects|DeviceSet|WAGO 750-8212 PFC200 G2 2ETH RS|Resources|Application|Programs|semi_automatic|semi_auto_data|"
    var health_check_path = semi_auto_data_path + "health_status|"
    var failue = false
    
    if (project.getTag(health_check_path + "valves_sea_chest_external") == false){
        alert("EXTERNAL SEA CHEST VALVES IN FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "valves_sea_chest_internal") == false){
        alert("INTERNAL SEA CHEST VALVES IN FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "valves_cross_section") == false){
        alert("CROSS SECTION VALVE FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "valves_pump_suction") == false){
        alert("VALVES ON PUMP SUCTION FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "valves_pump_discharge") == false){
        alert("VALVES ON PUMP DISCHARGE FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "valves_ballast_tanks") == false){
        alert("VALVES ON BALLAST TANK FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "tanks_portside") == false){
        alert("TANKS ON PORTSIDE FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "tanks_starboard") == false){
        alert("TANKS ON STARBOARD FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "pumps_portside") == false){
        alert("PUMPS ON PORTSIDE FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "pumps_starboard") == false){
        alert("PUMPS ON STARBOARD FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
  
    if (project.getTag(health_check_path + "drafts_all") == false){
        alert("DRAFT SENSORS IN FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "deflections_all") == false){
        alert("DEFLECTION SENSORS IN FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(health_check_path + "inclinometers_all") == false){
        alert("INCLINOMETERS SENSORS FAILURE: check alarm list to validate sensors in failure state");
        failure = true;
    }
    
    if (project.getTag(semi_auto_data_path + "loading_data_available") == false){
        alert("MISSING DATA FROM LOADING COMPUTER: steps AND/OR suggested values are missing. Check communication status");
        failure = true;
    }
    
    if (project.getTag(semi_auto_data_path + "pump_selection_ok") == false){
        alert("PUMP SELECTION VALIDATION FAILED: check if pumps are selected, and validate suction valve position");
        failure = true;
    }
    
    if (project.getTag(semi_auto_data_path + "seachest_valves_ok") == false){
        alert("SEA CHEST POSITION VALIDATION FAILED: check if external sea chest valves are in correct position");
        failure = true;
    }
    
    if (failure == true){
        alert("SEMI AUTO START FAILURE. System should be in healthy state before starting this mode. Validate system and try again.")
    }
}