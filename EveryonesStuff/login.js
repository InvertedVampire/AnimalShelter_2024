const form = document.querySelector("form")

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    console.log(username)
    console.log(password)
    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.replace("homepage.html")
    }else{
        alert("wrong")
    }
})

//function for checking username and password

function authentication(username,password){
    if(username === "admin" && password === "password"){
        return true;
    }
    else{
        return false;
    }
}