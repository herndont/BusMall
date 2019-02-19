'use strict'

//Global Vars
//  All of the object products located in all_products
var all_products=20;
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


