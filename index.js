import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { engine } from "express-handlebars";
import DB from './database/connection.js';

const app = express();

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// app.use("/assets", express.static("assets"));



// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/application-form.html");
// });

app.get("/", (req, res) => {
  res.render("form")
});

app.post('/', (req, res) => {
  res.redirect('/dashboard')
})

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/dashboard.html");
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Serving at ${process.env.PORT || 5000}`);
});