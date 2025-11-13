 
 function deletepost(){
 var card =  event.target.parentNode.parentNode  
 card.remove()
 }
 function editpost(){
  var card =  event.target.parentNode.parentNode

  var  title = card.childNodes[5].childNodes[1].innerHTML
  var  description = card.childNodes[5].childNodes[3].innerHTML
  document.getElementById("postinput").value = title
  document.getElementById("about").value = description
  card.remove()
  // console.log(event.target.parentNode.parentNode.parentNode  );
  console.log(title);
 }
 
 function createaccount() {
  var fname = document.getElementById("fname").value;

  var lname = document.getElementById("lname").value;
  var pass = document.getElementById("pass").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("mob").value;
  var city = document.getElementById("city").value;
  console.log(fname, lname);

  if (fname && lname && email && pass && phone && city) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    document.getElementById("signupBox").style.display = "none";
    document.getElementById("postcard").style.display = "block";
    document.body.classList.remove("active");
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all fields!",
    });
  }
}
var display = document.getElementById("display");
function showPostcard() {
  var email = document.getElementById("email").value;
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  var title = document.getElementById("postinput").value;
  var description = document.getElementById("about").value;
if(title.trim() && description.trim()){
    display.innerHTML += `
 <div class="card post2 ">
 <div class="class-header header1">${email} </div>

<div class ="date"> ${hours}:${minutes}:${seconds}</div>

  <div style="background-image: url(${bg});"  class="card-body">
    <h5 class="card-title ">${title}</h5>
    <p class="card-text">${description}</p>
 
   
 </div>
     <div class="ed"> <button onclick="editpost()" type="button" class="btn  edit1 ">Edit</button> 

 <button onclick="deletepost()" type="button" class="btn edit2 ">Delete</button> </div>

</div>
`;
  document.getElementById("postinput").value = "";
  document.getElementById("about").value = "";
} else {
    Swal.fire({
      icon: "error",
      title: "Empty Post...",
      text: "Enter title & description",
    });
}

}
 var bg ;
function imagepost(src){
  bg = src
  console.log(bg);
  var bgimg = document.getElementsByClassName("bgimg")
  console.log(bgimg);
  for (var i=0 ; i< bgimg.length; i++ ){
    bgimg[i].className = "bgimg"
  }
  
   event.target.classList.add("forborder")
}