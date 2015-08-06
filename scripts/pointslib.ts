/**
 * Created by rotor on 8/3/2015.
 * Adding and removing class without jQuery using HTML elements.
 */
//Checks if a class is present in an HTML element using regex checks.
///<reference path="TSTypes/TouchEvent.d.ts"/>
var navActive : boolean = false;
function hasClass(ele:HTMLElement,cls: string) : boolean {

    return !!ele.className.match(new RegExp('(\\s|^)' + cls +'(\\s|$)'));
}

function addClass(ele:HTMLElement,cls: string) : void {
    if (!hasClass(ele,cls)) ele.className += " " + cls;
}

function removeClass(ele:HTMLElement,cls: string): void {
    if (hasClass(ele,cls)) {
        var reg : RegExp = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
    }
}
function toggleNav(): void {
    var ele : HTMLElement = document.getElementById("main-nav");
    if (hasClass(ele,"inactive")) {
        removeClass(ele, "inactive");
        addClass(ele, "active");
        navActive = true;
        disableBody();
    }
    else if (hasClass(ele,"active")) {
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
function bodyScope(): void {
    if (navActive) {
        toggleNav()
    }
}
function disableBody(){
    var ele : HTMLElement = document.body;
    addClass(ele, "no-scroll");
}
function enableBody(){
    var ele : HTMLElement = document.body;
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