const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const { contactsRouter, authRouter } = require("./routes/api");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());

app.use(express.json());
app.use(express.static("public"));
//вона дивиться чи є в ній тіло запиту body

app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);
// як це  працює? якщо щось починається з "/api/contacts" то шукай його в contactsRouter

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
