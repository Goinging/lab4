const map = L.map("map", {
    minZoom: 10,
    maxZoom: 18
});

map.setView([48.99, -123.05], 13);
const topheader = L.control({ position: "topright" });

L.tileLayer('https://api.mapbox.com/styles/v1/goinging/clopers4h005t01pw057a8esc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ29pbmdpbmciLCJhIjoiY2xvaXlvNTYzMDBrMTJrc2I3Z2s2cjFtbiJ9.hZslmiJpn9kpQtAgOFI23A').addTo(map);

var dashedPolyline = L.polyline([
    [48.976,-123.0636],
    [48.974,-123.0626],
    [48.9733,-123.066],
    [48.970,-123.064],
    [48.981,-122.804],
    [48.997,-122.775],
    [48.989,-122.765]
], { dashArray: '10, 8', color: '#6699cd', weight: 6 }).addTo(map);

function onPolylineClick(e) {
    L.popup({ maxWidth: 600 })
      .setLatLng(e.latlng)
      .setContent('<h1>Ferry Route</h1> <image src=https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1610665-point-roberts-ferry.jpg;w=604> This is the approximate route that ferries took during the COVID-19 pandemic. During the pandemic Canada shut down its borders to non-essential travel which made it difficult for residents of Point Roberts to get services they normally got in Canada. Ferry service would run twice a day from Augest 2020 to Augest 2021.')
      .openOn(map);
  }
  dashedPolyline.on('click', onPolylineClick);