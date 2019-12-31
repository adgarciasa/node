setInterval(() => {
    console.log('Hello Event Loop!!')
}, 5000)

// Event loop es la lista de eventos por hacer, por lo que no te puedes quedar atrapado en los procesos
// debes llamarlos y ponerlos a trabajar, hasta que un callback te diga que ya ha terminado