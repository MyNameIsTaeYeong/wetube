import express from "express";
const app = express()
 
const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on: ${PORT}`);


const handleHome = (req, res) => {res.send("Hi from home!!!");}


const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("between");
    next();
};


app.get("/", handleHome);

app.use(betweenHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);