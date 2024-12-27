import 'babel-polyfill';
import { validateIp, addTileLayer, getAddress, addOffset } from "./helpers";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');
const mapArea = document.querySelector('.map');




const mymap = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
    zoomControl: false
});
const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
    // iconAnchor:[22,94]
});

addTileLayer(mymap);
L.marker([51.505, -0.09], { icon: markerIcon }).addTo(mymap);

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {

    const ipAddress = ipInput.value; // Get the input value dynamically
    if (validateIp(ipAddress)) {
        getAddress(ipAddress)
            .then(data => {
                setInfo(data)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}
function setInfo(mapData) {
    console.log(mapData);
    ipInfo.innerText = mapData.ip_address;
    locationInfo.innerText = mapData.country + " " + mapData.city;
    ispInfo.innerText = mapData.connection.autonomous_system_organization;

    mymap.setView([mapData.latitude, mapData.longitude]);
    L.marker([mapData.latitude, mapData.longitude], { icon: markerIcon }).addTo(mymap);
    if (matchMedia('max-width:1023px').matches) {
        addOffset(mymap);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getAddress('102.22.22.1').then(setInfo)
});