import firebase from 'firebase/compat/app'

import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClSIfiJJgKtQGNaFL5neO03i9Q61oiMVc",
    authDomain: "testproject-f4297.firebaseapp.com",
    projectId: "testproject-f4297",
    storageBucket: "testproject-f4297.appspot.com",
    messagingSenderId: "795444621725",
    appId: "1:795444621725:web:a3dfda179e8cbba92a7f74",
    measurementId: "G-GWLB1E5M43"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();

var database = {
  user: null,
  getUser() {
    var promise = new Promise(function(resolve) {
      db.collection("Users")
      .where("Name", "==", "Wei Xin")
      .get().then((snapshot) => {
        database.user = snapshot.docs[0].data()
      })
     
    });
    return promise;
  },
  
}

export { database };