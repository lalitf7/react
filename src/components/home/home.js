const axios = require("axios").default;


async function getPosts() {
    return new Promise((resolve) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            resolve({status : "SUCCESS", data: response.data})
        })
        .catch((error) => {
            resolve({status: "Error", message: error.message})
        });
    })
}
async function run() {
  //  let response = await getPosts();
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(response)
}

// async function test() {
//     return new Promise((resolve, reject) => {
//         try {
//             throw new Error ('Error');
//             resolve("Success")
//         } catch (error) {
//             reject(error.message)
//         }
//     })
// }
// test();
function Home (){
    return(
        <div>Home Routes</div>
        
    )
}

export default Home