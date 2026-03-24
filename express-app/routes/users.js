const express = require("express");
const router = express.Router();

let users = [
    {
        id: 1,
        name: "Valeria",
    },
    {
        id: 2,
        name: "Egor",
    },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send({
        items: users,
    });
});

router.post("/", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
})

module.exports = router;
