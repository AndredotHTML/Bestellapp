function getRestaurantTemplate(restaurantIndex) {
    return `<div><img class="logo_pictures" src="/assets/bilder/${restaurants[restaurantIndex].logo}"<div>
            <div class="restaurants_head"><h2>${restaurants[restaurantIndex].name}</h2>
            <p class="rating">Bewertung ${restaurants[restaurantIndex].rating} von 5 Sterne</p></div>
            <div class="course_navigator"><div class="arrow_right"></div><a href="#main${restaurantIndex}">Hauptgerichte</a><div class="arrow_right"></div><a href="#side${restaurantIndex}">Beilagen</a>
            <div class="arrow_right"></div><a href="#dessert${restaurantIndex}">Desserts</a></div>
            <div class="DIV" id="main${restaurantIndex}"><div class="products_picture"><img class="product_pictures_details" src="/assets/bilder/${restaurants[restaurantIndex].mainpic}"></div>
            <div class="products"><div class="main_course_head"> <h3>Hauptgerichte</h3> </div> ${renderMainsTemplate(restaurantIndex)} </div></div>
            <div class="DIV" id="side${restaurantIndex}"><div class="products_picture"><img class="product_pictures_details" src="/assets/bilder/${restaurants[restaurantIndex].sidepic}"></div>
            <div class="products"><div class="sides_head">  <h3>Beilagen</h3></div> ${renderSidesTemplate(restaurantIndex)} </div></div>
            <div class="DIV" id="dessert${restaurantIndex}"><div class="products_picture"><img class="product_pictures_details" src="/assets/bilder/${restaurants[restaurantIndex].dessertpic}"></div>
            <div class="dessert_products"><div class="dessert_head"> <h3>Dessert</h3></div> ${renderDessertsTemplate(restaurantIndex)} </div>`;
}


function getMainsTemplate(restaurantIndex, mainsIndex, main_courses) {
    return `<div class="inner_products"> <div class="margin"> 
            <h4>${restaurants[restaurantIndex].products.main_courses[mainsIndex].name}</h4>
            <p>${restaurants[restaurantIndex].products.main_courses[mainsIndex].ingredients}</p>
            <p>${restaurants[restaurantIndex].products.main_courses[mainsIndex].price} €</p> 
            </div> <div class="add_to_card"> <img class="plus_img" onclick="addToBasket(${restaurantIndex}, ${mainsIndex})" src=/assets/bilder/plus.png> </div> </div>`;
}


function getSidesTemplate(restaurantIndex, sidesIndex, sides) {
    return `<div class="inner_products"> <div class="margin">
            <h4>${restaurants[restaurantIndex].products.sides[sidesIndex].name}</h4>
            <p>${restaurants[restaurantIndex].products.sides[sidesIndex].ingredients}</p>
            <p>${restaurants[restaurantIndex].products.sides[sidesIndex].price} €</p>
            </div> <div class="add_to_card"> <img class="plus_img" onclick="addToBasket(${restaurantIndex}, ${sidesIndex})" src=/assets/bilder/plus.png> </div> </div>`;
}


function getDessertTemplate(restaurantIndex, dessertsIndex, desserts) {
    return `<div class="inner_products"> <div class="margin">
            <h4>${restaurants[restaurantIndex].products.desserts[dessertsIndex].name}</h4>
            <p>${restaurants[restaurantIndex].products.desserts[dessertsIndex].ingredients}</p>
            <p>${restaurants[restaurantIndex].products.desserts[dessertsIndex].price} €</p>
            </div> <div class="add_to_card"> <img class="plus_img" onclick="addToBasket(${restaurantIndex}, ${dessertsIndex})" src=/assets/bilder/plus.png> </div> </div>`;
}


function getBasketTemplate() {
    return `<div class="inner_basket"><div class="basket_head"> <h3>Warenkorb</h3> </div>
            <div class="basket_content">${renderBasketContent()}</div>
            <div class="sum"> <p>Lieferkosten: 3.00 € </p><p> Gesamtsumme: ${renderBasketSum()} € </p> </div></div>`
}

function getBasketContentTemplate(basketIndex) {
    return `<div class="basket_content_divs"><div class="content_head"><h4>${basket[basketIndex].name}</h4><a href="#" onclick="removeFromBasket(${basketIndex})" class="close">X</a></div>
            <div class="content_foot"><div class="content_price"><p>${basket[basketIndex].price.toFixed(2) * basket[basketIndex].ammount} €</p> </div> 
            <div class="input"> <a onclick="subtracktValue(${basketIndex})" class="input_value">-</a><input class="basket_input" value="${basket[basketIndex].ammount}" type="number" readonly>
            <a onclick="addValue(${basketIndex})" class="input_value">+</a> </div></div></div>`
}


