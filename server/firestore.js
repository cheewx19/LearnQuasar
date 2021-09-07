var admin = require("firebase-admin");

var serviceAccount = require("./testproject-f4297-f8d971839108.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

var database = {
  user: null,
  getUser() {
    var promise = new Promise(function(resolve) {
      db.collection("Users")
      .where("Name", "==", "Wei Xin")
      .get().then((snapshot) => {
        database.user = snapshot.docs[0].data();
        resolve(snapshot.docs[0].data())
      })
     
    });
    return promise;
  },
  
}

module.exports = database