var firebaseConfig = {
      apiKey: "AIzaSyAC25aQnPuY2nRp9s1JQmLhxh9_OTTyPrw",
      authDomain: "kwitter-5892b.firebaseapp.com",
      databaseURL: "https://kwitter-5892b-default-rtdb.firebaseio.com",
      projectId: "kwitter-5892b",
      storageBucket: "kwitter-5892b.appspot.com",
      messagingSenderId: "854933513829",
      appId: "1:854933513829:web:3169d1850551c0be35488c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
