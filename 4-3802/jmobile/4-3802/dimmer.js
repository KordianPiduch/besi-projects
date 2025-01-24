
function SldrVrt1_ndl_onDataUpdate(me, eventInfo)
{
    var duration = 5000; 
    var myTimer = page.setTimeout("project.closeDialog()",duration)
    return false; 
}