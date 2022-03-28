const app=require("./index");

const connect=require("./configs/db");


app.listen(6000,async()=>{
    try{
        await connect();
        console.log("Listening on port 6000")
    }catch{
        console.log("Something went wrong")
    }
    
})

