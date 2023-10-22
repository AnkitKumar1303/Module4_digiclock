var hours = document.getElementById("hours");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

function relogio() {
    var data = new Date();
    var hr = data.getHours();
    var mi = data.getMinutes();
    var se = data.getSeconds();

    if(hr<10) { hr = "0" + hr};
    if(mi<10) { mi = "0" + mi};
    if(se<10) { se = "0" + se};

    hours.textContent = hr;
    min.textContent = mi;
    sec.textContent = se;
}
setInterval(relogio, 1000);