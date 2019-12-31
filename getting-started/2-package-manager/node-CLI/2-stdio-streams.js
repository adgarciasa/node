/* este input se le asigna una propiedad de leible
donde lo que se lee es guardado en la const chunk
luego imprime el mensjae como output
*/
process.stdin.on('readable', () => {

    const chunk = process.stdin.read()
    
    if (chunk !== null) {
        process.stdout.write(chunk)
    }
})

// or
// process.stdin.pipe(process.stdout)