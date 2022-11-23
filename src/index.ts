import express from "express"

const port = 3000;

const app = express()

app.get("/check", (req, res, next) => {
    res.json({message: "server is working!"})
})

app.listen(port, () => {
    console.log("server is running on port:", port)
})