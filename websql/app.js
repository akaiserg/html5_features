(function(idP,idBtnInsert,idBtnSelect){

    var __id=idP;
    var __idBtnInsert=idBtnInsert;
    var __idBtnSelect=idBtnSelect;

    if (typeof(openDatabase) !== "undefined") {
        console.info("Web  sql !..");
    } else {
        alert("No Web sql support..");
    }

    document.getElementById(__idBtnInsert).onclick= function(){
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "log 1")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "log 2")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (3, "log 3")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (4, "log 4")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (5, "log 5")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (6, "log 6")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (7, "log 7")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (8, "log 8")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (9, "log 9")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (10, "log 10")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (11, "log 11")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (12, "log 12")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (13, "log 13")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (14, "log 14")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (15, "log 15")');

        });
    };

    document.getElementById(__idBtnSelect).onclick= function(){
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
                var len = results.rows.length, i;
                msg = "Found rows: ";
                for (i = 0; i < len; i++){
                    msg+=" "+results.rows.item(i).log;
                }
                document.getElementById(__id).innerHTML =msg;
            }, null);
        });
    };


    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    });

})("p_id", "insert_data_id","select_data_id");
