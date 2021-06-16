const router = require('express').Router();
const auth = require('../middleware/auth');
const ToDo = require('../models/Todo');

router.post("/", auth, async(req,res) => {
    try{
        const { title } = req.body;

        if(!title)
            return res.status(400).json({msg: "Todo title not entered."});

        const newToDo = new ToDo({
            title
        });
        const savedToDo = await newToDo.save();
        res.json(savedToDo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get("/all", auth, async(req,res) => {
    const todos = await ToDo.find({});
    res.json(todos);
})

module.exports = router;