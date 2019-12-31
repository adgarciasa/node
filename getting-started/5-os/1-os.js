const os =require('os')

console.log('OS platform:', os.platform())

console.log('OS CPU architecture:', os.arch())

console.log('# of logical CPU cores:', os.cpus().length)

console.log('Home direcroty for current user:', os.homedir())

console.log('Line 1' + os.EOL + 'Line 2' + os.EOL + 'Line 3')
