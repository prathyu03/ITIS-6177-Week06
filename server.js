const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say', (req, res) => {
    const url = 'https://gm8ivd4ya0.execute-api.us-east-1.amazonaws.com/V2/datadisplay' + '?keyword=' + req.query.keyword;
    axios.get(url)
        .then((resp) => {
            res.send(resp.data.body);
        })
        .catch(err => {
            console.log(err.message);
        });
});

app.listen(port, () => {
    console.log(`The app is running at ${port}`);
});