import express from "express";
import userRoutes from "./routes/dashboard.route.js";
import connection from "./connection.js";
// import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes);


app.use((err,req, res, next) => {
  if(err) {
    return res.json({
      success : false,
      message : err.message,
    })
  }
  return res.send('success');
})


app.listen(PORT, () => {
  console.log(`app listening at ${PORT}`);
});
