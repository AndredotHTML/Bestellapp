let restaurants = [
    {
      "name": "Pizzeria de Gracia",
      "rating": 4,
      "logo": "Pizzeria_logo.jpg",
      "restaurentLogo":"Pizzeria.jpg",
      "mainpic": "Pizza.jpg",
      "sidepic": "Bruschetta.jpg",
      "dessertpic": "tiramisu.jpg",
      "products": {
        "main_courses": [
          {
            "name": "Margherita Pizza",
            "price": 8.50,
            "ingredients": ["Tomatensauce", " Mozzarella", " Basilikum"],
            "ammount": 1,
          },
          {
            "name": "Pepperoni Pizza",
            "price": 9.50,
            "ingredients": ["Tomatensauce", " Mozzarella", " Salami"],
            "ammount": 1,
          },
          {
            "name": "Quattro Formaggi Pizza",
            "price": 10.00,
            "ingredients": ["Tomatensauce", " Mozzarella", " Gorgonzola", " Parmesan", " Büffelmozzarella"],
            "ammount": 1,
          },
          {
            "name": "Vegetarische Pizza",
            "price": 9.00,
            "ingredients": ["Tomatensauce", " Mozzarella", " Paprika", " Zwiebeln", " Oliven", " Champignons"],
            "ammount": 1,
          }
        ],
        "sides": [
          {
            "name": "Bruschetta",
            "price": 5.00,
            "ingredients": "Geröstetes Brot mit Tomaten, Knoblauch und Basilikum",
            "ammount": 1,
          },
          {
            "name": "Caprese-Salat",
            "price": 6.50,
            "ingredients": "Tomaten, Mozzarella, frisches Basilikum und Balsamico",
            "ammount": 1,
          },
          {
            "name": "Frittierte Zucchini",
            "price": 5.50,
            "ingredients": "Frittierte Zucchinischeiben mit Knoblauchdip",
            "ammount": 1,
          },
          {
            "name": "Olivenplatte",
            "price": 4.50,
            "ingredients": "Verschiedene italienische Oliven",
            "ammount": 1,
          }
        ],
        "desserts": [
          {
            "name": "Tiramisu",
            "price": 4.50,
            "ingredients": "Kaffeetrüffel mit Mascarpone und Kakao",
            "ammount": 1,
          },
          {
            "name": "Panna Cotta",
            "price": 4.00,
            "ingredients": "Sahnige Nachspeise mit Fruchtsoße",
            "ammount": 1,
          }
        ]
      }
    },
    {
      "name": "Toms Burgers",
      "rating": 4.5,
      "logo": "Burger_logo.jpg",
      "restaurentLogo":"toms_Burger.png",
      "mainpic": "hamburger.jpg",
      "sidepic": "Pommes.jpg",
      "dessertpic": "Brownie.jpg",
      "products": {
        "main_courses": [
          {
            "name": "Classic Cheeseburger",
            "price": 9.00,
            "ingredients": ["Rinderpatty", " Cheddar", " Salat", " Tomate", " Zwiebel", " Burgerbrötchen"],
            "ammount": 1,
          },
          {
            "name": "Bacon BBQ Burger",
            "price": 10.50,
            "ingredients": ["Rinderpatty", " Bacon", " BBQ-Sauce", " Cheddar", " Salat", " Burgerbrötchen"],
            "ammount": 1,
          },
          {
            "name": "Veggie Burger",
            "price": 8.50,
            "ingredients": ["Gemüsepatty", " Avocado", " Salat", " Tomate", " Burgerbrötchen"],
            "ammount": 1,
          },
          {
            "name": "Spicy Jalapeño Burger",
            "price": 11.00,
            "ingredients": ["Rinderpatty", " Jalapeños", " Pepperjack-Käse", " Salat", " Burgerbrötchen"],
            "ammount": 1,
          }
        ],
        "sides": [
          {
            "name": "Pommes Frites",
            "price": 3.50,
            "ingredients": "Klassische knusprige Pommes frites",
            "ammount": 1,
          },
          {
            "name": "Onion Rings",
            "price": 4.00,
            "ingredients": "Frittierte Zwiebelringe mit Dip",
            "ammount": 1,
          },
          {
            "name": "Coleslaw",
            "price": 3.00,
            "ingredients": "Frischer Krautsalat mit Dressing",
            "ammount": 1,
          },
          {
            "name": "Chili Cheese Fries",
            "price": 5.50,
            "ingredients": "Pommes mit Chili und geschmolzenem Käse",
            "ammount": 1,
          }
        ],
        "desserts": [
          {
            "name": "Milkshake",
            "price": 4.50,
            "ingredients": "Cremiger Milkshake in verschiedenen Geschmacksrichtungen",
            "ammount": 1,
          },
          {
            "name": "Brownie",
            "price": 3.00,
            "ingredients": "Saftiger Schokoladenbrownie mit Nüssen",
            "ammount": 1,
          }
        ]
      }
    }
  ];


let basket = []
  

  function init() {
    renderRestaurantTemplate()
  }

  
  function renderRestaurantTemplate() {
    let contentRef = document.getElementById("restaurants_content");
    contentRef.innerHTML = " ";
  
    for (let restaurantIndex = 0; restaurantIndex < restaurants.length; restaurantIndex++) {
          
        contentRef.innerHTML += getRestaurantTemplate(restaurantIndex);
          
    };
  }


  function renderMainsTemplate(restaurantIndex) {
    let mainsHTML = " ";
  
    for (let mainsIndex = 0; mainsIndex < restaurants[restaurantIndex].products.main_courses.length; mainsIndex++) {
          
        mainsHTML += getMainsTemplate(restaurantIndex, mainsIndex);
          
    };
    
    return mainsHTML

  }


  function renderSidesTemplate(restaurantIndex) {
    let sidesHTML = " ";
  
    for (let sidesIndex = 0; sidesIndex < restaurants[restaurantIndex].products.sides.length; sidesIndex++) {
          
        sidesHTML += getSidesTemplate(restaurantIndex, sidesIndex);
          
    };

    return sidesHTML

  }


  function renderDessertsTemplate(restaurantIndex) {
    let dessertsHTML = " ";
  
    for (let dessertsIndex = 0; dessertsIndex < restaurants[restaurantIndex].products.desserts.length; dessertsIndex++) {
          
        dessertsHTML += getDessertTemplate(restaurantIndex, dessertsIndex);
          
    };

    return dessertsHTML

  }
  
  
  function toggleBasketDnone() {
    if (basket.length > 0) {
    document.getElementById("basket").classList.toggle("d_none")
    document.getElementById("openbasket").classList.toggle("basket_margin")
    }
    
  }


  function addToBasket(restaurantIndex, courseIndex, course) {
    if (basket.includes(restaurants[restaurantIndex].products[course][courseIndex])) {
      return
    } else {
    basket.push(restaurants[restaurantIndex].products[course][courseIndex])
    renderBasket() }
  }


  function renderBasket() {
    let contentRef = document.getElementById("basket");
    contentRef.innerHTML = " ";
  
          
        contentRef.innerHTML += getBasketTemplate();
  }


  function renderBasketContent() {
    let contentHTML = " ";

    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
      contentHTML += getBasketContentTemplate(basketIndex);
      
    };

    return contentHTML
  }


  function renderBasketSum() {
    let sum = 0
    let sumHTML = ""
    
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
      sum += basket[basketIndex].price * basket[basketIndex].ammount;
    }
    sum += 3
    sumHTML += sum.toFixed(2) 
    return sumHTML
  }


  function removeFromBasket(basketIndex) {
    basket[basketIndex].ammount = 1
    basket.splice(basketIndex,1)
    renderBasket()
    if (basket.length == 0) {
      document.getElementById("basket").classList.toggle("d_none")
      document.getElementById("openbasket").classList.toggle("basket_margin")
    }
  }


  function addValue(basketIndex) {
    basket[basketIndex].ammount += 1
    renderBasket()
  }


  function subtracktValue(basketIndex) {
    basket[basketIndex].ammount += -1
    if (basket[basketIndex].ammount > 0) {
      renderBasket()
    } else {
      removeFromBasket(basketIndex)
    }
  }


  function placeOrder() {
    basket.splice(0,basket.length)
    renderBasket()
    document.getElementById("basket").classList.toggle("d_none")
    document.getElementById("openbasket").classList.toggle("basket_margin")
    toggleOverlay()
  }


  function toggleOverlay(){
    let refOverlay = document.getElementById('overlay');

    refOverlay.classList.toggle('d_none')
}

