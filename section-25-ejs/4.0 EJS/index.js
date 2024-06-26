import express from "express";

const app = express();
const port = 3000;

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

app.get("/", (req, res) => {
  const today = new Date();
  console.log(today);
  const day = today.getDay();
  console.log(day);

  let type = "a weekday";
  let adv = "it's time to work hard";
  let specific = week[day];

  if (day === 0 || day === 6) {
    type = "weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    daySpecific: specific,
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
