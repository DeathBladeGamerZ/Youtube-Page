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