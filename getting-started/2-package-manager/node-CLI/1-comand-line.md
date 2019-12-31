// watch the version of node
$ node -v

// how many machines cpu has
// -p make you a superuser
$ node -p "cpus().length"

// the version of the engine of v8 in you pc
$ node -p "process.versions.v8"

// list of comands for less, all of those are other lists that with comands inside that you can use 
$ node -h | less

// we can enter in one of those lists, and it will show you the list of comands with --v8-options, some ot them are already in progress
$ node --v8-options | less

// you can see which of them are in progress
$ node --v8-options | grep "in progress"

$ node -h
//shows eveeryting, starting with environment variables


$ NODE_DEBUG="http" node 1-hello-world.js