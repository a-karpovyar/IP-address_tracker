import L from 'leaflet';

export function addTileLayer(mymap) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1[joicGNncmFtb3RhIiwiVSI6ImNrcnV3dT]tMzAwejgyG94M2tweXE1MHEifQ.BZdgYPtA2ToBKRod8Mficg', {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="#">Anatoly</a>.',
        maxzoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        //accessToken: 'your mapbox. access. token'
    }).addTo(mymap);
}