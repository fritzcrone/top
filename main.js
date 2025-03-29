var map = L.map('map').setView([47.043611,11.289444], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([47.043611,11.289444]).addTo(map);
marker.bindPopup("<b>Habicht</b><br>4099m").openPopup();

/*
Skript für den Lieblingsort
*/

let stop = {
    nr: 23,
    title: "Habicht",
    user: "fritzcrone",
    lat: 47.043611,
    lng: 11.289444,
    zoom: 15
};

const STOPS = [

    {
        lat: -34.423889,
        lng: 172.6775,
        zoom: 13,
        title: "Cape Reinga",
        nr: 1,
        user: "vintiyannick",
    },
    {
        nr: 2,
        title: "Bay of Islands",
        user: "Ellinnaa",
        lat: -35.183333,
        lng: 174.166667,
        zoom: 11,
    },
    {
        nr: 3,
        title: "Auckland",
        user: "samuesl",
        lat: -36.83,
        lng: 174.8,
        zoom: 13,
    },
    {
        nr: 4,
        title: "Cormandel Peninsula",
        user: "Gregorysprenger2001",
        lat: -37.882778,
        lng: 175.636667,
        zoom: 11,
    },
    {
        nr: 5,
        title: "Rotorua",
        user: "lukas6020",
        lat: -38.14,
        lng: 176.25,
        zoom: 13,
    },
    {
        nr: 6,
        title: "Taupo",
        user: "johannauniibk",
        lat: -38.690,
        lng: 176.080,
        zoom: 11,
    },
    {
        nr: 7,
        title: "Napier",
        user: "sam-uze",
        lat: -39.48,
        lng: 176.90,
        zoom: 13,
    },
    {
        nr: 8,
        title: "Tongariro Nationalpark",
        user: "webmapping",
        lat: -39.2,
        lng: 175.583333,
        zoom: 11,
    },
    {
        nr: 9,
        title: "Wellington",
        user: "cs4151",
        lat: -41.2875,
        lng: 174.776111,
        zoom: 12,
    },
    {
        title: "Picton",
        user: "pauly0602",
        nr: 10,
        lat: -41.29,
        lng: 174.0,
        zoom: 11,
    },
    {
        nr: 11,
        title: "Nelson",
        user: "lujehle",
        lat: -41.270833,
        lng: 173.284167,
        zoom: 11,
    },
    {
        nr: 12,
        title: "Abel Tasman Nationalpark",
        user: "benmertens",
        lat: -40.833333,
        lng: 172.9,
        zoom: 11,
    },
    {
        nr: 13,
        title: "Pancake rocks (Punakaiki)",
        user: "johaschra",
        lat: -42.114383,
        lng: 171.327320,
        zoom: 11,
    },
    {
        nr: 16,
        title: "Wanaka",
        user: "lizzie2911",
        lat: -44.7,
        lng: 169.15,
        zoom: 13,
    },
    {
        nr: 17,
        title: "Queenstown",
        user: "Kathleenuniibk",
        lat: -45.031389,
        lng: 168.660833,
        zoom: 14,
    },
    {
        nr: 18,
        title: "Milford Sound",
        user: "Pruje839",
        lat: -44.616667,
        lng: 167.866667,
        zoom: 12,
    },
    {
        nr: 20,
        title: "Doubtful Sound",
        user: "florentinebusch",
        lat: -45.317222,
        lng: 166.988333,
        zoom: 11,
    },
    {
        nr: 21,
        title: "Steward Island",
        user: "moplatt",
        lat: -46.98,
        lng: 167.88,
        zoom: 9,
    },
    {
        nr: 23,
        title: "Dunedin",
        user: "fritzcrone",
        lat: -45.874167,
        lng: 170.503611,
        zoom: 13
    },
    {
        nr: 24,
        titel: "Moeraki Boulders",
        user: "StephanPumpernik",
        lat: -45.345275,
        lng: 170.826061,
        zoom: 13,
    },
    {
        lat: -44.116667,
        lng: 170.166667,
        zoom: 11,
        title: "Lake Pukaki",
        nr: 25,
        user: "PriPh625",
    },
    {
        title: "Mount Cook",
        nr: 26,
        user: "Basti-10",
        zoom: 13,
        lat: -43.59,
        lng: 170.14,
    },
    {
        nr: 29,
        title: 'Kaikoura',
        user: 'jessimeteo',
        lat: -42.411667,
        lng: 173.682222,
        zoom: 11
    },
];

console.log(STOPS[0]);
console.log(STOPS[0].title);

// Karte initialisieren
let map = L.map('map');

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Loop ber Etappen
for (let i = 0; i < STOPS.length; i++) {
    console.log(STOPS[i]);
    // Marker zeichnen
    let marker = L.marker([STOPS[i].lat, STOPS[i].lng]).addTo(map);

    // Popup definieren und öffnen
    marker.bindPopup(`
    <h2>${STOPS[i].title}</h2>
    <ul>
        <li>Geogr. Breite: ${STOPS[i].lat.toFixed(3)}°</li>
        <li>Geogr. Länge: ${STOPS[i].lng.toFixed(3)}°</li>
    </ul>
`);

    // Eigene Etappe blicken und öffnen
    if (STOPS[i].user == "fritzcrone") {
        map.setView([STOPS[i].lat, STOPS[i].lng], STOPS[i].zoom);
        marker.openPopup();
    }

// Pulldownmenü befüllen
let option = document.createElement("option");
option.value = STOPS[i].user;
option.text = STOPS[i].title;
if (STOPS[i].user == "fritzcrone") {
    option.selected = true;
}
document.querySelector("#pulldown select").appendChild(option);
}

// Auf Änderungen beim Pulldown reagieren
document.querySelector("#pulldown select").onchange =function(evt) {
    let url = `https://${evt.target.value}.github.io/nz`;
    //console.log(url);
    //console.log(evt.target.value);
    window.location = url;
}