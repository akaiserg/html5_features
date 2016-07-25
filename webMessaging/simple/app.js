(function(btnChange,iFrame,b){

    var __iFrame=iFrame;
    var __btnChange=btnChange;
    var __b=b;

    document.getElementById(__btnChange).onclick= function(){
        document.getElementById(__iFrame).contentWindow.postMessage('The message to send at '+timestamp()+'','http://127.0.0.1:8884');
    }


    var messageEventHandler = function(event){
        // check that the origin is one we want.
            alert(event.data);

    }
    window.addEventListener('message', function(event){
        document.getElementById(__b).innerHTML="Response: "+event.data;
    },false);

    var timestamp=function () {

        var date = new Date();
        var year = date.getFullYear();
        var month = ("0"+(date.getMonth()+1)).substr(-2);
        var day = ("0"+date.getDate()).substr(-2);
        var hour = ("0"+date.getHours()).substr(-2);
        var minutes = ("0"+date.getMinutes()).substr(-2);
        var seconds = ("0"+date.getSeconds()).substr(-2);
        return year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds;

    }


})("btn_id","iframe_id","b_id");
