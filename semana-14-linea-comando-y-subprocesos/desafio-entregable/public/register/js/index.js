

// const formLogin = document.getElementById('form-logup')
// formLogin.addEventListener('submit', async e => {
//     e.preventDefault()


//     const data = {
//         nombre: document.getElementById('login-nombre').value,
//     }


//     const urlApi = 'http://localhost:8080/api/session/logup/'
//     fetch(urlApi, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: { 'Content-Type': 'application/json' }
//     }).then(res => res.json())
//         .catch(error => console.error('Error:', error))
//         .then(response => {
//             console.log('Success:', response)
//             window.location.href = "http://localhost:8080";
//         });


// })

const botonLogIn = document.getElementById("button-login")
botonLogIn.addEventListener('click', async () => {
    window.location.href = "http://localhost:8080/login";
})
