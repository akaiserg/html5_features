(function(id){

    var _id=id;

    if (typeof(sessionStorage) !== "undefined") {
        console.info("Web Storage support!..");
    } else {
        alert("No Web Storage support..");
    }

    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 1;
    }
    var value=sessionStorage.clickcount;
    document.getElementById(_id).innerHTML =value;

})("p_id");
