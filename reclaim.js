const intakenumber = documemt.getElementById('intakenumber')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>  {
    let messages = []
    if (intakenumber.value === '' || intakenumber == null) {
        messages.push('Intake Number is required')
    }

    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})





