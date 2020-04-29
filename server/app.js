
const express = require('express');
const app = express();


app.get('/api', (req, res) => {

    res.json([
        {
            id: 1,
            username: 'DADAada'
        },
        {
            id: 2,
            username: 'Water'
        }
    ])

})


app.listen('3001', () => {
    console.log('listening on port 3001');
})