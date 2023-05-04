const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler');
const db = require('./routes/db');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routesHandler)
app.use(cors);

app.get('/projects', (req, res) => {
  const q = `SELECT * FROM projects`;
  db.query(q, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
})

app.post("/projects", (req, res) => {
  const q = "INSERT INTO projectss (`name`, `desc`) VALUES (?)";
  const values = [req.body.name, req.body.desc];

  db.query(q, [values], (err, result) => {
    if (err) throw err;
    return res.json("project added!");
})});

app.delete("/projects/:id", (req, res) => {
  const projId = req.params.id;
  const q = "DELETE FROM projects WHERE id = ?";

  db.query(q, [projId], (err, result) => {
    if (err) throw err;
    return res.json("project deleted!");
  })
});

app.put("/projects/:id", (req, res) => {
  const projId = req.params.id;
  const q = "UPDATE projects SET `title` =?, `desc` =? WHERE id =?";

  const values = [req.body.name, req.body.desc];

  db.query(q, [...values,projId], (err, result) => {
    if (err) throw err;
    return res.json("project updated!");
  })
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});