/*!
javascript module: schedulekeypadmodule-1.1.0.js
javascript source file path: js\com\hmi\schedulekeypadmodule-1.1.0.js
*/
var TypeLayer = wgt.getWidget(wgt.id+'.TypeLayer');
var ModeLayer = wgt.getWidget(wgt.id+'.ModeLayer');
var DateLayer = wgt.getWidget(wgt.id+'.DateLayer');
var TimeLayer = wgt.getWidget(wgt.id+'.TimeLayer');
var DayLayer = wgt.getWidget(wgt.id+'.DayLayer');
var LocationLayer = wgt.getWidget(wgt.id+'.LocationLayer');
var FrequencyLayer = wgt.getWidget(wgt.id+'.FrequencyLayer');
var ConditionLayer = wgt.getWidget(wgt.id+'.ConditionLayer');
var mgr = project.getWidget("_ScheduleMgr");
var sel = "SelectedSchedule";
var prevLayer = [TypeLayer];
var prevType = 0;
var curType = 0;
var prevMode = 0;
var curMode = 0;
var curMon = 0;
var prevMon = 0;
var curTue = 0;
var prevTue = 0;
var curWed = 0;
var prevWed = 0;
var curThu = 0;
var prevThu = 0;
var curFri = 0;
var prevFri = 0;
var curSat = 0;
var prevSat = 0;
var curSun = 0;
var prevSun = 0;

var prevLocation = 0;
var curLocation = 0;

var prevCondition = "";
var curCondition = "";

var prevY = 0;
var curY = 0;
var prevM = 0;
var curM = 0;
var prevD = 0;
var curD = 0;
var prevH = 0;
var curH = 0;
var prevm = 0;
var curm = 0;
var prevS = 0;
var curS = 0;
var prevms = 0;
var curms = 0;

this.moveLayersInStartPos = function()
{
  TypeLayer.x = 0;
  TypeLayer.y = 0;
  ModeLayer.x = 0;
  ModeLayer.y = 0;
  DateLayer.x = 0;
  DateLayer.y = 0;
  TimeLayer.x = 0;
  TimeLayer.y = 0;
  DayLayer.x = 0;
  DayLayer.y = 0;
  LocationLayer.x = 0;
  LocationLayer.y = 0;
  FrequencyLayer.x = 0;
  FrequencyLayer.y = 0;
  ConditionLayer.x = 0;
  ConditionLayer.y = 0;
};
this.allLayersInvisible = function() {
  TypeLayer.visible = false;
  ModeLayer.visible = false;
  DateLayer.visible = false;
  TimeLayer.visible = false;
  DayLayer.visible = false;
  LocationLayer.visible = false;
  FrequencyLayer.visible = false;
  ConditionLayer.visible = false;
};

this.showTypeLayer = function() {
  this.allLayersInvisible();
  this.showTypeButtons();
  TypeLayer.visible = true;
};

this.showModeLayer = function() {
  this.allLayersInvisible();
  this.showModeButtons();
  ModeLayer.visible = true;
};

this.showDateLayer = function() {
  this.allLayersInvisible();
  var d = new Date();
  if(curType == 8){
    wgt.getWidget(wgt.id+".DateLayer.dateTime1").setProperty("usingFormat","DD/MMM/YYYY");
    if(curY !== "*"){
      d.setFullYear(parseInt(curY, 10));
    }
    if(curM !== "*"){
      d.setMonth(parseInt(curM, 10));
    }
    if(curD !== "*"){
      d.setDate(parseInt(curD, 10));
    }
  }else{
    d.setFullYear(2000);
    if(curType == 7){
      wgt.getWidget(wgt.id+".DateLayer.dateTime1").setProperty("usingFormat","DD/MMM");
      if(curM !== "*"){
        d.setMonth(parseInt(curM, 10));
      }
      if(curD !== "*"){
        d.setDate(parseInt(curD, 10));
      }
    }else{
      d.setMonth(0);
    }
  }

  if(curType == 6){
    wgt.getWidget(wgt.id+".DateLayer.dateTime1").setProperty("usingFormat","DD");
    if(curD !== "*"){
      d.setDate(parseInt(curD, 10));
    }
  }
  if(curType == 2){
    wgt.getWidget(wgt.id+".DateLayer.dateTime2").setProperty("usingFormat","hh:mm:ss");
    if(curH !== "*"){
      d.setHours(parseInt(curH, 10));
    }else{
  		d.setHours(0);
  	}
    if(curm !== "*"){
     	d.setMinutes(parseInt(curm, 10));
  	}else{
  		d.setMinutes(0);
  	}
  	
  	if(curS !== "*"){
     	d.setSeconds(parseInt(curS, 10));
  	}else{ 
  		d.setSeconds(1);
  	}
  	wgt.getWidget(wgt.id+".DateLayer.headLabel1").visible = true;
    wgt.getWidget(wgt.id+".DateLayer.headLabel2").visible = false;
    wgt.getWidget(wgt.id+".DateLayer.dateTime2").visible = true;
    wgt.getWidget(wgt.id+".DateLayer.dateTime1").visible = false;
  }else{
  	wgt.getWidget(wgt.id+".DateLayer.headLabel1").visible = false;
    wgt.getWidget(wgt.id+".DateLayer.headLabel2").visible = true;
    wgt.getWidget(wgt.id+".DateLayer.dateTime2").visible = false;
    wgt.getWidget(wgt.id+".DateLayer.dateTime1").visible = true;
  }
  d.setMilliseconds(0);
  if(curType == 2)
  	wgt.getWidget(wgt.id+".DateLayer.dateTime2").setProperty("value",d.getTime()/1000);
  else
  	wgt.getWidget(wgt.id+".DateLayer.dateTime1").setProperty("value",d.getTime()/1000);
  DateLayer.visible = true;
};

this.showTimeLayer = function() {
  this.allLayersInvisible();
  if(curMode == 1 || curMode == 7 || curMode == 8){
    wgt.getWidget(wgt.id+".TimeLayer.headLabel1").visible = true;
    wgt.getWidget(wgt.id+".TimeLayer.headLabel2").visible = false;
  }else{
    wgt.getWidget(wgt.id+".TimeLayer.headLabel1").visible = false;
    wgt.getWidget(wgt.id+".TimeLayer.headLabel2").visible = true;
  }

  var d = new Date();
  if(curH !== "*"){
    d.setHours(parseInt(curH, 10));
  }

  if(curm !== "*"){
    d.setMinutes(parseInt(curm, 10));
  }

  if(curType == 3){
    wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("disableHour",1);
    d.setHours(0);
  }else{
    wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("disableHour",0);
  }
  if(curMode == 2 || curMode == 3 || curMode == 4 || curMode == 5){
    wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("clockMode",1);
  }else{
    wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("clockMode",0);
  }

  wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("timeSelected",d.getTime()/1000);
  TimeLayer.visible = true;
};

this.showDayLayer = function() {
  this.allLayersInvisible();
  this.showDayButtons();
  DayLayer.visible = true;
};

this.showLocationLayer = function() {
  this.allLayersInvisible();
  wgt.getWidget(wgt.id+".LocationLayer.controlList").setProperty("selection",curLocation);
  LocationLayer.visible = true;
};

this.showConditionLayer = function() { 
	this.allLayersInvisible(); 
  wgt.getWidget(wgt.id+".ConditionLayer.controlList").setProperty("value",curCondition);
  ConditionLayer.visible = true; 
};

this.showFrequencyLayer = function() {
  this.allLayersInvisible();
  var value = 100;
  if(curType == 2){
    wgt.getWidget(wgt.id+".FrequencyLayer.msgtext1").setProperty("value",0);
    wgt.getWidget(wgt.id+".FrequencyLayer.field1").setProperty("max",86400);
    value = 0;
    if(curH !== "*"){
      value += (parseInt(curH, 10))*60*60;
    }

    if(curm !== "*"){
      value += parseInt(curm, 10) * 60;
    }
    if(curS !== "*"){
      value += parseInt(curS, 10);
    }
    if(!value) value = 1;
  }else{
    wgt.getWidget(wgt.id+".FrequencyLayer.msgtext1").setProperty("value",1);
    wgt.getWidget(wgt.id+".FrequencyLayer.field1").setProperty("max",10000);
    if(curms)
      value = curms;
  }
  wgt.getWidget(wgt.id+".FrequencyLayer.field1").setProperty("value",value);

  FrequencyLayer.visible = true;
};

this.showprevLayer = function() {
  var layer = prevLayer.pop();
  this.allLayersInvisible();
  if(layer === ModeLayer){
  	this.showModeLayer();
  }
  layer.visible = true;
  if(!prevLayer.length)
    prevLayer.push(layer);
};

this.resetcurValues = function()
{
  curType = prevType;
  curMode = prevMode;
  curMon = prevMon;
  curTue = prevTue;
  curWed = prevWed;
  curThu = prevThu;
  curFri = prevFri;
  curSat = prevSat;
  curSun = prevSun;
  curLocation = prevLocation;
  curY = prevY;
  curM = prevM;
  curD = prevD;
  curH = prevH;
  curm = prevm;
  curS = prevS;
  curms = prevms;
  curCondition = prevCondition;
};

this.updateprevValues = function()
{
  prevType =  mgr.getProperty(sel+".TypeIndex");
  prevMode =  mgr.getProperty(sel+".ModeIndex");
  prevMon =  mgr.getProperty(sel+".Monday");
  prevTue =  mgr.getProperty(sel+".Tuesday");
  prevWed =  mgr.getProperty(sel+".Wednesday");
  prevThu =  mgr.getProperty(sel+".Thursday");
  prevFri =  mgr.getProperty(sel+".Friday");
  prevSat =  mgr.getProperty(sel+".Saturday");
  prevSun =  mgr.getProperty(sel+".Sunday");
  prevY =  mgr.getProperty(sel+".Year");
  prevM =  mgr.getProperty(sel+".Month");
  prevD =  mgr.getProperty(sel+".Day");
  prevH =  mgr.getProperty(sel+".Hour");
  prevm =  mgr.getProperty(sel+".Minute");
  prevS =  mgr.getProperty(sel+".Second");
  prevms = mgr.getProperty(sel+".MilliSec");
  prevCondition = mgr.getProperty(sel+".Condition");

  var strLocations = mgr.getProperty("locations");
  var arrLocations = strLocations.split(";");
  var strSelection = mgr.getProperty(sel+".Location");
  if(strSelection && strSelection.length){
    for (var i = 0; i < arrLocations.length; i++) {
      if(arrLocations[i] === strSelection){
        prevLocation = i;
        break;
      }
    }
  }else{
    for (var i = 0; i < arrLocations.length; i++) {
      if(arrLocations[i] === "Greenwich,UK"){
        prevLocation = i;
        break;
      }
	  if(arrLocations[i] === "London"){
        prevLocation = i;
        break;
      }
    }
  }
};

this.showTypeButtons = function(){
  var typeWgt = wgt.id+".TypeLayer.GridLayout.";
  var val = "ButtonWgt.value";
  wgt.getWidget(typeWgt+"btnEvery").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnHourly").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnDaily").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnWeekly").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnMonthly").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnYearly").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnDate").setProperty(val, 0);
  if(curType == 2)
    wgt.getWidget(typeWgt+"btnEvery").setProperty(val, 1);
  if(curType == 3)
    wgt.getWidget(typeWgt+"btnHourly").setProperty(val, 1);
  if(curType == 4)
    wgt.getWidget(typeWgt+"btnDaily").setProperty(val, 1);
  if(curType == 5)
    wgt.getWidget(typeWgt+"btnWeekly").setProperty(val, 1);
  if(curType == 6)
    wgt.getWidget(typeWgt+"btnMonthly").setProperty(val,1);
  if(curType == 7)
    wgt.getWidget(typeWgt+"btnYearly").setProperty(val, 1);
  if(curType == 8)
    wgt.getWidget(typeWgt+"btnDate").setProperty(val, 1);
};

this.showModeButtons = function(){
  var modeWgt = wgt.id+".ModeLayer.GridLayout.";
  var val = "ButtonWgt.value";
  wgt.getWidget(modeWgt+"BtnTime").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnSunRise+").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnSunRise-").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnSunSet+").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnSunSet-").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnRandom10").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnRandom20").setProperty(val, 0);
  if(curMode == 1)
    wgt.getWidget(modeWgt+"BtnTime").setProperty(val,1);
  if(curMode == 2)
    wgt.getWidget(modeWgt+"BtnSunRise+").setProperty(val, 1);
  if(curMode == 3)
    wgt.getWidget(modeWgt+"BtnSunRise-").setProperty(val, 1);
  if(curMode == 4)
    wgt.getWidget(modeWgt+"BtnSunSet+").setProperty(val, 1);
  if(curMode == 5)
    wgt.getWidget(modeWgt+"BtnSunSet-").setProperty(val, 1);
  if(curMode == 6)
    wgt.getWidget(modeWgt+"BtnRandom10").setProperty(val, 1);
  if(curMode == 7)
    wgt.getWidget(modeWgt+"BtnRandom20").setProperty(val, 1);

};

this.showDayButtons = function()
{
  var dayWgt = wgt.id+".DayLayer.GridLayout.";
  var val = "ButtonWgt.value";
  wgt.getWidget(dayWgt+"BtnMon").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnTue").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnWed").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnThu").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnFri").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnSat").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnSun").setProperty(val, 0);
  if(curMon)
    wgt.getWidget(dayWgt+"BtnMon").setProperty(val, 1);
  if(curTue)
    wgt.getWidget(dayWgt+"BtnTue").setProperty(val, 1);
  if(curWed)
    wgt.getWidget(dayWgt+"BtnWed").setProperty(val, 1);
  if(curThu)
    wgt.getWidget(dayWgt+"BtnThu").setProperty(val, 1);
  if(curFri)
    wgt.getWidget(dayWgt+"BtnFri").setProperty(val, 1);
  if(curSat)
    wgt.getWidget(dayWgt+"BtnSat").setProperty(val, 1);
  if(curSun)
    wgt.getWidget(dayWgt+"BtnSun").setProperty(val, 1);

};


this.cancelEdit = function()
{
  mgr.setProperty(sel,"");
  prevType = 0;
  prevLayer = [TypeLayer];
  page.reject();
};
this.initKeypad= function(me, eventInfo)
{
	this.edit(me, eventInfo);
	return false;
};

this.edit = function(me, eventInfo)
{
  prevLayer.push(TypeLayer);
  if(!prevType){
    var listData = wgt.getWidget(wgt.id+".LocationLayer.controlList").getProperty("listData");
    if(!listData){
      var strLocations = mgr.getProperty("locations");
      var arrLocations = strLocations.split(";");
      listData = new Array(arrLocations.length);
      for (var i = 0; i < arrLocations.length; i++) {
        listData[i] = new Array(3);
        listData[i][0] = arrLocations[i];
        listData[i][1] = 0;
        listData[i][2] = 1;
      }
      wgt.getWidget(wgt.id+".LocationLayer.controlList").setProperty("listData",listData);

    }
    listData = wgt.getWidget(wgt.id+".ConditionLayer.controlList").getProperty("listData");
    if(!listData){
      var strConditions = mgr.getProperty("conditionList");
      var arrConditions = strConditions.split(",");
      listData = new Array(arrConditions.length);
      for (var i = 0; i < arrConditions.length; i++) {
        listData[i] = new Array(3);
        listData[i][0] = arrConditions[i];
        listData[i][1] = arrConditions[i];
        listData[i][2] = 1;
      }
      wgt.getWidget(wgt.id+".ConditionLayer.controlList").setProperty("listData",listData);
    }
    this.updateprevValues();
    this.resetcurValues();
  }
  if(curType == 1)
    this.showFrequencyLayer();
  else
    this.showTypeLayer();
};


this.btnCancel = function(me, eventInfo)
{
  this.cancelEdit();
};

this.btnPrev = function(me, eventInfo)
{
  this.showprevLayer();
};

this.nextType = function(me, eventInfo)
{
  prevLayer.push(TypeLayer);
  this.showTypeButtons();
  if(curType == 1)
    this.showFrequencyLayer();
  else if( curType == 4 )
    this.showModeLayer();
  else if( curType == 3 )
    this.showTimeLayer();
  else if( curType == 5 )
    this.showDayLayer();
  else
    this.showDateLayer();
};

this.btnEvery = function(me, eventInfo)
{
  if(curType != 2)
  {
    curH = 0;
    curm = 0;
    curS = 1;
  }
  curType = 2;
  this.nextType(me, eventInfo);
};

this.btnHourly = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 3;
  this.nextType(me, eventInfo);
};

this.btnDaily = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 4;
  this.nextType(me, eventInfo);
};

this.btnWeekly = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 5;
  this.nextType(me, eventInfo);
};

this.btnMonthly = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 6;
  this.nextType(me, eventInfo);
};

this.btnYearly = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 7;
  this.nextType(me, eventInfo);
};

this.btnDate = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 8;
  this.nextType(me, eventInfo);
};

this.btnTime = function(me, eventInfo)
{
  curMode = 1;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showTimeLayer();
};
this.btnSunRiseP = function(me, eventInfo)
{
  curMode = 2;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showLocationLayer();

};
this.btnSunRiseM = function(me, eventInfo)
{
  curMode = 3;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showLocationLayer();

};
this.btnSunSetP = function(me, eventInfo)
{
  curMode = 4;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showLocationLayer();

};
this.btnSunSetM = function(me, eventInfo)
{
  curMode = 5;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showLocationLayer();

};
this.btnRandom10 = function(me, eventInfo)
{
  curMode = 6;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showTimeLayer();

};
this.btnRandom20 = function(me, eventInfo)
{
  curMode = 7;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showTimeLayer();
};

this.nextMode = function(me, eventInfo)
{
  prevLayer.push(ModeLayer);
  if(curMode == 2 || curMode == 3 || curMode == 4 || curMode == 5)
  	this.showLocationLayer();
  else
  this.showTimeLayer();
};

this.btnMon = function(me, eventInfo)
{
  curMon =! curMon;
  this.showDayButtons();
};
this.btnTue = function(me, eventInfo)
{
  curTue =! curTue;
  this.showDayButtons();

};
this.btnWed = function(me, eventInfo)
{
  curWed =! curWed;
  this.showDayButtons();

};
this.btnThu = function(me, eventInfo)
{
  curThu =! curThu;
  this.showDayButtons();

};
this.btnFri = function(me, eventInfo)
{
  curFri =! curFri;
  this.showDayButtons();

};
this.btnSat = function(me, eventInfo)
{
  curSat =! curSat;
  this.showDayButtons();

};
this.btnSun = function(me, eventInfo)
{
  curSun =! curSun;
  this.showDayButtons();

};

this.btnAll = function(me, eventInfo)
{
  if(curMon && curTue && curWed && curThu && curFri && curSat && curSun){
    curMon = 0;
    curTue = 0;
    curWed = 0;
    curThu = 0;
    curFri = 0;
    curSat = 0;
    curSun = 0;
  }else{
    curMon = 1;
    curTue = 1;
    curWed = 1;
    curThu = 1;
    curFri = 1;
    curSat = 1;
    curSun = 1;
  }
  this.showDayButtons();
};

this.nextDay = function(me, eventInfo)
{
  prevLayer.push(DayLayer);
  this.showModeLayer();
};

this.nextLoc = function(me, eventInfo)
{
  prevLayer.push(LocationLayer);
  curLocation = wgt.getWidget(wgt.id+".LocationLayer.controlList").getProperty("selection");
  this.showTimeLayer();
};

this.nextDate = function(me, eventInfo)
{
  var d = new Date(wgt.getWidget(wgt.id+".DateLayer.dateTime1").getProperty("value")*1000);
  if(curType == 2)
  d = new Date(wgt.getWidget(wgt.id+".DateLayer.dateTime2").getProperty("value")*1000);
  curY = d.getFullYear().toString();
  curM = d.getMonth().toString();
  curD = d.getDate().toString();
  if(curType == 2){
  	curS = d.getSeconds().toString();;
    curm = d.getMinutes().toString();;
    curH = d.getHours().toString();;
	}
  if(curType != 8){
    curY = "*";
    if(curType != 7){
      curM = "*";
      if(curType != 6){
      	curD = "*";
    	}
    }
  }
	if(curType == 2){
		prevLayer.push(DateLayer);
    this.showConditionLayer();
	}else{
	  prevLayer.push(DateLayer);
	  this.showModeLayer();
	}
};

this.nextTime = function(me, eventInfo)
{
  var d = new Date(wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").getProperty("timeSelected")*1000);
  curH = d.getHours().toString();
  curm = d.getMinutes().toString();
  curS = 0;
  prevLayer.push(TimeLayer);
  this.showConditionLayer();
};

this.nextFreq = function(me, eventInfo)
{
  var value = wgt.getWidget(wgt.id+".FrequencyLayer.field1").getProperty("value",value);
  curms = value; 
  this.save();
};

this.nextCondition = function(me, eventInfo)
{
  var value = wgt.getWidget(wgt.id+".ConditionLayer.controlList").getProperty("value",value);
  curCondition = value;
  this.save();
};

this.save = function()
{
	if( curType == 3 )
		curMode = 1;
  mgr.setProperty(sel+".TypeIndex",curType);
  mgr.setProperty(sel+".ModeIndex",curMode);
  mgr.setProperty(sel+".Monday",curMon);
  mgr.setProperty(sel+".Tuesday",curTue);
  mgr.setProperty(sel+".Wednesday",curWed);
  mgr.setProperty(sel+".Thursday",curThu);
  mgr.setProperty(sel+".Friday",curFri);
  mgr.setProperty(sel+".Saturday",curSat);
  mgr.setProperty(sel+".Sunday",curSun);
  mgr.setProperty(sel+".Year",curY);
  mgr.setProperty(sel+".Month",curM);
  mgr.setProperty(sel+".Day",curD);
  mgr.setProperty(sel+".Hour",curH);
  mgr.setProperty(sel+".Minute",curm);
  mgr.setProperty(sel+".Second",curS);
  mgr.setProperty(sel+".MilliSec",curms);
  var strLocations = mgr.getProperty("locations");
  var arrLocations = strLocations.split(";");
  mgr.setProperty(sel+".Location",arrLocations[curLocation]);
  mgr.setProperty(sel+".Condition",curCondition);
  mgr.setProperty(sel+".Save",1);
  prevType = 0;
  prevLayer = [TypeLayer];
  page.accept();
};

this.moveLayersInStartPos();