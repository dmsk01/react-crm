export class IndexedDB {
  constructor(dbName, dbVersion, dbUpgrade) {
    return new Promise((resolve, reject) => {
      // объект соединения с базой данных
      this.db = null;

      // обработка ошибки если браузер не поддерживает indexedDb
      if (!("indexedDB" in window)) reject("not supported");

      // открывает базу данных
      const dbOpen = indexedDB.open(dbName, dbVersion);

      if (dbUpgrade) {
        // слушаем событие upgrade
        dbOpen.onupgradeneeded = (e) => {
          dbUpgrade(dbOpen.result, e.oldVersion, e.newVersion);
        };
      }

      dbOpen.onsuccess = () => {
        this.db = dbOpen.result;
        resolve(this);
      };

      dbOpen.onerror = (e) => {
        reject(`IndexedDB error: ${e.target.errorCode}`);
      };
    });
  }
}

// import { workers } from "../components/workerPerson/WorkerPerson";

// window.indexedDB =
//   window.indexedDB ||
//   window.mozIndexedDB ||
//   window.webkitIndexedDB ||
//   window.msIndexedDB;

// let request = indexedDB.open("Workers", 0);

// request.onupgradeneeded = (event) => {
//   let db = request.result;

//   if (!db.objectStoreNames.contains("WorkersList")) {
//     let objectStore = db.createObjectStore("WorkersList", {
//       keyPath: "id",
//       autoIncrement: true,
//     });
//   }

//   switch (event.oldVersion) {
//     case 0:

//     case 1:
//   }
// };

// request.onsuccess = () => {
//   console.log("db has been created");
//   let db = request.result;

//   db.onversionchange = function () {
//     db.close();
//     alert("База данных устарела, пожалуйста, перезагрузите страницу.");
//   };
// };

// request.onerror = () => {
//   console.error("An error occured. ", request.error);
// };

// request.onblocked = function () {
//   alert(
//     "Имеется соединение с устаревшей версией, новое соединение установить невозможно"
//   );
// };

// let transaction = db.transaction("WorkersList", "readwrite");
// let workersList = transaction.objectStore("WorkersList");
// addrequest = workersList.add(workers);

// addrequest.onsuccess = function () {
//   console.log("Workers добавлены в хранилище", addrequest.result);
// };

// addrequest.onerror = function () {
//   console.log("Ошибка", addrequest.error);
// };
