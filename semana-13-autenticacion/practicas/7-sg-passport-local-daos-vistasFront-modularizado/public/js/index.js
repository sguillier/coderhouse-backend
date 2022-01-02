

const Temp = async () => {
    const request = await fetch('http://localhost:8080/api/auth')
    const res = await request.json()

    console.log(res)
    if (res) {
        html = `
        <div class="session-display-content">
            <h2> Bienvenido ${res.firstname} </h2>
            <button id="logout-button">
                Cerrar Session
            </button>

        </div>`
        document.getElementById('session-display').innerHTML = html
        const botonLogOut = document.getElementById("logout-button")
        botonLogOut.addEventListener('click', async () => {
            const request = await fetch('http://localhost:8080/api/logout')
            html = `
            <div class="session-display-content">
                <h2> Adios!! </h2>
            </div>`
            document.getElementById('session-display').innerHTML = html
            setTimeout(
                () => { window.location.href = "http://localhost:8080" }, 3000
            )
        })
    } else {
        html = `
        <div class="session-display-content">
            <button id="button-login">
                Iniciar Sesion
            </button>

        </div>`
        document.getElementById('session-display').innerHTML = html
        const botonLogIn = document.getElementById("button-login")
        botonLogIn.addEventListener('click', async () => {
            window.location.href = "http://localhost:8080/login";
        })
    }
}

Temp()



// const botonLogIn = document.getElementById("button-register")
// botonLogIn.addEventListener('click', async () => {
//     window.location.href = "http://localhost:8080/register";
// })


// const botonLogIn = document.getElementById("button-login")
// botonLogIn.addEventListener('click', async () => {
//     window.location.href = "http://localhost:8080/login";
// })


