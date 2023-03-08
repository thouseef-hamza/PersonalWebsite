// function sendMail(){
//   var params = {
//     name:document.getElementById("name").value ,
//     email:document.getElementById("email").value ,
//     subject:document.getElementById("subject").value ,
//     message:document.getElementById("message").value ,
//   };
//   const serviceID = "service_wsbp0p6" ;
 //const templateID = "template_n1kgjdt";

// emailjs.sen(serviceID,templateID,params)
// .then(
//   res =>{
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("subject").value = "";
//     document.getElementById("message").value = "";
//     console.log(res);
//     alert("your message sent successfully");
//   })
//   .catch((err=>console.log(err)));

// }
function sendmail(e)
{
    event.preventDefault();
    console.log("conected",document.getElementById('name').value,);
    console.log("conected",document.getElementById('email').value,);

    console.log("conected",document.getElementById('subject').value,);

    console.log("conected",document.getElementById('message').value);

  var params ={
    name:document.getElementById('name').value,
    from_name:document.getElementById('email').value,
    sub:document.getElementById('subject').value,
    message:document.getElementById('message').value
    };
  
    const serviceID = "service_wsbp0p6" ;
    const templateID = "template_n1kgjdt";
    emailjs.send(serviceID,templateID,params)
    .then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value=""; 
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully"+res);

    })
    .catch((err) =>console.log(err));
}

