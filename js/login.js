$(document).ready(()=>{

//login Form
$("#loginForm").submit((a) => {
    a.preventDefault();  //to prevent auto submission of form
    var mail = $("#loginMail").val();
    var pass = $("#loginPassword").val();
    console.log(mail + " " + pass);

     $.getJSON("http://localhost:3000/profile", (data) => {
      for (var i = 0; i < data.length; i++) {
       

        if (data[i].email == mail && data[i].password == pass) {
    
          sessionStorage.setItem("user", JSON.stringify(data[i]));
          
          
          window.open("sucess.html");

          var a=JSON.parse(sessionStorage.getItem("user"));
          console.log("hello"+ a.name);
  

          break;
         
        }

        if (data[i].email != mail && data[i].password != pass) {
          $("#validLogin").html("please check your email and password").css('color', 'red');
        }
      }


    })

            
 
  })





})