let restaurants = [
    {
      "name": "Pizzeria de Gracia",
      "rating": 4,
      "logo": "Pizzeria_logo.jpg",
      "mainpic": "Pizza.jpg",
      "sidepic": "Bruschetta.jpg",
      "dessertpic": "tiramisu.jpg",
      "products": {
        "main_courses": [
          {
            "name": "Margherita Pizza",
            "price": 8.50,
            "ingredients": ["Tomatensauce", " Mozzarella", " Basilikum"]
          },
          {
            "name": "Pepperoni Pizza",
            "price": 9.50,
            "ingredients": ["Tomatensauce", " Mozzarella", " Salami"]
          },
          {
            "name": "Quattro Formaggi Pizza",
            "price": 10.00,
            "ingredients": ["Tomatensauce", " Mozzarella", " Gorgonzola", " Parmesan", " Büffelmozzarella"]
          },
          {
            "name": "Vegetarische Pizza",
            "price": 9.00,
            "ingredients": ["Tomatensauce", " Mozzarella", " Paprika", " Zwiebeln", " Oliven", " Champignons"]
          }
        ],
        "sides": [
          {
            "name": "Bruschetta",
            "price": 5.00,
            "ingredients": "Geröstetes Brot mit Tomaten, Knoblauch und Basilikum"
          },
          {
            "name": "Caprese-Salat",
            "price": 6.50,
            "ingredients": "Tomaten, Mozzarella, frisches Basilikum und Balsamico"
          },
          {
            "name": "Frittierte Zucchini",
            "price": 5.50,
            "ingredients": "Frittierte Zucchinischeiben mit Knoblauchdip"
          },
          {
            "name": "Olivenplatte",
            "price": 4.50,
            "ingredients": "Verschiedene italienische Oliven"
          }
        ],
        "desserts": [
          {
            "name": "Tiramisu",
            "price": 4.50,
            "ingredients": "Kaffeetrüffel mit Mascarpone und Kakao"
          },
          {
            "name": "Panna Cotta",
            "price": 4.00,
            "ingredients": "Sahnige Nachspeise mit Fruchtsoße"
          }
        ]
      }
    },
    {
      "name": "Toms Burgers",
      "rating": 4.5,
      "logo": "Burger_logo.jpg",
      "mainpic": "hamburger.jpg",
      "sidepic": "Pommes.jpg",
      "dessertpic": "Brownie.jpg",
      "products": {
        "main_courses": [
          {
            "name": "Classic Cheeseburger",
            "price": 9.00,
            "ingredients": ["Rinderpatty", " Cheddar", " Salat", " Tomate", " Zwiebel", " Burgerbrötchen"]
          },
          {
            "name": "Bacon BBQ Burger",
            "price": 10.50,
            "ingredients": ["Rinderpatty", " Bacon", " BBQ-Sauce", " Cheddar", " Salat", " Burgerbrötchen"]
          },
          {
            "name": "Veggie Burger",
            "price": 8.50,
            "ingredients": ["Gemüsepatty", " Avocado", " Salat", " Tomate", " Burgerbrötchen"]
          },
          {
            "name": "Spicy Jalapeño Burger",
            "price": 11.00,
            "ingredients": ["Rinderpatty", " Jalapeños", " Pepperjack-Käse", " Salat", " Burgerbrötchen"]
          }
        ],
        "sides": [
          {
            "name": "Pommes Frites",
            "price": 3.50,
            "ingredients": "Klassische knusprige Pommes frites"
          },
          {
            "name": "Onion Rings",
            "price": 4.00,
            "ingredients": "Frittierte Zwiebelringe mit Dip"
          },
          {
            "name": "Coleslaw",
            "price": 3.00,
            "ingredients": "Frischer Krautsalat mit Dressing"
          },
          {
            "name": "Chili Cheese Fries",
            "price": 5.50,
            "ingredients": "Pommes mit Chili und geschmolzenem Käse"
          }
        ],
        "desserts": [
          {
            "name": "Milkshake",
            "price": 4.50,
            "ingredients": "Cremiger Milkshake in verschiedenen Geschmacksrichtungen"
          },
          {
            "name": "Brownie",
            "price": 3.00,
            "ingredients": "Saftiger Schokoladenbrownie mit Nüssen"
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
    document.getElementById("basket").classList.toggle("d_none")
  }


  function addToBasket(restaurantIndex, mainsIndex) {
    basket.push(restaurants[restaurantIndex].products.main_courses[mainsIndex])
    renderBasket()
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
    let sumHTML = "";

    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        sumHTML = 0 + basket[basketIndex].price;
      
    }

    return sumHTML
  }