const express = require("express");
const {connectMongodb} = require("./connection");
const {logReqRes} = require("./middleWares");
const userRouter = require("./routes/user");


const app = express();
const PORT = 8000;

//connection
connectMongodb("mongodb://127.0.0.1:27017/company")
.then(()=> console.log("MongoDB Connected!!"));



//middleWare- plugin
app.use(express.urlencoded({ extended : false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log('server started at port 8000'));