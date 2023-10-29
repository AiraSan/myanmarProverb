const express = require("express");
const { title,content } = require("./Data");
const app = express();

const port = 3000;
app.listen(port, () => console.log(`Localhost starting at port ${port}...`));

// Register view engine and middleware
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static('dist'));

app.get("/", (req, res) => {
    res.render("index", {title})
})

app.get("/title", (req, res) => {
    res.send(title)
})

app.get("/content", (req, res) => {
    res.send(content)
})

app.get("/:id", (req, res) => {
    const id = req.params.id;
    const filteredProverb = content.filter(proverb => proverb.TitleId == id);
    res.render("details", {proverbTitle: title[id - 1].TitleName,  proverbs: filteredProverb})
})
