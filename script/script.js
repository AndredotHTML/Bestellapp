const restaurants = [
    {
      "name": "Pizzeria de Gracia",
      "rating": 4,
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
            "description": "Geröstetes Brot mit Tomaten, Knoblauch und Basilikum"
          },
          {
            "name": "Caprese-Salat",
            "price": 6.50,
            "description": "Tomaten, Mozzarella, frisches Basilikum und Balsamico"
          },
          {
            "name": "Frittierte Zucchini",
            "price": 5.50,
            "description": "Frittierte Zucchinischeiben mit Knoblauchdip"
          },
          {
            "name": "Olivenplatte",
            "price": 4.50,
            "description": "Verschiedene italienische Oliven"
          }
        ],
        "desserts": [
          {
            "name": "Tiramisu",
            "price": 4.50,
            "description": "Kaffeetrüffel mit Mascarpone und Kakao"
          },
          {
            "name": "Panna Cotta",
            "price": 4.00,
            "description": "Sahnige Nachspeise mit Fruchtsoße"
          }
        ]
      }
    },
    {
      "name": "Toms Burgers",
      "rating": 4.5,
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
            "description": "Klassische knusprige Pommes frites"
          },
          {
            "name": "Onion Rings",
            "price": 4.00,
            "description": "Frittierte Zwiebelringe mit Dip"
          },
          {
            "name": "Coleslaw",
            "price": 3.00,
            "description": "Frischer Krautsalat mit Dressing"
          },
          {
            "name": "Chili Cheese Fries",
            "price": 5.50,
            "description": "Pommes mit Chili und geschmolzenem Käse"
          }
        ],
        "desserts": [
          {
            "name": "Milkshake",
            "price": 4.50,
            "description": "Cremiger Milkshake in verschiedenen Geschmacksrichtungen"
          },
          {
            "name": "Brownie",
            "price": 3.00,
            "description": "Saftiger Schokoladenbrownie mit Nüssen"
          }
        ]
      }
    }
  ];

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
  
    for (let restaurantIndex = 0; restaurantIndex < restaurants[restaurantIndex].sides.length; restaurantIndex++) {
          
        sidesHTML += getSidesTemplate(restaurantIndex);
          
    };

    return sidesHTML

  }


  function renderDessertsTemplate(restaurantIndex) {
    let dessertsHTML = " ";
  
    for (let restaurantIndex = 0; restaurantIndex < restaurants[restaurantIndex].desserts.length; restaurantIndex++) {
          
        dessertsHTML += getDessertTemplate(restaurantIndex);restaurantIndex
          
    };

    return dessertsHTML

  }
  
  
