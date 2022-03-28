function showMsg(from,text){
    console.log(from+": "+text);
}
showMsg("Shivansh","Learn javascript");
showMsg("Shivansh","Learn properly");

function showMessage(from,text){
    from = "*"+from+"*";
    console.log(from+": "+text);
}
showMessage("Shivansh","Learn javascript");
showMessage("Shivansh","Learn properly");
showMessage();  //shows undefined
showMessage("Shivansh");

function showMssg(from,text="no text"){
    console.log(from+": "+text);
}
showMssg("Shivansh");

//if one parameter is missing then show custom msg
function showMissing(from,text){
    // if(text == undefined){
    //     text = "Empty";
    // }
    text = text || "Empty";
    console.log(from+': '+text);
}
showMissing("Shivansh")

//nullish operator
function showCount(count){
    console.log(count ?? "Unknow");
}
showCount(10);
showCount(null);
showCount();