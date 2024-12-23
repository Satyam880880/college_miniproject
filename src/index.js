import dotenv from "dotenv"

import connectionDB from "./db/index.js";
import {app} from "./app.js"
dotenv.config({
    path:'./env'
})


connectionDB()
.then(()=>{
    app.listen(process.env.PORT || 5000 , () =>{
        console.log(`Server is running at port  : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!", err);
})
