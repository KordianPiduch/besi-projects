function usb_connection_check(me, eventInfo)
{
    // I would preffer to use USB Device Status, but for some reason while testing it was always true with or without usb drive connected. 
    // used USB Drive Name as workaround
    
    var sysVar = project.getWidget( "_SysPropMgr" );
    var usb_drive_name = sysVar.getProperty("USB Drive Name");
    if (usb_drive_name === "No USB Device"){
        alert("USB Drive is not connected. Connect USB Drive and try again!")
    }

    return False;
}