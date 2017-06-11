'use strict';

var imie = document.getElementsByTagName('input')[0];
var nazwisko = document.getElementsByTagName('input')[1];
var button = document.getElementsByTagName('input')[2];

button.onclick = function () {
    event.preventDefault();
    console.log(imie.value);
    console.log(nazwisko.value);
}