//-------- efectos --------//

function gira(x)
{
    x.style.transform="rotateY(360deg)";
    x.style.transition="all 1s";
}

function retorne(e)
{
    x.style.transform="rotateY(0deg)";
    x.style.transition="all 1s";
}

for(var i=0; i<document.getElementsByClassName("imgfooter").length;i++)
{
    document.getElementsByClassName("imgfooter")[i].setAttribute("onmouseover","gira(this)");
    document.getElementsByClassName("imgfooter")[i].setAttribute("onmouseout","retorne(this)");
}



// --- Título ---
const typeWriter = document.getElementById("maquina-text");
const text = "Neo Genesis Evangelion";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);