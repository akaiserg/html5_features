(function(idBtnPrime,idTxtVal1,idTxtVal2,div_id){

    var __idBtnPrime=idBtnPrime;
    var __idTxtVal1=idTxtVal1;
    var __idTxtVal2=idTxtVal2;
    var __div_id=div_id;
    var __w= undefined;
    var __w2= undefined;

    if(typeof(Worker) !== "undefined") {
        console.info("Web worker supported");
         __w = new Worker("webWorker/worker.js");
         __w2 = new Worker("webWorker/worker2.js");
    }else{
        alert("Web worker is not supported");
    }

    __w2.postMessage("20");

    document.getElementById(__idBtnPrime).onclick= function(){

        document.getElementById(__div_id).innerHTML="";
        var data={
            val1:document.getElementById(__idTxtVal1).value,
            val2:document.getElementById(__idTxtVal2).value
        }

        __w.postMessage(data);

        __w.onmessage = function(e) {
            //console.info(e);
            var b = document.createElement('b');
            b.innerHTML=" ( "+e.data+" ) ";
            document.getElementById(__div_id).appendChild(b);
        };

    };

})( "btn_find_id","txt_val1_id","txt_val2_id","div_content_id");
