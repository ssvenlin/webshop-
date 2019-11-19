result = getProducts();

let title="", text=""
    for(var i = 0; i < result.length; i++){
        title = result[i].make;
        text = result[i].model;
        $("#product").append(product(title,text))
        console.log(result[i].make);
        
}

function getProducts(){
    let result = [{make: "Audi", model: "car"}]
}

let product = `[<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://dummyimage.com/286x180/000/fff" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>] `

      $(function() {
       $("#product").append (product);
       $("#product").append (product);
       $("#product").append (product);

      })