import express from "express";
import Prevention from "sqlstring";

import DB from "../database/connection";

const router = express.Router();

router.get("/", (req, res) => {
  DB.query(`SELECT * FROM form-data`, (err, formInfo) => {
    if (err) {
      console.log(err);
    } else {
      res.render("dashboard", { formInfo });
    }
  });
});

router.post("/create", (req, res) => {
  const data = req.body;
  DB.query(
    `INSERT INTO form-data(firstname,
    middlename,
    lastname,
    matriculation-number,
    department,
    program,
    level,
    gender,
    address,
    email,
) VALUES (
        ${Prevention.escape(data.firstname)},
        ${Prevention.escape(data.middlename)},
        ${Prevention.escape(data.lastname)}
        ${Prevention.escape(data.matriculation - number)}
        ${Prevention.escape(data.department)}
        ${Prevention.escape(data.program)}
        ${Prevention.escape(data.level)}
        ${Prevention.escape(data.gender)}
        ${Prevention.escape(data.address)}
        ${Prevention.escape(data.email)}
    )`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      return res.redirect("/");
    }
  );
});

router.get("/show/:id", (req, res) => {
  const id = req.params.id;
  DB.query(`SELECT * FROM form-data WHERE id = ${id} LIMIT 1`, (err, details) => {
    if (err) {
      console.log(err);
    }
    return res.render("show.hbs", { details });
  });
});

module.exports = router
