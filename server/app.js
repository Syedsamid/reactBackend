import express from "express"
import config from "config"
import userRouter from  "./controllers/Users/users.js"
import "./utils/dbConnect.js"

import path from "path";
// the path module is used to work with file and directory paths in Node.js.

import { fileURLToPath } from "url"; 
// The fileURLToPath functioon is used to conbert a file URL to a file path.

// console.log(__filename); 
// console.log(__dirname);

const __filename = fileURLToPath(import.meta.url); 
//import.meta.url gives the current module's URL as a file:// URL

const __dirname = path.dirname(__filename); 
// path.dirname(__filename) extracts the directory from the full file path

const app = express();
const PORT = config.get("PORT")

app.use(express.static(path.join(__dirname, "dist"))); 

app.use(express.json());

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg: "Server is running"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.get("/file",(req,res)=>{
    try {
        res.status(200).sendFile(path.join(__dirname, "data.json"));
        // res.status(200).sendFile(path.join(__dirname, "file.txt"));
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.use("/api/users",userRouter)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
  

app.listen(PORT,()=>{
    console.log(`Server is runnig at PORT number ${PORT}`);
})