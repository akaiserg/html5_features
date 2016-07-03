(function(id){

    var __id=id;
	var __cont=0;

    if (typeof(EventSource) !== "undefined") {
        console.info("EventSource support!..");
    } else {
        alert("No EventSource support..");
    }


    var source = new EventSource("http://localhost:8085/xampp/xampp/GitHub/html5/serverSentEvent/server/server.php");

    source.addEventListener('open', function(e) {
        console.info("Connection was opened.");
    }, false);
	
	
	source.addEventListener('error', function(e) {
		if (e.readyState == EventSource.CLOSED) {
			console.info("Connection was closed.");
		}
	}, false);

	source.addEventListener('message', function(e) {
		
		console.log(e);
		
		var iDiv = document.createElement('div');
		iDiv.id = 'div_'+__cont+"_id";
		
		document.getElementById(__id).appendChild(iDiv);
		document.getElementById("div_"+__cont+"_id").innerHTML=e.data;
		__cont++;
		//document.getElementsByTagName('body')[0].appendChild(iDiv);
		
		
		
}, false);
	
    //document.getElementById(_id).innerHTML =value;

})("parent_id");
