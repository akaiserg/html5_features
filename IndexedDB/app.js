(function(idP,idBtnInsert,idBtnSelect){

    var __id=idP;
    var __idBtnInsert=idBtnInsert;
    var __idBtnSelect=idBtnSelect;

    //prefixes of implementation that we want to test
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    console.info(window.indexedDB);
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }else{
        var request = indexedDB.open("library");

        request.onupgradeneeded = function() {
            // The database did not previously exist, so create object stores and indexes.
            var db = request.result;
            var store = db.createObjectStore("books", {keyPath: "isbn"});
            var titleIndex = store.createIndex("by_title", "title", {unique: true});
            var authorIndex = store.createIndex("by_author", "author");

            // Populate with initial data.
            store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
            store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
            store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});
        };

        request.onsuccess = function() {
            db = request.result;
        };


        document.getElementById(__idBtnInsert).onclick= function(){

            var tx = db.transaction("books", "readwrite");
            var store = tx.objectStore("books");

            store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
            store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
            store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});
            store.put({title: "new new", author: "new", isbn: 34235678});

            tx.oncomplete = function() {
                // All requests have succeeded and the transaction has committed.
                console.info("the transaction  finished");
            };

        };

        document.getElementById(__idBtnSelect).onclick= function(){

            var tx = db.transaction("books", "readonly");
            var store = tx.objectStore("books");
            var index = store.index("by_author");
            var request = index.openCursor(IDBKeyRange.only("Fred"));
            var div = document.getElementById(__id);
            request.onsuccess = function() {

                var cursor = request.result;
                if (cursor) {
                    console.info(cursor.value.isbn, cursor.value.title, cursor.value.author);
                    var content = document.createTextNode(cursor.value.isbn+"-"+cursor.value.title+"-"+cursor.value.author+"  --  ");
                    div.appendChild(content );
                    cursor.continue();
                } else {
                    // No more matching records.
                }

            };

        }

    }

})("p_id", "insert_data_id","select_data_id");
