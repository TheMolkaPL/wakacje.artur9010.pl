/*
     Copyshit 2015 artur9010.pl

     DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
     Version 2, December 2004

     Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.

     DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
     TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

     0. You just DO WHAT THE FUCK YOU WANT TO.
 */


var date = new Date(2016,5,24,0,0,0,0); //ten no... data!

function update(){ //aptdejty
    var now = new Date().getTime(); //nju Dejta
    var dif = date.getTime() - now; //minus na³
    var x = dif / 1000; //dzielone pszesz 1000
    var seconds = Math.floor(x % 60); //cos 60
    x /= 60; //
    var minutes = Math.floor(x % 60); //
    x /= 60; //
    var hours = Math.floor(x % 24); //
    x /= 24; //
    var days = Math.floor(x);
    document.getElementById('time').innerHTML = "Za jedyne... " + days + " Dni " + hours + " Godzin " + minutes + " minut " + seconds + " Sekund"; // tajmy wyswietlomy
    setTimeout(update,1000); //lel
}
