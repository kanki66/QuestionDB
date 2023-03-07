const express = require('express');
const router = express.Router();

db = [];

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET req to /questions',
        database: db
    })
});

router.post('/', (req, res, next) => {
    db.push(req.body);
    res.status(200).json({
        message: 'Handling POST req to /questions',
        posted: req.body
    })
});

router.delete('/:questionId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted question!'
    })
});

module.exports = router;