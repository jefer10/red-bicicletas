var map = L.map('main_map').setView([-34.6012424, -58.3861497], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-34.6012424, -58.3861497]).addTo(map);
var marker1 = L.marker([-34.6113424, -58.3861497]).addTo(map);
var marker = L.marker([-34.6012424, -58.3764497]).addTo(map);