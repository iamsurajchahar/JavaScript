//fetch api

//The Fetch api provides an interface for fetching (sending/receiving) resources

//it uses requestion and response objects.

//the fetch() mwthod is uses to fetch a resource (data).

//let promise = fetch(url,[option]) 


const URL = "https://cat-fact.herokuapp.com/facts";

const factspara = document.querySelector("#facts");
const factbtn = document.querySelector("#btn");

// const getfacts = async ()=>{
//     console.log("Loading the data...");
//     let response = await fetch(URL);
//     console.log(response);                 //async methods
//     let data = await response.json();
    
//     factspara.innerText = data[4].text;
// }; 
function getfacts(){
    fetch(URL)
          .then((res)=>{
           return res.json();        //Promise chaining
          })
          .then((data)=>{
            factspara.innerText =data[2].text;
          });
}

factbtn.addEventListener("click",getfacts);