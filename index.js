import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import exphbs from "express-handlebars";
import router from './routes/routes.js'
import DB from './database/connection.js';

const app = express();

dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));

app.use("/assets", express.static("assets"));

app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use('/', router)


app.listen(process.env.PORT || 5000, () => {
  console.log(`Serving at ${process.env.PORT || 5000}`);
});