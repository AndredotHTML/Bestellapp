function getRestaurantTemplate(restaurantIndex) {
    return `<div><img class="logo_pictures" src="/assets/bilder/${restaurants[restaurantIndex].logo}"<div>
            <div class="restaurants_head"><h2>${restaurants[restaurantIndex].name}</h2>
            <p class="rating">Bewertung ${restaurants[restaurantIndex].rating} von 5 Sterne</p></div>
            <div class="course_navigator"><div class="arrow_right"></div><a href="#main${restaurantIndex}">Hauptgerichte</a><div class="arrow_right"></div><a href="#side${restaurantIndex}">Beilagen</a>
            <div class="arrow_right"></div><a href="#dessert${restaurantIndex}">Desserts</a></div>
            <div class="DIV" id="main${restaurantIndex}"><div class="products_picture"><img class="product_pictures_details" src="/assets/bilder/${restaurants[restaurantIndex].mainpic}"</div></div>
            <div class="products"><div class="main_course_head"><div class="arrow_down"></div>
            <h3>Hauptgerichte</h3></div> ${renderMainsTemplate(restaurantIndex)} </div></div>
            <div class="DIV" id="side${restaurantIndex}"><div class="products_picture"><img class="product_pictures_details" src="/assets/bilder/${restaurants[restaurantIndex].sidepic}"</div></div>
            <div class="products"><div class="sides_head"><div class="arrow_down"></div>
            <h3>Beilagen</h3></div> ${renderSidesTemplate(restaurantIndex)} </div>
            <div class="DIV" id="dessert${restaurantIndex}"><div class="products_picture"><img class="product_pictures_details" src="/assets/bilder/${restaurants[restaurantIndex].dessertpic}"</div></div>
            <div class="products"><div class="dessert_head"><div class="arrow_down"></div>
            <h3>Dessert</h3></div> ${renderDessertsTemplate(restaurantIndex)} </div>`;
}


function getMainsTemplate(restaurantIndex, mainsIndex) {
    return `<div class="inner_products"> <div class="margin"> 
            <h4>${restaurants[restaurantIndex].products.main_courses[mainsIndex].name}</h4>
            <p>${restaurants[restaurantIndex].products.main_courses[mainsIndex].ingredients}</p>
            <p>${restaurants[restaurantIndex].products.main_courses[mainsIndex].price} €</p> </div></div>`;
}


function getSidesTemplate(restaurantIndex, sidesIndex) {
    return `<div class="inner_products"> <div class="margin">
            <h4>${restaurants[restaurantIndex].products.sides[sidesIndex].name}</h4>
            <p>${restaurants[restaurantIndex].products.sides[sidesIndex].ingredients}</p>
            <p>${restaurants[restaurantIndex].products.sides[sidesIndex].price} €</p> </div></div>`;
}


function getDessertTemplate(restaurantIndex, dessertsIndex) {
    return `<div class="inner_products"> <div class="margin">
            <h4>${restaurants[restaurantIndex].products.desserts[dessertsIndex].name}</h4>
            <p>${restaurants[restaurantIndex].products.desserts[dessertsIndex].ingredients}</p>
            <p>${restaurants[restaurantIndex].products.desserts[dessertsIndex].price} €</p> </div></div>`;
}