var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");

function gradient()
{
    document.body.style.background="linear-gradient(to right,"+color1.value+ ","+ color2.value+")";
    css.textContent=document.body.style.background + ";";
}
color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);

