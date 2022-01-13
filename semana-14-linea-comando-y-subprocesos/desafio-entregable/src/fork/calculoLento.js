

const calculoLento = () => {

    const N = 1000
    const acumulador = []
    for (let i = 0; i < N; i++) { acumulador.push(0) }

    let sum = 0
    for (let i = 0; i < 6e8; i++) {
        const n = parseInt(Math.floor(Math.random() * N))
        acumulador[n]++
    }

    // console.log(acumulador)

    return acumulador
}


export default calculoLento

