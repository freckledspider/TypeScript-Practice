import { Application, Request, Response, RequestHandler } from "express"

const express = require("express")

// Create application object
const app: Application = express()

const controller: RequestHandler = (req: Request, res: Response) => {
    res.json({"Message": "Hello World"})
}

// Routes
app.get("/", controller)

app.listen(4000, () => {

})