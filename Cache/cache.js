require('dotenv').config();
const redis = require("redis");

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

client.on("connect", function(error){
    console.log("Conectado!");
});

client.on("error", function(error){
    console.log(error);
});

const obj = {
    nome: "Paulo Freitas",
    email: "paulo.freitas.nt@gmail.com",
    profissao: "professor"
};

// Add key
 client.set("Key", JSON.stringify(obj), function(err,resp){
     if(err) throw err;
     console.log(resp);
 });

// Search key
 client.get("Key", function(err, reply){
     if(reply != null){
         const key = JSON.parse(reply.toString());
         console.log(key);
     }else{
         console.log("Not key");
     }
 });


// Time life
client.setex("Key", 7200, JSON.stringify(obj), function(err, resp){
    if(err) throw err;
    console.log(resp);
}); 


// Remove key
// client.del("Key", function(err, resp){
//     if(err) throw err;
//     console.log(resp);
// });
