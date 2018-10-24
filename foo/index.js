function int() {
    console.log("Hello World");
}

function buttonHandler() {
    //alert("hagyma");
    document.getElementById("content").innerHTML="asdasd";
    document.getElementbyId("menuBar").style.backgroundColor ="red";

    var content= document.getElementById("content");
    var btn= document.createElement("input");
    btn.type="button";
    btn.value="Hllo World";
    btn.onclick = init;
    content.appendChild(btn);
}