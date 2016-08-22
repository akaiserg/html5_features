"use strict";
(function(idContent,idFrame){

    var __idContent=idContent;
    var __idFrame=idFrame;
    var url="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS";

    document.getElementById(__idContent).innerHTML=url;
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        throw new Error('CORS not supported');
    }

    xhr.onload = function() {
        var text = xhr.responseText;
        console.info(xhr);
        var doc = document.getElementById(__idFrame).contentWindow.document;
        doc.open();
        doc.write(text);
        doc.close();

    };

    xhr.onerror = function(error) {

        console.info(error);
        alert("error");
    };

    xhr.send();

})( "content_id","webpage_iframe_id");


function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

    } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

    }
    return xhr;
};
