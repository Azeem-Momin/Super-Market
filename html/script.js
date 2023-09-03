// this is searh bar action
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// this is shopping cart action
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// login form
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
     loginForm.classList.toggle('active');
     searchForm.classList.remove('active');
     shoppingCart.classList.remove('active');
     navbar.classList.remove('active');

}

// menu button
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
     navbar.classList.toggle('active');
     searchForm.classList.remove('active');
     shoppingCart.classList.remove('active');
     loginForm.classList.remove('active');
}

// this is code to show only one button at a time
window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}


