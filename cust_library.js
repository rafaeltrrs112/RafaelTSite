/**
 * Created by rotor on 8/3/2015.
 * Adding and removing class without jQuery using HTML elements.
 */
//Checks if a class is present in an HTML element using regex checks.
///<reference path="TouchEvent.d.ts"/>
///<reference path="jquery.d.ts"/>
var navActive = false;
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(ele, cls) {
    if (!hasClass(ele, cls))
        ele.className += " " + cls;
}
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}
function toggleNav() {
    var ele = document.getElementById("main-nav");
    if (hasClass(ele, "inactive")) {
        removeClass(ele, "inactive");
        addClass(ele, "active");
        navActive = true;
    }
    else if (hasClass(ele, "active")) {
        removeClass(ele, "active");
        addClass(ele, "inactive");
        navActive = false;
    }
    else {
        addClass(ele, "active");
        navActive = true;
    }
}
function bodyScope() {
    var ele = document.getElementById("slide");
    if (navActive) {
        toggleNav();
    }
}
//function init() {
//    // Get a reference to our touch-sensitive element
//    var touchzone = document.getElementById("touchzone");
//    // Add an event handler for the touchstart event
//    touchzone.addEventListener("touchstart", touchHandler, false);
//}
//function touchHandler(event) {
//    // Get a reference to our coordinates div
//    var coords = document.getElementById("coords");
//    // Write the coordinates of the touch to the div
//    console.log("touch");
//    coords.innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
//} 
