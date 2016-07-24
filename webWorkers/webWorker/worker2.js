self.addEventListener("message", function(data) {

    var value=1;

    var interVal=setInterval(function() {

        if(data.data==value){
            clearTimeout(interVal);
        }
        value++;
        show(value);

    }, 1000);

}, false);


function  show(value){

    console.info(value);

}



