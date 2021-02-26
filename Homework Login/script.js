document.getElementById("submit").addEventListener("click", function(){
    let username=document.getElementById("username").value
    let pass=document.getElementById("password").value

    if(username=="admin123" && pass=="user"){
       alert("Login succesfully");
        
    }else{
        console.log("Try again");
    }
    
})