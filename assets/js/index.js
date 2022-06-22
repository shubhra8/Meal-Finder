var choice1=document.getElementById("btnBreakfast");
var choice2=document.getElementById("btnLunch");
var choice3=document.getElementById("btnDinner");
var choicetext1=document.getElementById("btnBreakfast").innerHTML;
var choicetext2=document.getElementById("btnLunch").innerHTML;
var choicetext3=document.getElementById("btnDinner").innerHTML;
var foodname=document.getElementById("FoodName");
var foodentry=document.getElementById("foodEnter");
var prefer=document.getElementById("prefer");
var cusinetype=document.getElementById("Cusinetype");
var health=document.getElementById("health");


foodentry.addEventListener("click", function(){
    var foodchoice=document.getElementById("FoodName").value;
    console.log(foodchoice);
    localStorage.setItem("FoodNutrition", foodchoice)
    location.href="knowyourfood.html"
});

choice1.addEventListener("click", function(){
    localStorage.setItem("choice", choicetext1)
    prefer.style.display="block";
    cusinetype.style.display="block";
    health.style.display="block";
    //location.href="display.html"
  
});
choice2.addEventListener("click", function(){
    localStorage.setItem("choice", choicetext2)
     prefer.style.display="block";
    cusinetype.style.display="block";
    health.style.display="block";
    //location.href="display.html"
  
});
choice3.addEventListener("click", function(){
    localStorage.setItem("choice", choicetext3)
     prefer.style.display="block";
    cusinetype.style.display="block";
    health.style.display="block";
    //location.href="display.html"
  
});

Submitall.addEventListener("click", function(){
    var onebutton=document.getElementById("mySelect").value;
    var twobutton=document.getElementById("mySelect2").value;
    localStorage.setItem("Healthpreference", onebutton);
    localStorage.setItem("CusineType", twobutton);
    console.log(onebutton);
    location.href="display.html"
  
});