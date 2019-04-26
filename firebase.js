var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyDvEIdSn6YEJpOkqcsEmyX8vEO748aqVGM",
    authDomain: "bloodcast-67eda.firebaseapp.com",
    databaseURL: "https://bloodcast-67eda.firebaseio.com",
    projectId: "bloodcast-67eda",
    storageBucket: "bloodcast-67eda.appspot.com",
    messagingSenderId: "311321570962"
};

module.exports = firebase.initializeApp(config);
