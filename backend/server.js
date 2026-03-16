const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const bookingRoutes = require("./routes/bookings");

const app = express();
const PORT =process.env.PORT || 3000
app.use(cors());
app.use(bodyParser.json());

app.use("/api",bookingRoutes);

app.listen(PORT,()=>{

console.log("Server running on port" + PORT);

});