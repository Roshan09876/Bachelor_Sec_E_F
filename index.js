// const express = require("express");
// const connectToDatabase = require("./db/db");
// connectToDatabase()
// const app = express();
// app.use(express.json())

// app.use("/api/user", require("./routes/userRoute"))

// const PORT = 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`)
// });

// app.get("/", (req, res) => {
//     res.send("Hello, Backend is running ..hurray")
// })






















const express = require("express");
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Roshan Kumar Khadka ")
});

console.log("Hello world")