(function(){


    if ("WebSocket" in window){
        alert("WebSocket is supported by your Browser!");


        document.getElementById("btn_id").onclick=function(){

            // Let us open a web socket
            var socket = new WebSocket("ws://localhost:8080", "echo-protocol");


            socket.onopen = function()
            {
                // Web Socket is connected, send data using send()
                socket.send("Message to send");
                alert("Message is sent...");
            };


            socket.onmessage = function (evt)
            {
                console.info(evt);
                document.getElementById("p_id").innerHTML="Message is received..."+evt.data;
                //alert("Message is received..."+evt.data);
            };

            socket.onclose = function()
            {
                // websocket is closed.
                alert("Connection is closed...");
            };

        };






    }else{
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
    }


})();
