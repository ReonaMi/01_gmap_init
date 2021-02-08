let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat:-6.886497, lng: 112.008156  },
    });
}