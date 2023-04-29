import { Application, Request, Response, RequestHandler } from "express"

const express = require("express")

// Create application object
const app: Application = express()

// Routes
app.get("/", (req: Request, res: Response) => {
    res.json({"Message": "Hello World"})
})

app.get("/cheese", (req: Request, res: Response) => {
    res.send("cheese")
})

app.listen(4000, () => {
    console.log("Listening on port 4000")
})