const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "john",
    },
    {
      id: 2,
      name: "alice",
    },
    {
      id: 3,
      name: "Bob",
    },
    {
      id: 4,
      name: "Hitesh",
    },
    {
      id: 5,
      name: "Lu",
    },
  ]);
});

app.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
