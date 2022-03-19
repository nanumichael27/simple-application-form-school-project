import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import exphbs from "express-handlebars";
import DB from './database/connection.js';

const app = express();

dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));

app.use("/assets", express.static("assets"));

app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');


app.get("/", (req, res) => {
  res.render("form")
});

app.post('/', (req, res) => {
  res.redirect('dashboard')
})

app.get("/dashboard", (req, res) => {
  res.render("index");
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Serving at ${process.env.PORT || 5000}`);
});