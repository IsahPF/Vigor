let map, popup, Popup;

function initMap() {

    $("#vigor").hide();
    $("#lower_haight").hide();
    $("#financial_district").hide();

    var location = {
        lat: 37.78904217566213,
        lng: -122.44376408672501
    };
    var map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 14,
            center: location
        }
    );
    const iconBase =
        "http://127.0.0.1:5500/assets/img/Icons/Map/";
    const icons = {
        selected: {
            icon: iconBase + "Pin/Selected.png",
        },
        unselected: {
            icon: iconBase + "Pin.png",
        },
    };


    const features = [{
        position: new google.maps.LatLng(37.77660042749376, -122.50195813314114),
        title: "Vigor",
        type: "selected",
    }, {

        position: new google.maps.LatLng(37.77170545911561, -122.43057251204003),
        title: "Lower Haight",
        type: "unselected",
    }, {

        position: new google.maps.LatLng(37.79456377307752, -122.40034024046543),
        title: "Financial District",
        type: "unselected",
    }, ];


    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            title: features[i].title,
            map: map,

        });

        marker.addListener("click", () => {
            if (marker.getTitle() == "Vigor") {
                console.log(marker.getTitle());
                $("#vigor").show();
                $("#lower_haight").hide();
                $("#financial_district").hide();
            } else if (marker.getTitle() == "Lower Haight") {
                console.log(marker.getTitle());
                $("#vigor").hide();
                $("#lower_haight").show();
                $("#financial_district").hide();
            } else {
                $("#vigor").hide();
                $("#lower_haight").hide();
                $("#financial_district").show();

            }
            map.setZoom(17);
            map.setCenter(marker.getPosition());
        })


    }

}