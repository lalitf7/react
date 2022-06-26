const axios = require("axios").default;

async function run() {
    let response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
    )
}