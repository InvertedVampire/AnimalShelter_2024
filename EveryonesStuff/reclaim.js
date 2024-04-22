const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const intakenumber = form.intakenumber.value

    console.log(intakenumber)
    const validation = validate(intakenumber)

    if(validation){
         window.location.replace("payment.html")
    }else{
      alert("wrong")  
    }

})

function validate(intakenumber){
    if (intakenumber === "1234") {
        return true;
    }
    else {
       return false;
    }
}