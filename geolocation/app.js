(function(id,id2,map){

    var _id=id;
    var _id2=id2;
    var _map=map;

    if (typeof(navigator.geolocation) !== "undefined") {
        console.info("Geolocation is supported!..");
    } else {
        alert("Geolocation is not supported..");
        return ;
    }

    // First way
    navigator.geolocation.getCurrentPosition(function(position) {
       console.info(position.coords.latitude, position.coords.longitude);
       document.getElementById(_id).innerHTML ="Latitude: "+position.coords.latitude+" Longitude: "+ position.coords.longitude;

    });


    // Second way
    function geo_success(position) {
        document.getElementById(_id2).innerHTML ="Latitude: "+position.coords.latitude+" Longitude: "+ position.coords.longitude;
        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=300x300&sensor=false";

        document.getElementById("myList");
        if(document.getElementById(_map).hasChildNodes()){
            document.getElementById(_map).removeChild(document.getElementById(_map).childNodes[0]);
            alert("loading.............");
        }
        document.getElementById(_map).appendChild(img);
    }

    function geo_error(error) {
        document.getElementById(_id2).innerHTML ='ERROR(' + error.code + '): ' + error.message;
    }

    var geo_options = {
        enableHighAccuracy: true,
        maximumAge        : 30000,
        timeout           : 27000
    };

    // every time  the tab  gains  the focus  the information is gotten
    var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
    console.info(wpid);



})("p_id","p2_id","map_id");

