//Async-Await

//async function always returns a promise 

//await pauses the execution of its surrounding async function until the promise is settled 

//async function myfuc(){....}
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("getting weather data");
            resolve(200);
        }, 5000);
    });
}                                        //Async Function

async function getweatherdata(){ //is function se bechne ka tarika
    await api(); //first call     // IIFE: Immediatley Invoked funcrion expression
    await api();  //second call
}