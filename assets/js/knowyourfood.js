let energyk =document.getElementById("energyk");
let Protein =document.getElementById("Protein");
let fat =document.getElementById("fat");
let carboh =document.getElementById("carboh");
let fibre =document.getElementById("fibre");
let query=localStorage.getItem("FoodNutrition")
let dish =document.getElementById("Dish");

let apicall4="https://api.edamam.com/api/food-database/v2/parser?app_id=000f533f&app_key=7e569ec4bd9d9f6d28e7b7be8db4c4ca&ingr="+query;
fetch(apicall4)
.then(function(response) {
         return response.json();
        })
      .then(function (data) {
            console.log(data);
       dish.innerHTML="Your Chosen-"+data.hints[0].food.label;
       energyk.innerHTML="Energy-"+data.hints[0].food.nutrients.ENERC_KCAL;
       Protein.innerHTML="Protein-"+data.hints[0].food.nutrients.PROCNT;
       fat.innerHTML="fat-"+data.hints[0].food.nutrients.FAT;
       carboh.innerHTML="Carbohydrate-"+data.hints[0].food.nutrients.CHOCDF;
       fibre.innerHTML="Fibre-"+data.hints[0].food.nutrients.FIBTG;


      })