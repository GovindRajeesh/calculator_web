var frame=document.getElementById("frame")
function display(num){
    document.getElementById("frame").value=frame.value+num;
}
function clearit(){
    document.getElementById("frame").value="";
}
function ans(){
    var problem=document.getElementById("frame").value.replace("X","*")
    document.getElementById("frame").value=eval(problem);
}