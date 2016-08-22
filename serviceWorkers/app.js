(function(){

    window.addEventListener("online",function(){
        console.info("online");
    });

    window.addEventListener("offline",function(){
        console.info("offline");
    });

    var imageParent = document.getElementById("div_content_id");

    var image = document.createElement("img");
    image.id = "img1_id";
    image.height = 350;
    image.width =  350;
    image.src = "http://localhost:8884/html5/serviceWorkers/img/bro1.jpg"
    imageParent.appendChild(image);


    var image2 = document.createElement("img");
    image2.id = "img2_id";
    image2.height = 350;
    image2.width =  350;
    image2.src = "http://localhost:8884/html5/serviceWorkers/img/bro2.jpg"
    imageParent.appendChild(image2);


    if (navigator.serviceWorker.controller) {
        var messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function(event) {
            console.log("Response the SW : ", event.data.message);
        }

        console.log("Sendingage to the service worker");
        navigator.serviceWorker.controller.postMessage({
            "command": "twoWayCommunication",
            "message": "Hi, SW"
        }, [messageChannel.port2]);
    } else {
        console.log("Nove ServiceWorker");
    }


})();


