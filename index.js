function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function Spy(){
        console.log("I am a Spy");
    }
}

function returnsAnAnonymousFunction(){
    return function(){ console.log("I am anonymous");};
}