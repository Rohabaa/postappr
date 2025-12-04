function register(){
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
    if(!name){
        alert("Name is required")
    }else if(pass !== cpass){
        alert("Passwords should be identical")
    }else{
        localStorage.setItem("data",JSON.stringify(data))
        alert(name+" Registered Successfully")
        window.location.href="/dashboard.html"
    }
}