"use strict";

$(document).ready(function() {
    $(".header__menu-btn").click(function(event) {
        $(".menu-btn__wrapper,.header__nav").toggleClass("active");
        $("body").toggleClass("lock");
    });
});