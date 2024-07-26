const socket = io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
        const {latitude, longitude} = position.coords;
        socket.emit("send-location", {latitude, longitude});
    }, (error) => {
        console.error('errored', error);
    },{
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
    })
}

const map = L.map("map").setView([0, 0], 10)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Hrishikesh Sharma"
}).addTo(map)