///<reference path="TSTypes/TouchEvent.d.ts"/>
///<reference path="tnplib.ts"/>
//Touch events for the mobile portions of the site creates four event listeners.
window.addEventListener('load', function () {
    //Comment out this code to ensure that you understand what is going on.
    var nav_button = document.getElementById('nav-button');
    var body_box = document.getElementById('content-box');
    //Event listener for the navButton to toggle the nav.
    nav_button.addEventListener('touchstart', function (e) {
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        e.preventDefault();
        toggleNav();
    }, false);
    //Event listener for the body to disableNav() if nav is active and the user taps the body.
    body_box.addEventListener('touchstart', function (e) {
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        e.preventDefault();
        bodyScope();
    }, false);
}, false);
