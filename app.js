'use strict'

//Global Vars
//  # of votes located in product_votes
var product_votes=10;
//  objects or products currently displayed on the page
var currently_displayed_left;
var currently_displayed_center;
var currently_displayed_right;

// var product_container = document.getElementById('all_products');


var left_display_img = document.getElementById('left_product');
var center_display_img = document.getElementById('center_product');
var right_display_img = document.getElementById('right_product');

//  Array of all products
var product_catalogue=[];


//Product constructor function
var Product = function(name, url){
  this.name=name;
  this.url=url;
  this.clicked_on_count=0;
  this.appeared= 0;

  product_catalogue.push(this);
};

//Creating the products into objects
new Product ('bag', './img/bag.jpg');
new Product ('banana', './img/banana.jpg');
new Product ('bathroom', './img/bathroom.jpg');
new Product ('boots', './img/boots.jpg');
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


// var render_product = function(product, target_img, target_input){
//   target_img.src = product.url;
// };

//commented out above to try the prototype function below.
Product.prototype.render_as_img = function(target_img){
  target_img.src = this.url;
};

function handle_submit_event(submit) {
  submit.preventDefault();
  if(product_votes <=0){
    alert('You have used all of your available votes. Thanks for you cooperation.');
    var myElement = document.getElementById('outcomes');
    for(var i=0; i<=product_catalogue.length; i++){
      var li_el=document.createElement('li');
      li_el.textContent = (product_catalogue[i].name +': '+ product_catalogue[i].clicked_on_count + '/' + product_catalogue[i].appeared +' = '+ product_catalogue[i].clicked_on_count / product_catalogue[i].appeared);
      myElement.appendChild(li_el);
    }
    return;
  }
  if(submit.target.choice.value === ''){
    alert('Please select a product.');
    return;
  }
  product_votes --;

  currently_displayed_left.appeared++;
  currently_displayed_center.appeared++;
  currently_displayed_right.appeared++;


  if(submit.target.choice.value ==='Option #1'){
    currently_displayed_left.clicked_on_count++;
  }
  if(submit.target.choice.value ==='Option #2'){
    currently_displayed_center.clicked_on_count++;
  }
  if(submit.target.choice.value ==='Option #3'){
    currently_displayed_right.clicked_on_count++;
  }
  console.log(product_votes);
  random_image();

}

document.getElementById('all_products').addEventListener('submit', handle_submit_event);

function random_image(){
  var random1 = Math.floor(Math.random() * product_catalogue.length);
  var random2 = Math.floor(Math.random() * product_catalogue.length);
  var random3 = Math.floor(Math.random() * product_catalogue.length);

  product_catalogue[random1].render_as_img(left_display_img);
  product_catalogue[random2].render_as_img(center_display_img);
  product_catalogue[random3].render_as_img(right_display_img);

  currently_displayed_left = product_catalogue[random1];
  currently_displayed_center = product_catalogue[random2];
  currently_displayed_right = product_catalogue[random3];
}
random_image();

//creation of totals

