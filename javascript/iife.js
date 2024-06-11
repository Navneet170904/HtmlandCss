// Immediately Invoked Function Expresssions(IIFE)
// for removing a global space pollution me use iife ()()

(function chai(){
    // it is a named iife because it have a name chai
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`DB Connected two ${name}`)
})('navneet')