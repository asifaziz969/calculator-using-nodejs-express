const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3040;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const operation = req.body.operation;
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        res.send("Cannot divide by zero");
        return;
      }
      break;
    default:
      res.send("Invalid operation");
      return;
  }


  res.send(`The result is: ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

