const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// setup
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("sign_in");
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/email_detail", (req, res) => {
  res.render("email_detail");
});

app.get("/sign_up", (req, res) => {
  res.render("sign_up");
});

app.get("/inbox", (req, res) => {
  res.render("inbox", {
    data: [
      { username: "Charlie", subject: "Project Update", date: "2022-07-19" },

      { username: "Henry", subject: "Meeting", date: "2022-08-13" },
      { username: "Frank", subject: "Discussion", date: "2023-05-04" },
      { username: "Ivy", subject: "Review", date: "2022-08-10" },
      { username: "Bob", subject: "Vacation Plans", date: "2022-05-24" },
      { username: "Ivy", subject: "Review", date: "2023-07-24" },
      { username: "Emma", subject: "Project Update", date: "2023-05-13" },
      { username: "Grace", subject: "Project Update", date: "2023-07-22" },
      { username: "Emma", subject: "Review", date: "2022-04-24" },
      {
        username: "Charlie",
        subject: "Important Announcement",
        date: "2023-08-12",
      },
    ],
  });
});

app.get("/outbox", (req, res) => {
  res.render("outbox", {
    data: [
      { username: "Charlie", subject: "Project Update", date: "2022-07-19" },

      { username: "Henry", subject: "Meeting", date: "2022-08-13" },
      { username: "Frank", subject: "Discussion", date: "2023-05-04" },
      { username: "Ivy", subject: "Review", date: "2022-08-10" },
      { username: "Bob", subject: "Vacation Plans", date: "2022-05-24" },
      { username: "Ivy", subject: "Review", date: "2023-07-24" },
      { username: "Emma", subject: "Project Update", date: "2023-05-13" },
      { username: "Grace", subject: "Project Update", date: "2023-07-22" },
      { username: "Emma", subject: "Review", date: "2022-04-24" },
      {
        username: "Charlie",
        subject: "Important Announcement",
        date: "2023-08-12",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
