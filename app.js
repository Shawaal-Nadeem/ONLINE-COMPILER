
    let html= document.getElementById("html");
    let css=document.getElementById("css");
    let js=document.getElementById("js");
    let result=document.getElementById("code").contentWindow.document;
  compile=()=>{
    result.open();
    result.writeln(
        html.value 
        + "<style>" + 
        css.value +"</style>" 
        + "<script>" +
        js.value +"</script>"
    );
}