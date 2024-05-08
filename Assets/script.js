let loginForm = document.querySelector('.header .login-form');
 
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}
       
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }    
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }    
}

function login() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    var message = document.getElementById("message");

    if (username === "Tatiana" && password === "tatis2012") {
        message.innerHTML = "Login successful!";
        message.style.color = "green";
        window.location.href = "index.html"; // redirect to another page
    } else {
        message.innerHTML = "Username or password is incorrect!";
        message.style.color = "red";
    }
    if (username === "root" && password === "buenosd22") {
        message.innerHTML = "Login successful!";
        message.style.color = "green";
        window.location.href = "index2.html"; // redirect to another page
    } else {
        message.innerHTML = "Username or password is incorrect!";
        message.style.color = "red"; }
    }