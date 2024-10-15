function getRestaurantTemplate(restaurantIndex) {
    return `<div class="restaurants_head"><h2>${restaurants[restaurantIndex].name}</h2>
            <p class="rating">Bewertung ${restaurants[restaurantIndex].rating} von 5 Sterne</p></div>
            <div class="main_course"><div class="main_course_head"><div class="arrow_right"></div><h3>Hauptgerichte</h3></div>
            ${renderMainsTemplate(restaurantIndex)} </div>`;
}


function getMainsTemplate(restaurantIndex, mainsIndex) {
    return `<div class="mains_template"><h3>${restaurants[restaurantIndex].products.main_courses[mainsIndex].name}</h3></div>
            <p>${restaurants[restaurantIndex].products.main_courses[mainsIndex].ingredients}</p>
            <p>${restaurants[restaurantIndex].products.main_courses[mainsIndex].price}</p>`;
}