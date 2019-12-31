console.dir(global, { depth: 0 }) //declarando un objeto global

/*
$ node 1-dir.js //asi veras todas las variables clobales
$ node
# setTimeout
# global.setTimeout //asi se declaran las variables qu quieras hacer globales, pero setTimeout ya es global por lo que no tiene sentido hacer esto
*/