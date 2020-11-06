"use strict";
  $(document).ready(function(){
    $('.content').richText();
    var count=[0,0,0];
    var a;
    //get data       
        $.ajax({
            // type: 'GET',
            type: 'GET',
            dataType: 'json',
         
            url: 'http://localhost:5000/blogdata',
            success: function(result){
            //  console.log(result[0]);
                 a=result;
                console.log('response from server')
                $.each(result, function(i, record){                   
                  console.log(record);
                  let ab=record.content;
                  console.log(ab.slice(0,20));
                  var c=ab.slice(0,20);
                  let div1 = document.createElement('div');
                  let anchor = document.createElement('a');
                  let para= document.createElement('p');
                  div1.id="newdata";
                  para.innerHTML = c;
                  var ids = record.id;
                 anchor.href="#";
                 anchor.id="readme";
                 anchor.innerText="Read More....";
                  
                 div1.append(para);
                 div1.append(anchor);
                 
                 console.log(anchor);
                 console.log(div1);
                 
                 document.getElementById("show").append(div1);  
                 anchor.onclick= function getSpecificContent()
                 {
        
                  console.log(ids);
                  console.log('http://localhost:5000/blogdata/'+ids);
                    $.getJSON('http://localhost:5000/blogdata/'+ids,(data)=>{
                      console.log("Hi bro here "+data);        
                  console.log(data.content);
                  $("#show").hide();
                      // document.getElementById('readMore').innerHTML=data.content;
                      $("#readMore").html(data.content);
                      // document.getElementById(SpecificContent).innerText = data.content;
                      // var like=document.createElement(button);
                      //   $("#readMore").append(like);
                        console.log(data.Like);
                           
        $("#like").on("click",()=>{
          console.log("hey man");
          
          data.Like += 1 ;
        })
       
                    });
                    // console.log(data);
                    // // console.log(specificContent);
                    // array.forEach(element => {
                      
                    // });
                   
                                     
                   

  
                  } 

                })                
            }
        });
        



     
        $("#cate").click(function(){

          


          for(var i = 0; i < a.length; i++) {
            var obj = a[i];
            var likejava;           
            if(obj.category=="j"){
                  console.log(obj);
                }             
        }

        })
        //post the blog
        $("#post").click(function(){              
          $.ajax({           
            type: 'POST',
            dataType: 'json',          
            url: 'http://localhost:3333/blogdata',
            data: {
             "content":$(".content").val(),
             "category":$('#category :selected').val(),
             "title":$("#title").val(),
            } ,             
            dataType:'json',
            success: function(result){              
                console.log('result');
            }                     
          })
        })
        
    
})
