$(function () {
    let result = getProducts();
    
    let title="", text=""
        for(let i = 0; i < result.length; i++){
            id = result[i].id;
            title = result[i].make;
            text = result[i].model;
            $("#product").append(product(id,title,text))
            console.log(result[i].make);
    }
   })
   var cart = []
   function addToCart(id, amount) {
       console.log("Adding " + id + " " + amount);
       cart.push({id: id, amount: amount})
       console.log(cart);
       
       if(productInCart()){

       }else{
           console.log(cart);
           
       }
   }

   function productInCart() {
       return false;
   }

function product(id, title, text, image="https://dummyimage.com/286x180/000/fff") {
    let product = `[<div data="${id}" style="float:left; class="card" style="width: 18rem;">
    <img class="card-img-top" src="${image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${text}</p>
      <a onclick="addToCart(${id},1)" class="btn btn-primary">Lägg i varukorgen</a>
    </div>
  </div>] `
return product;
}
function getProducts(){
    let result = [{id: 1,make: "Audi", model: "A4"},{   id: 2, make: "Volvo", model: "car"}]
    return result;
}


     