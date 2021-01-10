// Recordamos, para usar Firebase, hemos instalado plugin de Firebase y de VueFire
// para que además sea reactivo con Vue. La orden es "npm install vuefire firebase"
// O podemos usar los CDN para mejor rendimiento

//import Firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

// Initialize Firebase
const app=  firebase.initializeApp(firebaseConfig);

// exportamos variable firestore
export const db = app.firestore()