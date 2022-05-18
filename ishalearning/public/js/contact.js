document.getElementById("send").addEventListener("click", validateForm);
function validateForm() {
  //gets the name
  let name = document.getElementById("contact-name").value;
  //gets the email
  let email = document.getElementById("contact-email").value;
  //gets the message
  let message = document.getElementById("contact-message").value;

  //checks if all fields have been filled before sending message.
  if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
    alert("all fields must be filled");
  } else {
    sendMessage(name, email, message);
  }
}

const firebaseConfig = {
    apiKey: "AIzaSyAto_iLmjXsrQTID9C-oRl5j4L_34K4V_M",
    authDomain: "isha-learning.firebaseapp.com",
    projectId: "isha-learning",
    storageBucket: "isha-learning.appspot.com",
    messagingSenderId: "418475451550",
    appId: "1:418475451550:web:659c23e3ee7c644bfbc78f",
    measurementId: "G-MRE3Y863NZ"
  };
firebase.initializeApp(firebaseConfig);
  
document.getElementById("send").addEventListener("click", validateForm);
      function validateForm() {
        //gets the name
        let name = document.getElementById("contact-name").value;
        //gets the email
        let email = document.getElementById("contact-email").value;
        //gets the message
        let message = document.getElementById("contact-message").value;

        //checks if all fields have been filled before sending message.
        if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
          alert("all fields must be filled");
        } else {
          sendMessage(name, email, message);
        }
      }

      //sends information to firebase
      function sendMessage(name, email, message) {
        const putData = async ( ) =>{
           const response = await fetch('https://us-central1-isha-learning.cloudfunctions.net/sendMail?name='+name+'&email='+email+'&message='+message, {
               method: 'PUT', 
               headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify()
           });
        };
        putData( ).then(()=>{
            $("#success_msg").show(100);
            document.getElementById('send_mail').reset();
        });
      }
      
