let t = document.getElementById("topbtn");
function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        t.style.display= "block";
    }
    else
    {
        t.style.display= "none";
    }
}
function topfunction() {
    document.documentElement.scrollTop = 0;
}
function load() 
{
   window.open("https://www.youtube.com/@deathbladegamerz51907");
    
}
window.onscroll= function(){scrollFunction()};
function lightmode()
{
    document.body.classList.remove("Yellow","Blue","DarkMode","GameMode");
    document.body.classList.add("LightMode");
    document.getElementById("mode").innerHTML="Light Mode";
}
function Yellow()
{
    document.body.classList.remove("LightMode","Blue","DarkMode","GameMode");
    document.body.classList.add("Yellow");
    document.getElementById("mode").innerHTML="Yellow Mode";
}
function Blue()
{
    document.body.classList.remove("Yellow","LightMode","DarkMode","GameMode");
    document.body.classList.add("Blue");
    document.getElementById("mode").innerHTML="Blue Mode";
}
function DarkMode()
{
    document.body.classList.remove("Yellow","Blue","LightMode","GameMode");
    document.body.classList.add("DarkMode");
    document.getElementById("mode").innerHTML="Dark Mode";
}
function GameMode()
{
    document.body.classList.remove("Yellow","Blue","DarkMode","LightMode");
    document.body.classList.add("GameMode");
    document.getElementById("mode").innerHTML="Game Mode";
}
