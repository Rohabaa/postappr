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
        alert("Name is required")
    } else if (pass !== cpass) {
        alert("Passwords should be identical")
    } else {
        localStorage.setItem("data", JSON.stringify(data))
        console.log(data);
        
        alert(name + " Registered Successfully")
        window.location.href = "/dashboard.html"
    }
}
function login(){
    event.preventDefault()
   var loginemail = document.getElementById("loginemail").value
  var loginpass =   document.getElementById("loginpass").value
  var getdata = JSON.parse(localStorage.getItem("data"))
  if(getdata.email !== loginemail){
    alert("invalid")
  }else if(getdata.pass !== loginpass){
    alert("invalid pass")
  }else{
alert("sucess")
window.location.href = "./dashboard.html"
  }
}
// Simple version
