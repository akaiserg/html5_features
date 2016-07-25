(function(messageId,btnId){

    var __messageId=messageId;
    var __btnId=btnId;


    var w1 = new Worker('worker1.js');
    var w2 = new Worker('worker2.js');

// creat a channel, give the ports to the workers
    var mc = new MessageChannel();
    w1.postMessage('here is your port', [mc.port1]);
    w2.postMessage('here is your port', [mc.port2]);

// listen on w2
// there is a global onmessage, but it's not for workers, it's for communicate between iframes/documents
    w2.onmessage = function(e){
        alert(e.data);
    }

// post the message to w1
// let w1 pass the message to w2
    w1.postMessage('this message is for worker2');

})("txtMessage_id", "btn_id");
