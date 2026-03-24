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

router.get("/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const user = users.find((u) => u.id === userId);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ error: "User not found" });
	}
});

router.post("/", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
})

module.exports = router;
