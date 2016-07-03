(function(id){

    var _id=id;

    if (typeof(localStorage) !== "undefined") {
        console.info("Web Storage support!..");
    } else {
        alert("No Web Storage support..");
    }

    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    var value=localStorage.clickcount;
    document.getElementById(_id).innerHTML =value;

})("p_id");
