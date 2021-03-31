const noteRouter = require('express').Router();
const { Note } = require('../../models');

// * Print Errors and Create Response Object 
const handleError = (message, route, err, msgError) => {
    if (route && err) console.log({ route }, err);
    return {
        message: {
            msgBody: message,
            msgError: msgError,
            error: err
        }
    };
};


// * Create New Note
noteRouter.post('/new', (req, res) => {
    const note = new Note(req.body);
    note.save(err => {
        if (err) res.status(500).json(
            handleError('Error Saving Note in Database', '/api/note/new', err, true)
        );
        else {
            res.status(200).json(
                handleError('Successfully Saved Note', '/api/note/new', err, false)
            );
        }
    });
});

// ** Get All Notes
noteRouter.get('/all', (req, res) => {
    Note.find({}, (err, notes) => {
        if (err) res.status(500).json(
            handleError('Error Has Occurred in Database Search', '/api/note/all', err, true)
        );
        
        if (notes) res.status(400).json(
            { notes }
        )
    });
});

module.exports = noteRouter;
