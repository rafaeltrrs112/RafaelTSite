///<reference path="TouchEvent.d.ts"/>
///<reference path="cust_library.ts"/>
//Touch events for the mobile portions of the site.
window.addEventListener('load', function () {
    var box1 = document.getElementById('nav-button');
    var box2 = document.getElementById('content-box');
    var statusdiv = document.getElementById('statusdiv');
    var startx = 0;
    box1.addEventListener('touchstart', function (e) {
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX.toString()); // get x position of touch point relative to left edge of browser
        console.log('Status: touchstart ClientX: ' + startx + 'px');
        e.preventDefault();
        toggleNav();
    }, false);
    box2.addEventListener('touchstart', function (e) {
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX.toString()); // get x position of touch point relative to left edge of browser
        e.preventDefault();
        bodyScope();
    }, false);
    box1.addEventListener('touchmove', function (e) {
        var touchobj = e.changedTouches[0]; // reference first touch point for this event
        var dist = parseInt(touchobj.clientX.toString()) - startx;
        console.log('Status: touchmove \n Horizontal distance traveled: ' + dist + 'px');
        e.preventDefault();
    }, false);
    box1.addEventListener('touchend', function (e) {
        var touchobj = e.changedTouches[0]; // reference first touch point for this event
        console.log('Status: touchend \n Resting x coordinate: ' + touchobj.clientX + 'px');
        e.preventDefault();
    }, false);
}, false);
