var Nightmare = require('nightmare');
var nightmare = Nightmare({  show: true }); // this opens a browser. Normally we don't want that to happen, as it slows things down

nightmare
  .goto('https://www.numbeo.com/cost-of-living/in/Barcelona')
  .click('#displayCurrency')
  .wait(1000)
  .select("#displayCurrency", "USD")
  .wait(1000)
  .evaluate(function (){
    var foodCost = document.querySelectorAll(".highlighted_th.prices")
    var result = [];
    for(var i=0; foodCost.length>i; i++){
      result.push(foodCost[i].innerHTML)
    }
    return result
  })


  // .evaluate(function () {
  //   var nameNodes = document.querySelectorAll('h3.thin.field-content')
  //   var list = [].slice.call(nameNodes); // Why did I have to do this?
  //   return list.map(function(node){
  //     return node.innerText
  //   });
  // })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
