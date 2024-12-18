const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

//without using the routes folder
// app.get("/api/contacts", (req, res) => {
//   res.status(200).json({message:"Get all contacts"});
// });

//  -> /api/contacts so thid one is commom api url

//middleware
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
