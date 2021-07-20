var firebaseConfig = {
      apiKey: "AIzaSyAjhpoMV6bSxJSGJJ6briS1Sh3CeIghiKY",
      authDomain: "missonsocial.firebaseapp.com",
      projectId: "missonsocial",
      storageBucket: "missonsocial.appspot.com",
      messagingSenderId: "25569268671",
      appId: "1:25569268671:web:5d02ced5de4fb7bb6f070a"
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
