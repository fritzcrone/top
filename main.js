var map = L.map('map').setView([47.043611,11.289444], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([47.043611,11.289444]).addTo(map);
marker.bindPopup("<b>Habicht</b><br>4099m").openPopup();