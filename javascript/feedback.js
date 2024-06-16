const firebaseConfig = {
    apiKey: "AIzaSyCK4OktQ5JQRFom1adY6AqFNZd9gBfmiH8",
    authDomain: "pixacon-f42a8.firebaseapp.com",
    databaseURL: "https://pixacon-f42a8-default-rtdb.firebaseio.com",
    projectId: "pixacon-f42a8",
    storageBucket: "pixacon-f42a8.appspot.com",
    messagingSenderId: "1029298594859",
    appId: "1:1029298594859:web:0fe49442c88ffade91366e",
    measurementId: "G-H0HR7L9G3R"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference database

  const contactFormDB= firebase.database().ref("contactForm");


  document.querySelector("#contactForm").addEventListener("submit",submitform);



  function submitform(e){
    e.preventDefault();

    var fullname= gerelementVal("name")
    var Emailid= gerelementVal("email")
    var subject= gerelementVal("subject")
    var msgcontent= gerelementVal("message")

    saveMessages(fullname,Emailid,subject,msgcontent)

    document.querySelector("#contactForm").reset()
  }

  const saveMessages=(fullname,Emailid,subject,msgcontent)=>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name:fullname,
      Emailid:Emailid,
      subject:subject,
      msgcontent:msgcontent,
    })
  }

  const gerelementVal= (id)=>{
    return document.getElementById(id).value
  }