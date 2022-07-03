// creating our own server in the Module in the Node js
const http=require("http");


const PORT=5500;

const hostname="localhost";


const server=http.createServer((req,res)=>{
    // req.end("congrats on creting ownserver by yourself bro");
    res.end("working fine bro keep clearing node js")
    

})

server.listen(PORT,hostname,()=>{
    console.log("everything working fine at http://localhost:5500")
    
})

