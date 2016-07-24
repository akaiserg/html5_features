self.addEventListener("message", function(data) {

    for(var cont=data.data.val1;cont<=data.data.val2;cont++ ){
        //console.info(cont);
        if(isPrime(cont)){
            self.postMessage(cont);
        }
    }

}, false);


function isPrime(num) {

    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;

}
