// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAN1t4emtrhDwGOU-SVRnRs8OAo-QMFcwE",
  authDomain: "team9m3.firebaseapp.com",
  databaseURL: "https://team9m3-default-rtdb.firebaseio.com",
  projectId: "team9m3",
  storageBucket: "team9m3.appspot.com",
  messagingSenderId: "246007929116",
  appId: "1:246007929116:web:a888af6df1821573e442d9"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // make auth and firestore references
  const auth = firebase.auth();
  const db = firebase.firestore();
  const store = firebase.storage();
  //update firestore settings
  db.settings({ timestampsInSnapshots: true});
  
  
  