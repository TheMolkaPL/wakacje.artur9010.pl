var date = new Date(2016,5,24,0,0,0,0);

$(document).ready(
    function()
    {
        update();
    }
);

function update(){
    var now = new Date().getTime();
    var dif = date.getTime() - now;
    var x = dif / 1000;
    var seconds = Math.floor(x % 60);
    x /= 60;
    var minutes = Math.floor(x % 60);
    x /= 60;
    var hours = Math.floor(x % 24);
    x /= 24;
    var days = Math.floor(x);
    $("#time").html("Za jedyne... " + days + " Dni " + hours + " Godzin " + minutes + " minut " + seconds + " Sekund");
    setTimeout(update,1000);
}