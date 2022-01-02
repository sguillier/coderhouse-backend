

const Temp = async () => {
    const request = await fetch('http://localhost:8080/api/auth')
    const res = await request.json()

    console.log(res)
    if (res) {
        window.location.href = "http://localhost:8080/home"
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

