const router = require('express').Router();
const note = require('./note.routes');
// const admin = require('./admin.routes');

router.use('/api/note', note);
// router.use('/api/admin', admin);


module.exports = router;