/**
 * Adding and removing class without jQuery using HTML elements.
 */
//Checks if a class is present in an HTML element using regex checks.
///<reference path="TSTypes/TouchEvent.d.ts"/>
function getID(s) {
    return document.getElementById(s);
}
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
        disableBody();
    }
    else if (hasClass(ele, "active")) {
        removeClass(ele, "active");
        addClass(ele, "inactive");
        navActive = false;
        enableBody();
    }
    else {
        addClass(ele, "active");
        navActive = true;
        disableBody();
    }
}
function toggleCircle() {
    var elems = [getID("img-0"), getID("img-1"), getID("img-2")];
    elems.forEach(function (ele) {
        if (hasClass(ele, "stacked")) {
            removeClass(ele, "stacked");
            addClass(ele, "spread");
        }
        else if (hasClass(ele, "spread")) {
            removeClass(ele, "spread");
            addClass(ele, "stacked");
        }
        else {
            addClass(ele, "spread");
        }
    });
}
function bodyScope() {
    if (navActive) {
        toggleNav();
    }
}
function disableBody() {
    var ele = document.body;
    addClass(ele, "no-scroll");
}
function enableBody() {
    var ele = document.body;
    removeClass(ele, "no-scroll");
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
