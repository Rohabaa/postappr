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
function showPostcard() {
    const title = document.getElementById('postinput').value;
    const description = document.getElementById('about').value;
    
    if (!title || !description) {
        alert('Please fill all fields');
        return;
    }
    
    // Get existing posts or create new array
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    // Add new post
    posts.push({
        title: title,
        description: description
    });
    
    // Save to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));
    
    // Display post
    const displayDiv = document.getElementById('display');
    displayDiv.innerHTML += `
        <div class="card post2 mb-3">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
            </div>
        </div>
    `;
    
    // Clear inputs
    document.getElementById('postinput').value = '';
    document.getElementById('about').value = '';
    
    alert('Post saved to localStorage!');
}