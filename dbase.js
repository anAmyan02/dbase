
function Product(id, name, price, pix, has, count, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.pix = pix;
    this.has = has;
    this.count = count;
    this.type = type;
  }
  
  let storage = {};
  
  storage["0001"] = new Product(
    "0001",
    "Banana",
    "200",
    "https://cdn2.iconfinder.com/data/icons/indeepop_iconspack_/256/yammi_banana.png",
    true,
    20,
  );
  
  storage["0002"] = new Product(
    "0002",
    "Watermelon",
    "300",
    "https://cdn2.iconfinder.com/data/icons/summer-359/512/09_Watermelon-512.png",
    true,
    20,
  );
  
  storage["0003"] = new Product(
    "0003",
    "Cherry",
    "400",
    "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Cherry-256.png",
    true,
    20,
  );
  
  storage["0004"] = new Product(
    "0004",
    "Lemon",
    "250",
    "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Lemon-512.png",
    false,
    20,
  );
  
  storage["0005"] = new Product(
    "0005",
    "CocaCola",
    "250",
    "https://cdn4.iconfinder.com/data/icons/summer-holiday-41/128/summer_vacation_holiday_Beverage_Coke_Cola_Food_Pepsi_Soda-256.png",
    true,
    20,
    {
      natural: 5,
      withoutSugar: 3,
      forDiabetics: 12,
    }
  );
  


let input = document.createElement("input");
input.setAttribute("type", "text");
document.body.appendChild(input);

let button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("value", "send");
document.body.appendChild(button);

let containerDiv = document.createElement("div");
containerDiv.classList.add('container')
document.body.appendChild(containerDiv);

let modalDiv = document.createElement("div");
modalDiv.classList.add("modal");
modalDiv.style.display = "none";
document.body.appendChild(modalDiv);

function showModal(message) {
  modalDiv.textContent = message;
  modalDiv.style.display = "block";
  setTimeout(function () {
    modalDiv.style.display = "none";
  }, 2000)
}



button.addEventListener("click", function () {
    for (let i in storage) {
      if (input.value == i || input.value == storage[i].name) {
        console.log('ok');
        let firstDiv = document.createElement("div");
        firstDiv.classList.add("firstDiv");
        containerDiv.appendChild(firstDiv);

  
        let imgDiv = document.createElement("div");
        let textDiv = document.createElement("div");
        imgDiv.classList.add("imgDiv");
        textDiv.classList.add("textDiv");
  
        if (storage[i].has == true || (storage[i].has == true && storage[i].type)) {
          let img = document.createElement("img");
          img.classList.add("img");
          let name = document.createElement("p");
          let price = document.createElement("p");
          let has = document.createElement("p");
          let types = document.createElement("p");
  
          img.src = storage[i].pix;
          name.textContent = storage[i].name;
          price.textContent = "price is " + storage[i].price + "$";
          has.textContent = "we have this product " + storage[i].count;
          types.textContent = "Types"
          types.addEventListener('click', function(){
            let typeObj = storage[i].type;
            let typeText = "<ul>";
            for (let key in typeObj) {
              typeText += "<li>" + key + ": " + typeObj[key] + "</li>";
            }
            typeText += "</ul>";
            types.innerHTML = 'Types are: ' + typeText;
            firstDiv.appendChild(types);
          })

          imgDiv.appendChild(img);
          textDiv.appendChild(name);
          textDiv.appendChild(price);
          textDiv.appendChild(has);
  
          firstDiv.appendChild(imgDiv);
          firstDiv.appendChild(textDiv);
          firstDiv.appendChild(types);
        } else {
          let has = document.createElement("p");
        if(has.textContent.trim()==''){
            firstDiv.remove()
          showModal("We haven't this product");
        }
      }
      }
    }
  });
  


