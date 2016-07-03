(function(id,attr1,attr2,btnChange){

    var __id=id;
    var __attr1=attr1;
    var __attr2=attr2;
    var __btnChange=btnChange;

    var __attributes= document.getElementById(id);
    document.getElementById(__btnChange).onclick=function(){
        __attributes.dataset.value=Math.floor((Math.random() * 10000000) + 1);
        __attributes.dataset.txt=Math.random().toString(36).substring(7);
        showValues();
    };







    var showValues=function(){
        console.info(__attributes.dataset.value);
        console.info(__attributes.dataset.txt);
        document.getElementById(__attr1).value=__attributes.dataset.value;
        document.getElementById(__attr2).value=__attributes.dataset.txt;
    }


    showValues();

})("p_id","attribute1_id","attribute2_id","btn_change_attr_js_id");
