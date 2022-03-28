const app=require("./src/index.js");

app.post("/users",async(req,res)=>{
try{
    const user=await User.insert(req.body);

    res.status(200).send(user);
}catch{
    return res.status(500).send(err);
}
});

app.get("/toDos",async(req,res)=>{
    try{
        const toDo=await toDo.insert(req.body);
        res.status(200).send(toDo)
    }catch{
        res.status(500).send(err);
    }
})