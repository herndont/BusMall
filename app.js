'use strict'

//Global Vars
//  All of the object products located in all_products
var product_votes=25;
//  objects or products currently displayed on the page
var starting_displayed_left;
var starting_displayed_center;
var starting_displayed_right;


var left_display_img = document.getElementById('left_product');
var left_display_input = document.getElementById('left_input');
var center_display_img = document.getElementById('center_product');
var center_display_input = document.getElementById('center_input');
var right_display_img = document.getElementById('right_product');
var right_display_input = document.getElementById('right_input');

//  Array of all products
var product_catalogue=[];


//Product constructor function
var Product = function(name, url){
  this.name=name;
  this.url=url;
  this.clicked_on_count=0;

  product_catalogue.push(this);
};
//Creating the products into objects
new Product ('bag', './img/bag.jpg');
new Product ('banana', './img/banana.jpg');
new Product ('bathroom', './img/boots.jpg');
new Product ('breakfast', './img/breakfast.jpg');
new Product ('boots', './img/boots.jpg');
new Product ('bubblegum', './img/bubblegum.jpg');
new Product ('chair', './img/chair.jpg');
new Product ('cthulhu', './img/cthulhu.jpg');
new Product ('dog-duck', './img/dog-duck.jpg');
new Product ('dragon', './img/dragon.jpg');
new Product ('pen', './img/pen.jpg');
new Product ('pet-sweep', './img/pet-sweep.jpg');
new Product ('scissors', './img/scissors.jpg');
new Product ('shark', './img/shark.jpg');
new Product ('sweep', './img/sweep.png');
new Product ('tauntaun', './img/tauntaun.jpg');
new Product ('unicorn', './img/unicorn.jpg');
new Product ('usb', './img/usb.gif');
new Product ('water-can', './img/water-can.jpg');
new Product ('wine-glass', './img/wine-glass.jpg');


var render_product = function(product, target_img){
  target_img.src = product.url;
};

document.getElementById('button').addEventListener('click', submit);

function submit() {
  if(document.getElementById('left_input').checked){

    } 

    }
  
    //user presses radio button for specified picture
    //user then hits submit
    //picture is ++ and then 3 new pictures come up
    //plus 1 is logged for that picture

