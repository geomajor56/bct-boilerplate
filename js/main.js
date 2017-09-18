var map;

$(document).ready(function () {

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.map("map", {
        zoom: 13,
        center: [41.74737922562798, -70.0688695],
        // layers: [google_streets, brewster, points, highlight],
        zoomControl: false,
        attributionControl: false
    });
});
