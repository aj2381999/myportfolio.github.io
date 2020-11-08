//1.copy the code from firebase website
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
  firebase.analytics(); 

//2.reference message collection
var messagesref=firebase.database().ref('messages');

//3. when submit button is clicked 
document.getElementById('contactform').addEventListener('submit',submitform);

function submitform(e){
  //e.preventDefalut();
  
  var name   =getvalue('name');
  var phone  =getvalue('phone');
  var email  =getvalue('email');
  var message=getvalue('message');

  savemessage(name,phone,email,message);
}

function getvalue(id){
    return document.getElementById(id).value;
}

//4.save messages to firebase
function savemessage(){
    var newmessagesref=messagesref.push();
    newmessagesref.set({
        name:name,
        phone:phone,
        email:email,
        message:message
    });
}



// function sub(){
//     alert("Thanks For Reaching Me,I Will Catch You Soon");
//     return true;
// }


//ANIMATION
const spans=document.querySelectorAll('h1 span')
spans.forEach(span=> span.addEventListener('mouseover',function(e){
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span=>span.addEventListener('mouseout',function(e){
    span.classList.remove('animated','rubberBand')
}))
