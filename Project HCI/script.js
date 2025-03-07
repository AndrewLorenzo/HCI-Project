// // Get the button element
// const button = document.querySelector('button');

// // Add a click event listener to the button
// button.addEventListener('click', () => {
//     // Redirect to another page
//     window.location.href = './product.html';
// });

/*
function redirectToProduct() {
    // Redirect to a different page
    window.location.href = "./products.html";
}

function redirectToTarget() {
    // Redirect to a different page
    window.location.href = "./products.html#target";
}

function redirectToTargetRecipe() {
    // Redirect to a different page
    window.location.href = "./recipes.html#target1";
}

function redirectToHome() {
    // Redirect to a different page
    window.location.href = "./home.html";
}

function redirectToRecipes() {
    // Redirect to a different page
    window.location.href = "./recipes.html";
}

function redirectToAboutUs() {
    // Redirect to a different page
    window.location.href = "./about-us.html";
}

function redirectToContact() {
    // Redirect to a different page
    window.location.href = "./contact-us.html";
}

// Add click event listener to the button
document.getElementById("button2").addEventListener("click", redirectToProduct);
document.getElementById("button1").addEventListener("click", redirectToHome);
document.getElementById("button3").addEventListener("click", redirectToRecipes);
document.getElementById("button4").addEventListener("click", redirectToAboutUs);
document.getElementById("button5").addEventListener("click", redirectToContact);
document.getElementById("explore-button").addEventListener("click", redirectToProduct);
document.getElementById("more").addEventListener("click", redirectToTarget);
document.getElementById("more-recipe").addEventListener("click", redirectToTargetRecipe);
*/

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {

        let buttonId = event.target.id;
        if (buttonId === "button1") window.location.href = "../Home Page/home.html"; 
        else if (buttonId === "button2" || buttonId === "explore-button") window.location.href = "../Products Page/products.html"; 
        else if (buttonId === "button3") window.location.href = "../Recipes Page/recipes.html"; 
        else if (buttonId === "button4") window.location.href = "../About Us Page/about-us.html"; 
        else if (buttonId === "button5") window.location.href = "../Contact Us Page/contact-us.html";
        else if (buttonId === "recipe1" || buttonId === "more-recipe") window.location.href = "../Recipes1/recipe1.html"; 
        else if (buttonId === "recipe2") window.location.href = "../Recipes2/recipe2.html"; 
        else if (buttonId === "recipe3") window.location.href = "../Recipes3/recipe3.html"; 
        else if (buttonId === "more") window.location.href = "../Products Page/products.html#target"; 
        else if (buttonId === "ig") window.open("https://www.instagram.com/vkellogg's/","_blank"); 
        else if (buttonId === "yt") window.open("https://www.youtube.com/@vkellogg's", "_blank"); 
        else if (buttonId === "order") alert("Your order will be ready in 5 minutes...");
    });
});

        // if (event.target.matches("#button1, #button2, #button3, #button4, #button5")) {
        //     redirectToMainPage(event);
        // } 
        // else if (event.target.matches("#recipe1, #recipe2, #recipe3")) {
        //     redirectToRecipePage(event);
        // }
        // else if (event.target.matches("#more, #explore-button, #more-recipe")) {
        //     redirectToTarget(event);
        // }

// function redirectToMainPage(event) {
//     let buttonId = event.target.id;
//     if (buttonId === "button1") window.location.href = "../Home Page/home.html"; 
//     else if (buttonId === "button2") window.location.href = "../Products Page/products.html"; 
//     else if (buttonId === "button3") window.location.href = "../Recipes Page/recipes.html"; 
//     else if (buttonId === "button4") window.location.href = "../About Us Page/about-us.html"; 
//     else if (buttonId === "button5") window.location.href = "../Contact Us Page/contact-us.html"; 
// }

// function redirectToRecipePage(event) {
//     let buttonId = event.target.id;
//     if (buttonId === "recipe1") window.location.href = "../Recipes1/recipe1.html"; 
//     else if (buttonId === "recipe2") window.location.href = "../Recipes2/recipe2.html"; 
//     else if (buttonId === "recipe3") window.location.href = "../Recipes3/recipe3.html"; 
// }

// function redirectToTarget(event) {
//     let buttonId = event.target.id;
//     if (buttonId === "explore-button") window.location.href = "../Products Page/products.html"; 
//     else if (buttonId === "more") window.location.href = "../Products Page/products.html#target"; 
//     else if (buttonId === "more-recipe") window.location.href = "../Recipes1/recipe1.html"; 
// }
