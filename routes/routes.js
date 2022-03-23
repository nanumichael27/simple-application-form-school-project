import express from "express";
import Prevention from "sqlstring";

import DB from "../database/connection.js";

const router = express.Router();

// Load form page
router.get("/", (req, res) => {
  res.render("form");
});

// Load success page
router.get("/success", (req, res) => {
  res.render("success");
});

// Handling form Submit
router.post("/create", (req, res) => {
  const data = req.body;
  let errors = []

  if (data.program == null || data.gender === null ) {
    errors.push({ msg: "Please fill in all check option fields" })
  }
  if (data.department || data.gender === 'select' ) {
    errors.push({ msg: "Please fill in all select option fields" });
  }
  if (data.firstname === '' || 
      data.middlename === '' ||
      data.lastname === '' ||
      data.matriculationNumber === '' ||
      data.address === '' ||
      data.email === '' 
  ) {
    errors.push({ msg: 'Please fill in all fields' });
  }
  if (errors.length > 0) {
    res.render('form', {
      errors,
    });
  } else {
    DB.query(
      `INSERT INTO formdata(
      firstname,
      middlename,
      lastname,
      matriculationNumber,
      department,
      program,
      level,
      gender,
      address,
      email
      ) VALUES (
        ${Prevention.escape(data.firstname)},
        ${Prevention.escape(data.middlename)},
        ${Prevention.escape(data.lastname)},
        ${Prevention.escape(data.matriculationNumber)},
        ${Prevention.escape(data.department)},
        ${Prevention.escape(data.program)},
        ${Prevention.escape(data.level)},
        ${Prevention.escape(data.gender)},
        ${Prevention.escape(data.address)},
        ${Prevention.escape(data.email)}
    )`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        return res.redirect("success");
      }
    );
  }
});

// View all entries
router.get("/dashboard-admin", (req, res) => {
  DB.query(`SELECT * FROM formdata`, (err, formInfo) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { formInfo })
    }
  });
});

// View specific entry
router.get("/show/:id", (req, res) => {
  const id = req.params.id;
  DB.query(`SELECT * FROM formdata WHERE id = ${id} LIMIT 1`, (err, formInfo) => {
    if (err) {
      console.log(err)
    }
    return res.render("show", { formInfo });
  });
});

export default router
