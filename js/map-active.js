    var map;
    var latlng = new google.maps.LatLng(37.8136, 144.9631);
    var stylez = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            saturation: -100
        }]
    }];
    var mapOptions = {
        zoom: 15,
        center: latlng,
        scrollwheel: false,
        scaleControl: false,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
        }
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    var geocoder_map = new google.maps.Geocoder();
    var address = 'Melbourne';
    geocoder_map.geocode({
        'address': address
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                icon: 'img/core-img/map.png',
                position: map.getCenter()
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
    var mapType = new google.maps.StyledMapType(stylez, {
        name: "Grayscale"
    });
    map.mapTypes.set('gMap', mapType);
    map.setMapTypeId('gMap');