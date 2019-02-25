'use strict';

//Global Vars
//  # of votes located in product_votes
var product_votes=25;
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

function chart_image(){
  var product_click_data = [];
  for(var j = 0; j < product_catalogue.length; j++){
    product_click_data.push(product_catalogue[j].clicked_on_count);
  }

  var product_click_labels = [];
  for(var k = 0; k < product_catalogue.length; k++){
    product_click_labels.push(product_catalogue[k].name);
  }
  var ctx = document.getElementById('results').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: product_click_labels,
      datasets: [{
        label: 'Results',
        data: product_click_data,
        backgroundColor: [
          'grey',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      animation: {
        easing: 'easeInCirc',
        duration: 1000
      }
    }
  });
}

function handle_submit_event(submit) {
  submit.preventDefault();
  if(product_votes <=0){
    alert('You have used all of your available votes. Thanks for you cooperation.');
    var myElement = document.getElementById('outcomes');
    for(var i=0; i<product_catalogue.length; i++){
      var li_el=document.createElement('li');
      li_el.textContent = (product_catalogue[i].name +': '+ product_catalogue[i].clicked_on_count + '/' + product_catalogue[i].appeared +' = '+ product_catalogue[i].clicked_on_count / product_catalogue[i].appeared);
      myElement.appendChild(li_el);
    }
    var stringy_products = JSON.stringify(product_catalogue); //saving product data
    localStorage.setItem('all_products', stringy_products);
    console.log('products data saved to local storage');

    chart_image();
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
  random_image();
}

document.getElementById('all_products').addEventListener('submit', handle_submit_event);

function random_image(){
  var random1 = Math.floor(Math.random() * product_catalogue.length);
  var random2 = Math.floor(Math.random() * product_catalogue.length);
  var random3 = Math.floor(Math.random() * product_catalogue.length);

  left_display_img.src = product_catalogue[random1].url;
  center_display_img.src = product_catalogue[random2].url;
  right_display_img.src = product_catalogue[random3].url;

  currently_displayed_left = product_catalogue[random1];
  currently_displayed_center = product_catalogue[random2];
  currently_displayed_right = product_catalogue[random3];
}

if(localStorage.getItem('all_products')){
  var stringy_products = localStorage.getItem('all_products'); //take the products out of local Storage, they are still stringified json
  product_catalogue = JSON.parse(stringy_products); // convert the stringified array back to a readable array
  console.log(product_catalogue);
  console.log(`retrieved ${product_catalogue.length} products from local storage`);
} else {// if not, create new products for the first time
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
  console.log('created brand new products');
}
random_image();



