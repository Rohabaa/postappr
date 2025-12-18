function deletepost() {
  var card = event.target.parentNode.parentNode
  card.remove()
}
function editpost() {
  var card = event.target.parentNode.parentNode

  var title = card.childNodes[5].childNodes[1].innerHTML
  var description = card.childNodes[5].childNodes[3].innerHTML
  document.getElementById("postinput").value = title
  document.getElementById("about").value = description
  card.remove()
  // console.log(event.target.parentNode.parentNode.parentNode  );
  console.log(title);
}
function register(event) {
  event.preventDefault()
  var name = document.getElementById("logname").value
  var email = document.getElementById("logemail").value
  var pass = document.getElementById("logpass").value
  var cpass = document.getElementById("logCpass").value

  var data = {
    name: name,
    email,
    pass,
    cpass
  }
  if (!name) {
   Swal.fire({
  icon: "error",
  title: "Oops... ",
  text: "Details are required",
});
  } else if (pass !== cpass) {
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Passwords should be identical",
});
  } else {
    localStorage.setItem("data", JSON.stringify(data))
    // console.log(data);
Swal.fire({
  title: "registered successfully",
  icon: "success",
  draggable: true
});
    window.location.href = "/dashboard.html"
  }
}
function login() {
  event.preventDefault()
  let loginemail = document.getElementById("loginemail").value
  let loginpass = document.getElementById("loginpass").value
  let getdata = JSON.parse(localStorage.getItem("data"))
  if (getdata.email !== loginemail) {
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "invalid Email",
});
  } else if (getdata.cpass !== loginpass) {
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Invalid password",
});
  } else {
    Swal.fire({
  title: "Login successfully",
  icon: "success",
  draggable: true
});
    window.location.href = "/dashboard.html"
  }

}
function Logout() {
  window.location.href = "/"
}
var bg;

function imagepost(src) {
  localStorage.setItem("bg", src)

  let bgimg = document.getElementsByClassName("bgimg")
  for (let i = 0; i < bgimg.length; i++) {
    bgimg[i].classList.remove("forborder")
  }
  event.target.classList.add("forborder")
}

// Simple version
function postIt() {
  let postinput = document.getElementById("postinput").value
  let about = document.getElementById("about").value
  if (!postinput || !about) {
    alert("Title aur Description dono required hain")
    
    return
  }
  
  var postdata = {
    title: postinput,
    descr: about
  }
  if(!arr){
    var arr = []
  }
  arr.push(postdata)
  let sendtolocal = localStorage.setItem("postdata", JSON.stringify(arr)) 
  // console.log(sendtolocal);
  showPostcard()
}
let displaycard = document.getElementById("display")
function showPostcard() {
  let getpostdata = JSON.parse(localStorage.getItem("postdata")) 
  // console.log(getpostdata[i].title);
  
  var useremail = JSON.parse(localStorage.getItem("data"))
  let bg = localStorage.getItem("bg")
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
 for (var i=0 ; getpostdata.length; i++){
  displaycard.innerHTML += `
  <div class="card post2  ">
 
                          <div class="class-header m-2">${useremail.email} </div> 
                          <div class ="date m-2"> ${hours}:${minutes}:${seconds}</div>
 
   <div style="background-image: url(${bg});"  class="card-body">
  
 
 
     <h5 class="card-title">${getpostdata[i].title}</h5>
     <p class="card-text">${getpostdata[i].descr}.</p> 
     </div>
   <div class="ed"> <button onclick="editpost()" type="button" class="btn  edit1 ">Edit</button> 
 
  <button onclick="deletepost()" type="button" class="btn edit2 ">Delete</button> </div> 
 </div> 
              `
 }
}
