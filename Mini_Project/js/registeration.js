$(document).ready(() => {

  //show registeration form
  $(".regs").click((a) => {

    $('.login').hide();
    $('.reg').show();
    a.preventDefault();
  })


  //confirm password
  $("#cPassword").keyup(() => {
    var passw = $("#password").val();
    console.log(passw);
    console.log($("#cPassword").val());
    var cpv = $("#cPassword").val();
    if (passw != cpv) {
      $("#cp").html("Password Not Matching").css("color", "red");
      
      $('#sub').prop('disabled', true);
  
    
    }
    else {

      $("#cp").html("Password Matching").css("color", "green");
      
      $('#sub').removeAttr("disabled");
    }

  });

    // console.log($.getJSON("http://localhost:3000/profile"));
    
   
    //check if mail is present
   $("#mymail").keyup(()=>{
     console.log("gdjkasgdjk");
     
    var mail = $("#mymail").val();
    console.log(mail);
      // console.log(data);
      $.getJSON("http://localhost:3000/profile",(data)=>{
        for (var i = 0; i < data.length; i++) {
          if(data[i].email==mail)
          {
            console.log("fhsdfgkuhsdgfkusdg");
            $("#mailCheck").html("This mail Id Already Exists");
           
              $('#sub').prop('disabled', true);
           
            //$('#sub').removeAttr('disabled');
          
          }

          else{
            // $("#mailCheck").html("This mail Id Already Exists");
            // $('#sub').prop('disabled', true);
           
         
              $('#sub').removeAttr('disabled');
            
          }
        }
      })
    


   });
   



  //registeration form
  $("#registerationForm").submit((a) => {
    a.preventDefault();  //to prevent auto submission of form
    var name = $("#name").val();
    var mail = $("#mail").val();
      //  $("#mymail").keyup(()=>{
      //      alert("huifhasid");
      //        $.getJSON("http://localhost:3000/profile",(data)=>{
      //         for (var i = 0; i < data.length; i++) {
      //           if(data[i].email==mail)
      //           {
      //             console.log("fhsdfgkuhsdgfkusdg");
                  
      //             $("#mailCheck").html("This mail Id Already Exists");
      //             $('#sub').prop('disabled', true);
      //             //$('#sub').removeAttr('disabled');

      //           }

      //           else{
      //             // $("#mailCheck").html("This mail Id Already Exists");
      //             // $('#sub').prop('disabled', true);
      //             $('#sub').removeAttr('disabled');  
      //           }
      //         }

      //        }) 


      //  })

    var pass = $("#password").val();
    var gend = $('input[name="gender"]:checked').val();
    console.log(name + " " + mail);


    $.ajax({
      url: "http://localhost:3000/profile",
      method: "POST",
      data: {
        "name": name,
        "email": mail,
        "password": pass,
        "gender": gend

      },
      success: (x) => {
        // alert(x.name +" posted");
        console.log(x);
      }

    })
  });

  //show login form
  $(".log").click((a) => {
    $('.reg').hide();
    $('.login').show();
    a.preventDefault();
  })

  //Not Registered? Create Account
  $("#singUp").click((a) => {
    $('.login').hide();
    $('.reg').show();

    a.preventDefault();
  });


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