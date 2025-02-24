import axios from "axios";

async function apicall(){
    try {
        // let response = await axios.get("https://api.github.com/users")
        // let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        // console.log(
        //     response.data.forEach((x)=>{
        //         console.log(x.title);
        //     })
        // );

        let response = await axios.get("https://weather.suhail.app/file")
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

apicall()



