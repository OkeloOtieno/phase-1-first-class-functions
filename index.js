function receivesAFunction(cb) {
    cb()
}
function returnsANamedFunction(){
   return fn = () => console.log("You are joking")
}
function returnsAnAnonymousFunction(){
    return () => console.log("No I am not")
}