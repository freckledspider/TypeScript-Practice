"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Create application object
const app = express();
// Routes
app.get("/", (req, res) => {
    res.json({ "Message": "Hello World" });
});
app.listen(4000, () => {
    console.log("Listening on port 4000");
});
