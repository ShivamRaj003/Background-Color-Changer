const btn=document.querySelectorAll(".button")
const bdy=document.querySelector("body")
let dwnhd=document.querySelector("#down-head")
let head=document.querySelector(".header")
btn.forEach(function(button)
{
    button.addEventListener("click",function(el)
    {
        console.log(el)
        console.log(el.target)
        if(el.target.id==="grey")
        {
         bdy.style.backgroundColor=el.target.id
         bdy.style.color="white"
         head.style.color="White"
         dwnhd.style.color="White"
        }
        if(el.target.id==="red")
        {
         bdy.style.backgroundColor=el.target.id
         bdy.style.color="black"
          head.style.color="black"
          dwnhd.style.color="black"
        }
        if(el.target.id==="blue")
        {
         bdy.style.backgroundColor=el.target.id
         bdy.style.color="white"
          head.style.color="White"
          dwnhd.style.color="White"
        }
        if(el.target.id==="black")
        {
         bdy.style.backgroundColor=el.target.id
         bdy.style.color="white"
         dwnhd.style.color="White"
          head.style.color="White"
        }
        if(el.target.id==="yellow")
        {
         bdy.style.backgroundColor=el.target.id
         bdy.style.color="black"
          head.style.color="black"
             dwnhd.style.color="black"
        }
       
    })
})