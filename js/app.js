//contact form
var firebaseConfig = {
    apiKey: "AIzaSyB6W4RawmmsNV17rhyYGe7Vlu41OQQgfL8",
    authDomain: "aj-portfolio-b2754.firebaseapp.com",
    databaseURL: "https://aj-portfolio-b2754.firebaseio.com",
    projectId: "aj-portfolio-b2754",
    storageBucket: "aj-portfolio-b2754.appspot.com",
    messagingSenderId: "1063562022595",
    appId: "1:1063562022595:web:3b33a78295bd97e33b9c76",
    measurementId: "G-VXB4S228GY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

