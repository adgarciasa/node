//existe un objeto "process" en el que podemos escribir, dar valores de entrada y salida y error, podemos editar en el muchas cosas, si se necesita muevele
console.log('Current user is', process.env.USER)

console.log('\nScript executed with:')

console.log('VAL1 equal to:', process.env.VAL1)
console.log('VAL1 equal to:', process.env.VAL2)

/*
Puedes usar node con Custom environment variables

- Puedes mandar los valores de las variables al momento de mandar el comando de node
$ VAL1=10 VAL2=20 node 1-custom-env-variables.js

- Puedes setear las variables antes de madar el comando de node
$ export VAL1=100
$ export VAL2=200
$ node 1-custom-env-variables.js

- Puedes usar prosses.arvg{...} para agrupar argumentos y luego mostrarlos
$ node -p "process.argv" hello 42 43

- Otra forma es de ver los procesos es obteniendo o mandando un output string
$ node 
$ process
    stdout: [Getter], //for output
    stderr: [Getter], //for error
    stdin: [Getter],  //for input
// un ejemplo de como funciona seria la diferencia de lo que regresan estas dos lineas
$ console.log('hola')
    hello
    undefined
$ process.stdout.write('hello\n')
    hello
    true
*/