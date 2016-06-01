/*
Create these constructor functions: 
questions, ingredients, pantry

use these constructors to create objects 
representing the bartender's questions, 
ingredients and pantry.

-Create a Bartender object.

-Create a constructor for a bartender object,
-Give the bartender a createDrink method

-Add in logic to your Bartender object 
so that when the user submits their
preferences, the drink is created and
displayed in a UI.


Example questions:
Do ye like yer drinks strong?
Do ye like it with a salty tang?
Are ye a lubber who likes it bitter?
Would ye like a bit of sweetness with yer poison?
Are ye one for a fruity finish?

Example ingredients:
Strong ingredients: Glug of rum, slug of whisky, splash of gin
Salty ingredients: Olive on a stick, salt-dusted rim, rasher of bacon
Bitter ingredients: Shake of bitters, splash of tonic, twist of lemon peel
Sweet ingredients: Sugar cube, spoonful of honey, splash of cola
Fruity ingredients: Slice of orange, dash of cassis, cherry on top

*/

function Bartender(questions){
    this.questions = questions;
};

Bartender.prototype.makeDrink = function(){
    this.askQuestions(questions);
};

Bartender.prototype.askQuestions = function(){
    for(var i in questions){
     $("#bar").append("<p>" + questions[i] + "</p>" 
     + "<button>Yes</button>" + "<button>No</button>");
      console.log(questions[i]);
      console.log("Yes or no?");
    };
};

var Pantry = function(ingredients){
    this.ingredients = ingredients;
};

var Questions = function(){
    
};

var Ingredients = function(){
    
};

var preferences = {};



var questions = {
    strong: "Would you like a strong drink?",
    salty: "Would you like a salty drink?",
    bitter: "Do you like your drinks bitter?",
    sweet: "Would you prefer a sweet drink?",
    fruity: "Would you like a fruity drink?"
};

var moe = new Bartender(questions);

moe.makeDrink();